import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((response) => {
      console.log("promise fulfilled");
      console.log(response.data);
      setNotes(response.data);
    });
  }, []);

  const toggleImportance = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id == id);
    const changedNote = { ...note, important: !note.important };
    // console.log(changedNote);
    // console.log(axios.put(url, changedNote));
    axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((n) => (n.id !== id ? n : response.data)));
    });
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      // console.log(response.data);
      setNotes(notes.concat(response.data));
      setNewNote("");
      console.log(notes);
    });
  };

  const handleNoteChange = (e) => {
    let noteContent = e.target.value;
    setNewNote(noteContent);
    console.log(noteContent);
  };
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
