import styled from "styled-components";

export const UserInputContainer = styled.form`
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

export const Textarea = styled.textarea`
  outline: none;
  padding: 16px 20px;
  border: 2px solid var(--light-gray);
  resize: none;
  height: 100px;
  width: 100%;
  border-radius: 7.5px;
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  margin: 0 10px;
  color: var(--grayish-blue);
`;
