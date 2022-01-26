import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  place-content: center;
  min-height: 100vh;
  max-width: 45rem;
  margin: 0 auto;
`;

/**/

export const CommentsContainer = styled.section`
  /* background: var(--white); */
`;

export const Comments = styled.article`
  display: grid;
  grid-template-columns: 5% auto;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 7.5px;
  background: var(--white);
  margin-top: 10px;
`;

export const CommentsLikeButton = styled.div`
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

export const CommentsInfo = styled.div`
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

export const CommentsUser = styled.span`
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

export const CommentsReplyButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  margin: 0px 10px;

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

export const CommentsDeleteButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;

  #delete {
    color: var(--soft-red);
    font-weight: 700;
    margin-left: 7px;
    font-size: 13px;
  }

  :hover {
    opacity: 0.7;
  }
`;

/**/

export const RepliesContainer = styled.section`
  border-left: 1px solid var(--grayish-blue);
  margin-left: 50px;
`;

export const Replies = styled.article`
  display: grid;
  grid-template-columns: 5% auto;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 7.5px;
  background: var(--white);
  margin-left: 60px;
`;

export const RepliesLikeButton = styled.div`
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

export const RepliesInfo = styled.div`
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

export const RepliesUser = styled.span`
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

export const RepliesReplyButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  margin: 0px 10px;

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

export const RepliesDeleteButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;

  #delete {
    color: var(--soft-red);
    font-weight: 700;
    margin-left: 7px;
    font-size: 13px;
  }

  :hover {
    opacity: 0.7;
  }
`;
