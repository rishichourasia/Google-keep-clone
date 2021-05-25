import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { dataBase} from './firebase';

function Note({title,content,id}) {
  
  
  function handleDelete(){
    dataBase.collection("todo").doc(id).delete();
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
