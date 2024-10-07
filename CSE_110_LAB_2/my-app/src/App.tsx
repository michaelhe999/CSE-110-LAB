import './App.css';
import { dummyNotesList } from "./constant"; 
import React, { useState } from 'react';
import { ClickLikeButton, LikedNotes } from './likes';
import { ThemeProvider } from './ThemeContext';
import { ToggleButton } from './ToggleButton';

function App() {
  const [notes, setNotes] = useState(dummyNotesList);
  const [likedNotes, setLikedNotes] = useState<string[]>([]); // Move likedNotes state here

  return (
    <div className='body'>
      <form className="note-form">
        <label htmlFor="note-title">Note Title</label>
        <div><input className="form-title" placeholder="Note Title"></input></div>
        <label htmlFor="note-content">Note Content</label>
        <div><textarea className="form-text"></textarea></div>
        <label htmlFor="note-label">Note Label</label>
        <div><select className="form-label">
          <option value="personal">Personal</option>
          <option value="study">Study</option>
          <option value="work">Work</option>
          <option value="other">Other</option>
        </select></div>
        <div><button type="submit" className="note-form-button">Create Note</button></div>
      </form>
    <div className='app-container'>
      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item">
            <div className="notes-header">
              <ClickLikeButton
                itemName={note.title}
                likedNotes={likedNotes}
                setLikedNotes={setLikedNotes}
              />
              <button>x</button>
            </div>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
            <p> {note.label} </p>
          </div>
        ))}
      </div>
      <div className="toggle">
      <ThemeProvider>
      <div className="app">
        <h1>Theme Toggle</h1>
        <ToggleButton />
      </div>
    </ThemeProvider>
    </div>
      <div className="liked-grid">
        <h1>Liked Notes</h1>
        <LikedNotes likedNotes={likedNotes} /> {/* Pass likedNotes */}
      </div>
    </div>
    </div>
  );
}

export default App;