import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedCard, closeModal, handleModalClick }) => {
  return (
    <motion.div
      className="modal"
      onClick={handleModalClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        style={{ perspective: "800px", transformStyle: "preserve-3d", position: "relative" }}
      >
        {/* Render the modal content here */}
        <div className="modal-text-content">
          <h2>{selectedCard.title}</h2>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            style={{ maxWidth: "400px", maxHeight: "400px", margin: "10px auto" }}
          />
          <div id="modal-content">{/* Wrap the <p> element in a div with id */}
            <p style={{ textAlign: "justify" }}>{selectedCard.content}</p>
          </div>
        </div>
        <button onClick={closeModal}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
