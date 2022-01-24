import React, { Fragment } from "react";
import { ModalContainer, ModalText, ModalButtons } from "../style/Modal";

const Modal = ({ showModal, setShowModal, deleteComment }) => {
  return (
    <Fragment>
      {showModal ? (
        <ModalContainer>
          <ModalText>
            <h2>Delete comment</h2>
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <ModalButtons>
              <button onClick={() => setShowModal((toggle) => !toggle)}>
                No, cancel
              </button>
              <button onClick={deleteComment}>Yes, delete</button>
            </ModalButtons>
          </ModalText>
        </ModalContainer>
      ) : null}
    </Fragment>
  );
};

export default Modal;
