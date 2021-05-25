import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dataBase} from './firebase';
// import firebase from "firebase";
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Login';
import Button from '@material-ui/core/Button';

function App() {

const[notes, setNotes] = useState([]);


useEffect(() => {
  getTodo();
},[]);

function getTodo() {
  dataBase.collection("todo").onSnapshot(function (querySnapshot){
    setNotes(
      querySnapshot.docs.map((doc) => ({
        id : doc.id,
        title : doc.data().title,
        content : doc.data().content,
      }))
    );
  });
}

const logout = () => {
  auth.signOut();
}

 const [user] = useAuthState(auth);
 console.log(user);

 return (
  user ?  <div>
      <Header/>
      <Button style={{"marginLeft" : "20px", "marginTop" : "30px"}} onClick={logout}  variant="outlined">Log out</Button>
      <CreateArea/>
      {notes.map((todo ,index)  => (
       <Note
       key = {index} 
       title={todo.title}
       content={todo.content}
       id={todo.id} />
     ))}
      <Footer />
    </div>  : <Login/>
   
  );
 }
export default App;
