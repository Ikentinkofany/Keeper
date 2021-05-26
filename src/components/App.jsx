import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
    const [notes, setNotes] = useState([]);
    const addNote = (title, content) => {
        setNotes(prevState => {
            return ([...prevState, {title: title, content: content}])
        });
    }

    const deleteNote = (id) => {
        setNotes(prevState => {
            return notes.filter((note, i) => {
                return i!==id;
            });
        });
    }

    return (
    <div>
        <Header/ >
        <CreateArea addBtn={addNote} / >
        {notes.map((note, i) => (
                <Note 
                    key={i}
                    id={i}
                    title={note.title}
                    content={note.content} 
                    deleteBtn={deleteNote}   
                />
            ))}
        <Footer/ >    
    </div>
    );
}

export default App;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/