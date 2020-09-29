import styled from "styled-components";

export const Nav = styled.nav`
  padding: 15px 0;
  margin: 0;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

export const Li = styled.li`
  margin-right: 150px;
  font-size: large;
  text-decoration: none;
  color: #ffffff;

  :last-child {
    margin-right: 0;
  }

  :hover {
    text-decoration: none;
    color: #ffffff;
    transform: scale(1.2);
    transition: transform 1s ease;
  }
`;
