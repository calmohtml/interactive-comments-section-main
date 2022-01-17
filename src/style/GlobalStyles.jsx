import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --moderate-blue: #5457b6;
    --soft-red: #ed6468;
    --light-grayish-blue: #c3c4ef;
    --pale-red: #ffb8bb;

    --dark-blue: #324152;
    --grayish-blue: #67727e;
    --light-gray: #eaecf1;
    --very-light-gray: #f5f6fa;
    --white: #ffffff;
  }

  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--very-light-gray);
    color: var(--dark-blue)
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;

export default GlobalStyles;
