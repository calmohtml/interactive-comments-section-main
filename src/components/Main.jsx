import React, { useState, useEffect, Fragment } from "react";
import {
  Container,
  CommentsContainer,
  Comments,
  CommentsLikeButton,
  CommentsInfo,
  CommentsUser,
  CommentsReplyButton,
  CommentsDeleteButton,
  RepliesContainer,
  Replies,
  RepliesLikeButton,
  RepliesInfo,
  RepliesUser,
  RepliesReplyButton,
  RepliesDeleteButton,
} from "../style/Main";
import Reply from "../../images/icon-reply.svg";
import Delete from "../../images/icon-delete.svg";
import Edit from "../../images/icon-edit.svg";
import UserInput from "./UserInput";
import Modal from "./Modal";

const Main = () => {
  const [comments, setComments] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  console.log(showReplyInput);

  const openModal = () => {
    setShowModal((toggle) => !toggle);
  };

  // READ
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/comments");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };
  // READ

  // DELETE
  const deleteComment = async (comment) => {
    try {
      const response = await fetch(
        `http://localhost:3001/comments/${comment.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      setComments(comments.filter((comment) => comment.id !== comment.id));
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };
  // DELETE

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {comments.map(({ id, content, createdAt, score, user, replies }) => (
        <CommentsContainer key={id}>
          <Comments>
            <CommentsLikeButton>
              <div>
                <button>+</button>
                <span>{score}</span>
                <button>-</button>
              </div>
            </CommentsLikeButton>
            <CommentsInfo>
              <div>
                <CommentsUser>
                  <img
                    src={`${user.image.png}`}
                    alt={`Image of ${user.username}`}
                  />
                  <h3>{user.username}</h3>
                  <h4>{createdAt}</h4>
                </CommentsUser>
                <div>
                  {/* Conditional Rendering */}
                  {user.username != "juliusomo" ? (
                    <CommentsReplyButton
                      onClick={() => setShowReplyInput(!showReplyInput)}
                      // Showing the input
                    >
                      <img src={Reply} alt="Reply icon" />
                      <p id="reply">Reply</p>
                    </CommentsReplyButton>
                  ) : (
                    <Fragment>
                      <CommentsReplyButton>
                        <img src={Edit} alt="Edit icon" />
                        <p id="reply">Edit</p>
                      </CommentsReplyButton>
                      <CommentsDeleteButton
                        /* 
                        onClick={() => {
                          deleteComment({ id });
                        }} 
                        */
                        onClick={openModal}
                      >
                        <Modal
                          showModal={showModal}
                          setShowModal={setShowModal}
                          deleteComment={() => {
                            deleteComment({ id });
                          }}
                        />
                        <img src={Delete} alt="Delete icon" />
                        <p id="delete">Delete</p>
                      </CommentsDeleteButton>
                    </Fragment>
                  )}
                  {/* Conditional Rendering */}
                </div>
              </div>
              <p>{content}</p>
            </CommentsInfo>
            {/* Displaying the input */}
            {showReplyInput == true ? <UserInput /> : null}
          </Comments>
          {replies.map(
            ({ id, content, createdAt, score, replyingTo, user }) => (
              <RepliesContainer key={id}>
                <Replies>
                  <RepliesLikeButton>
                    <div>
                      <button>+</button>
                      <span>{score}</span>
                      <button>-</button>
                    </div>
                  </RepliesLikeButton>
                  <RepliesInfo>
                    <div>
                      <RepliesUser>
                        <img
                          src={`${user.image.png}`}
                          alt={`Image of ${user.username}`}
                        />
                        <h3>{user.username}</h3>
                        <h4>{createdAt}</h4>
                      </RepliesUser>
                      <div>
                        {/* Conditional Rendering */}
                        {user.username != "juliusomo" ? (
                          <RepliesReplyButton
                            onClick={() => setShowReplyInput(!showReplyInput)}
                            // Showing the input
                          >
                            <img src={Reply} alt="Reply icon" />
                            <p id="reply">Reply</p>
                          </RepliesReplyButton>
                        ) : (
                          <Fragment>
                            <RepliesReplyButton>
                              <img src={Edit} alt="Reply icon" />
                              <p id="reply">Edit</p>
                            </RepliesReplyButton>
                            <RepliesDeleteButton
                              /* 
                              onClick={() => {
                                deleteComment(id);
                              }} 
                              */
                              onClick={openModal}
                            >
                              <Modal
                                showModal={showModal}
                                setShowModal={setShowModal}
                                deleteComment={() => {
                                  deleteComment(id);
                                }}
                              />
                              <img src={Delete} alt="Delete icon" />
                              <p id="delete">Delete</p>
                            </RepliesDeleteButton>
                          </Fragment>
                        )}
                        {/* Conditional Rendering */}
                      </div>
                    </div>
                    <p>
                      <span>@{replyingTo}</span> {content}
                    </p>
                  </RepliesInfo>
                  {/* Displaying the input */}
                  {showReplyInput == true ? <UserInput /> : null}
                </Replies>
              </RepliesContainer>
            )
          )}
        </CommentsContainer>
      ))}
      <UserInput />
    </Container>
  );
};

export default Main;
/* 
{user.username != "juliusomo" ? null : (
                          <RepliesDeleteButton
                            onClick={() => {
                              deleteComment(id);
                            }}
                          >
                            <Modal
                              showModal={showModal}
                              setShowModal={setShowModal}
                            />
                            <img src={Delete} alt="Delete icon" />
                            <p id="delete">Delete</p>
                          </RepliesDeleteButton>
                        )} 
*/
