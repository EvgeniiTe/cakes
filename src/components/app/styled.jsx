import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: padding-box;
}

body {
    font-family: Georgia, 'Times New Roman', Times, sans-serif;
}

main {
    background-color: aquamarine;
}

a {
    text-decoration: none;
    color: #ffffff;
}
`;

export const MainContainer = styled.div`
  max-width: 1366px;
  margin: auto;
`;

export const HeaderFooterContainer = styled.div`
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #ffffff;
  margin: auto;
`;
