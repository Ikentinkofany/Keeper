import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: "" });
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleClick = (e) => {
    setIsClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClicked &&
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        }
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked? "3" : "1"}
        />
        <Zoom in={isClicked}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              props.addBtn(note.title, note.content);
              setNote({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
