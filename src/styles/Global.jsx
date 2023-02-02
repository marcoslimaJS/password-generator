import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  ul {
	list-style: none;
  }
  a {
    text-decoration: none;
  }
  img{
    max-width: 100%;
  }
  button {
    border: none;
  }
  body {
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    background: #18171F;
    color: #E6E5EA;
    min-height: 100vh;
  }
`;
