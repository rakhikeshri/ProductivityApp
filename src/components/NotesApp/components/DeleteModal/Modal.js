import React from "react";
import "./modal.css";

function Modal({ setOpenModal, clearNotes }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h3>Are you sure you want to delete all notes?</h3>
        </div>
        <div className="footer">
          <button onClick={() => clearNotes()}>Yes</button>
          <button onClick={() => { setOpenModal(false) }} id="cancelBtn" > No </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;