import styled from "styled-components";

export const Items = styled.ul`
  margin: 0;
  padding: 30px 20px;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  list-style-type: none;
  width: 180px;
  height: 230px;
  border: 4px solid #dedede;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    transform: scale(1.2);
    transition: transform 1s ease-out;
  }
`;

export const ItemName = styled.p`
  color: #123459;
  padding-bottom: 7px;
  margin-top: auto;
  margin-bottom: 0;
  text-align: center;
`;
