import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton
        onClick={(e) => {
          e.preventDefault();
          props.deleteBtn(props.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
