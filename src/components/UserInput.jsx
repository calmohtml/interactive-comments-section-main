import React, { useRef } from "react";
import { UserInputContainer, Textarea } from "../style/UserInput";
import UserPhoto from "../../images/avatars/image-juliusomo.png";

const UserInput = () => {
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
