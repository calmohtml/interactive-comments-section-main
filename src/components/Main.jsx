import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Reply from "../../images/icon-reply.svg";

const Main = () => {
  const Container = styled.main`
    display: grid;
    place-content: center;
    min-height: 100vh;
    max-width: 45rem;
    margin: 0 auto;
  `;

  const Comments = styled.section`
    /* background: var(--white); */
  `;

  const CommentsContainer = styled.article`
    display: grid;
    grid-template-columns: 5% auto;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 7.5px;
    background: var(--white);
  `;

  const CommentsUser = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 3.5px;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      background: var(--light-gray);
      border-radius: 5px;

      button {
        background: transparent;
        border: none;
        color: var(--light-grayish-blue);
        font-weight: 700;
      }

      span {
        color: var(--moderate-blue);
        margin: 10px 0;
        font-weight: 500;
      }
    }
  `;

  const CommentUser = styled.span`
    display: flex;
    align-items: center;

    img {
      width: 32px;
    }

    h3 {
      margin: 0 10px;
    }

    h4 {
      color: var(--grayish-blue);
      font-weight: 400;
    }
  `;

  const CommentsReplyButton = styled.span`
    display: flex;
    align-items: center;

    #reply {
      color: var(--moderate-blue);
      font-weight: 500;
      margin-left: 5px;
    }
  `;

  const CommentInfo = styled.div`
    margin: 0 10px;

    div {
      display: flex;
      justify-content: space-between;
    }

    p {
      margin: 6.5px auto;
      color: var(--grayish-blue);
    }
  `;

  const [comments, setComments] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {comments.map(({ id, content, createdAt, score, user, replies }) => (
        <Comments key={id}>
          <CommentsContainer>
            <CommentsUser>
              <div>
                <button>+</button>
                <span>{score}</span>
                <button>-</button>
              </div>
            </CommentsUser>
            <CommentInfo>
              <div>
                <CommentUser>
                  <img
                    src={`${user.image.png}`}
                    alt={`Image of ${user.username}`}
                  />
                  <h3>{user.username}</h3>
                  <h4>{createdAt}</h4>
                </CommentUser>
                <CommentsReplyButton>
                  <img src={Reply} alt="Reply icon" />
                  <p id="reply">Reply</p>
                </CommentsReplyButton>
              </div>
              <p>{content}</p>
            </CommentInfo>
          </CommentsContainer>
          {replies.map(
            ({ id, content, createdAt, score, replyingTo, user }) => (
              <Comments key={id}>
                <CommentsContainer>
                  <CommentsUser>
                    <div>
                      <button>+</button>
                      <span>{score}</span>
                      <button>-</button>
                    </div>
                  </CommentsUser>
                  <CommentInfo>
                    <div>
                      <CommentUser>
                        <img
                          src={`${user.image.png}`}
                          alt={`Image of ${user.username}`}
                        />
                        <h3>{user.username}</h3>
                        <h4>{createdAt}</h4>
                      </CommentUser>
                      <CommentsReplyButton>
                        <img src={Reply} alt="Reply icon" />
                        <p id="reply">Reply</p>
                      </CommentsReplyButton>
                    </div>
                    <p>
                      @{replyingTo} {content}
                    </p>
                  </CommentInfo>
                </CommentsContainer>
              </Comments>
            )
          )}
        </Comments>
      ))}
    </Container>
  );
};

export default Main;
