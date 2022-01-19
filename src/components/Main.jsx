import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Reply from "../../images/icon-reply.svg";
import UserInput from "./UserInput";

const Main = () => {
  const Container = styled.main`
    display: grid;
    place-content: center;
    min-height: 100vh;
    max-width: 45rem;
    margin: 0 auto;
  `;

  /**/

  const CommentsContainer = styled.section`
    /* background: var(--white); */
  `;

  const Comments = styled.article`
    display: grid;
    grid-template-columns: 5% auto;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 7.5px;
    background: var(--white);
    margin-top: 10px;
  `;

  const CommentsLikeButton = styled.div`
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

  const CommentsInfo = styled.div`
    margin: 0 10px;

    div {
      display: flex;
      justify-content: space-between;
    }

    p {
      margin: 8px auto;
      color: var(--grayish-blue);
    }
  `;

  const CommentsUser = styled.span`
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

  const CommentsReplyButton = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;

    #reply {
      color: var(--moderate-blue);
      font-weight: 700;
      margin-left: 7px;
      font-size: 13px;
    }

    :hover {
      opacity: 0.7;
    }
  `;

  /**/

  const RepliesContainer = styled.section`
    border-left: 1px solid var(--grayish-blue);
    margin-left: 50px;
  `;

  const Replies = styled.article`
    display: grid;
    grid-template-columns: 5% auto;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 7.5px;
    background: var(--white);
    margin-left: 60px;
  `;

  const RepliesLikeButton = styled.div`
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

  const RepliesInfo = styled.div`
    margin: 0 10px;

    div {
      display: flex;
      justify-content: space-between;
    }

    p {
      margin: 8px auto;
      color: var(--grayish-blue);

      span {
        color: var(--moderate-blue);
        font-weight: 500;
      }
    }
  `;

  const RepliesUser = styled.span`
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

  const RepliesReplyButton = styled.button`
    display: flex;
    align-items: center;
    background: transparent;
    border: none;

    #reply {
      color: var(--moderate-blue);
      font-weight: 700;
      margin-left: 7px;
      font-size: 13px;
    }

    :hover {
      opacity: 0.7;
    }
  `;

  const [comments, setComments] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/comments");
      const data = await response.json();
      setComments(data);
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
                <CommentsReplyButton>
                  <img src={Reply} alt="Reply icon" />
                  <p id="reply">Reply</p>
                </CommentsReplyButton>
              </div>
              <p>{content}</p>
            </CommentsInfo>
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
                      <RepliesReplyButton>
                        <img src={Reply} alt="Reply icon" />
                        <p id="reply">Reply</p>
                      </RepliesReplyButton>
                    </div>
                    <p>
                      <span>@{replyingTo}</span> {content}
                    </p>
                  </RepliesInfo>
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
{
  "id": 4,
  "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
  "createdAt": "2 days ago",
  "score": 2,
  "replyingTo": "ramsesmiron",
  "user": {
    "image": {
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  }
} 
*/
