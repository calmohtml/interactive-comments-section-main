import React, { useRef } from "react";
import styled from "styled-components";
import UserPhoto from "../../images/avatars/image-juliusomo.png";

const UserInput = () => {
  const UserInputContainer = styled.form`
    background: var(--white);
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-content: center;
    padding: 1rem;
    align-items: flex-start;
    border-radius: 7.5px;

    img {
      width: 32px;
    }

    button {
      background-color: var(--moderate-blue);
      border-radius: 7.5px;
      color: var(--white);
      border: none;
      padding: 12px 25px;
      font-size: 1rem;
      cursor: pointer;
      text-transform: uppercase;
      font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    }
  `;

  const Textarea = styled.textarea`
    outline: none;
    padding: 16px 20px;
    border: 2px solid var(--light-gray);
    resize: none;
    height: 100px;
    width: 100%;
    border-radius: 7.5px;
    font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    margin: 0 10px;
    color: var(--grayish-blue);
  `;

  // CREATE
  const commentValue = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let comment = commentValue.current.value;
      const response = await fetch("http://localhost:3001/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: "",
          content: comment,
          createdAt: "0 days ago",
          score: 1,
          replyingTo: [],
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
          replies: [],
        }),
      });
      window.location = "/";
      // Clean the textarea
      commentValue.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };
  // CREATE

  return (
    <UserInputContainer onSubmit={handleSubmit}>
      <img src={UserPhoto} alt="User image" />
      <Textarea
        type="text"
        name="content"
        id="content"
        cols="30"
        rows="10"
        placeholder="Add a comment..."
        ref={commentValue}
        defaultValue=""
      ></Textarea>
      <button type="submit">SEND</button>
    </UserInputContainer>
  );
};

export default UserInput;
