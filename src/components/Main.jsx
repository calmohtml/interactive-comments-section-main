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
      margin: 6.5px auto;
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

  const CommentsReplyButton = styled.span`
    display: flex;
    align-items: center;

    #reply {
      color: var(--moderate-blue);
      font-weight: 500;
      margin-left: 5px;
    }
  `;
  /**/

  const RepliesContainer = styled.section`
    /* background: var(--white); */
  `;

  const Replies = styled.article`
    display: grid;
    grid-template-columns: 5% auto;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 7.5px;
    background: var(--white);
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
      margin: 6.5px auto;
      color: var(--grayish-blue);
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

  const RepliesReplyButton = styled.span`
    display: flex;
    align-items: center;

    #reply {
      color: var(--moderate-blue);
      font-weight: 500;
      margin-left: 5px;
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
                      @{replyingTo} {content}
                    </p>
                  </RepliesInfo>
                </Replies>
              </RepliesContainer>
            )
          )}
        </CommentsContainer>
      ))}
    </Container>
  );
};

export default Main;
