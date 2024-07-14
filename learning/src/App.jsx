import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  console.log("Current notes:", notes);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const toggleImportance = (id) => {
    const note = notes.find((n) => n.id == id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((n) => (n.id !== id ? n : returnedNote)));
      })
      .catch((err) => {
        alert(`the note '${note.content}' was already deleted from server```);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
      console.log(notes);
    });
  };

  const handleNoteChange = (e) => {
    let noteContent = e.target.value;
    setNewNote(noteContent);
    console.log(noteContent);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            toggleImportance={() => toggleImportance(note.id)}
            note={note}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
        <p>{newNote}</p>
      </form>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important only" : "all"}
        </button>
      </div>
    </div>
  );
};

export default App;
