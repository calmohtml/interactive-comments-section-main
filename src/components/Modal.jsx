import React, { Fragment } from "react";
import styled from "styled-components";

const Modal = ({ showModal, setShowModal }) => {
  const ModalContainer = styled.section`
    background-color: rgb(103, 114, 126, 0.5);
    display: flex;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
  `;

  const Modal = styled.div`
    background-color: var(--white);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    padding: 2rem;
    width: 65%;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      text-align: left;
    }

    p {
      color: var(--grayish-blue);
      font-size: 0.8rem;
      text-align: left;
    }
  `;

  const ModalButtons = styled.div`
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      border-radius: 5px;
      color: var(--white);
      font-size: 1rem;
      outline: none;
      padding: 1rem 2rem;
      text-transform: uppercase;

      :first-child {
        background: var(--dark-blue);
      }

      :last-child {
        background: var(--soft-red);
      }
    }
  `;

  return (
    <Fragment>
      {showModal ? (
        <ModalContainer>
          <Modal>
            <h2>Delete comment</h2>
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <ModalButtons>
              <button>No, cancel</button>
              <button>Yes, delete</button>
            </ModalButtons>
          </Modal>
        </ModalContainer>
      ) : null}
    </Fragment>
  );
};

export default Modal;
