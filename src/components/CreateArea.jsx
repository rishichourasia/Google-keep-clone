import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import {dataBase} from './firebase.js';
// import firebase from 'firebase';

function CreateArea() {

    const [isDisable, setDisable]= useState(true);

    const [note, setNote] = useState({
        title :"",
        content : ""
    });

    function handleChange(event){  setDisable(false);
        const{name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value ,
               
            }
        });
    }

    function submitNote(event){
        // props.onAdd(note);
        event.preventDefault();
        dataBase.collection("todo").add({
          content : note.content ,
          title : note.title,
        })
       
          setNote({
            title: "",
            content:  ""
        });
        setDisable(true);
    }
  return (
    <div>
      <form className="create-note">
        <input  onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea  onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button disabled={isDisable} onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
