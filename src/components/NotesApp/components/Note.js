import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import '../NotesApp.css'

const Note = ({ notes, deleteNote, editNote }) => {
  return (
    <>
      {notes.map((note) => {
        const { id, text, date } = note;
        return (
          <div className="note" key={id}>
            <span>{text}</span>
            <div className="note-footer">
              <small>{date}</small>
              <div className="icons">
                <MdDeleteForever
                  onClick={() => deleteNote(id)}
                  className="delete-icon"
                  size="1.3em"
                />
                <FaEdit
                  onClick={() => editNote(id)}
                  size="1.3em"
                  className="edit-icon"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Note;
