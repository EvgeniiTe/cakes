import styled from "styled-components";

function flexItem() {
  return `
    width: 300px;
    height: auto;
    `;
}

function name() {
  return `font-weight: bold;
  font-size: 45px;
  cursor: pointer;`;
}

function logo() {
  return `
    text-align: center;
    `;
}

export const CreateDiv = styled.div`
  ${(props) => (props.className.includes("flex-item") ? flexItem() : "auto")};

  ${(props) => (props.className.includes("logo") ? logo() : null)};

  ${(props) => (props.className.includes("name") ? name() : null)};
`;
