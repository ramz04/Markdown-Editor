import React from "react"
import PropTypes from 'prop-types'

export default function Sidebar({notes, currentNote, setCurrentNoteId, newNote, deleteNote}) {
    const noteElements = notes.map((note, index) => (
        <div key={index}>
            <div
                
                className={`title ${
                    note.id === currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

Sidebar.propTypes = {
    setCurrentNoteId: PropTypes.func.isRequired,
    currentNote: PropTypes.func.isRequired,
    notes: PropTypes.func.isRequired,
    newNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
  };