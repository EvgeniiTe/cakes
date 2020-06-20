import styled from "styled-components";
import { HeaderFooterContainer } from "../app/styled";

export const Header = styled.header`
  padding: 35px 0 0 0;
  background-color: #c2c3d5;
  margin: 0;
`;

export const HeaderContainer = styled(HeaderFooterContainer)``;

export const FlexItem = styled.div`
  width: 300px;
  height: auto;
`;

export const HeaderLogo = styled(FlexItem)`
  text-align: center;
`;

export const HeaderName = styled(FlexItem)`
  font-weight: bold;
  font-size: 45px;
  cursor: pointer;
`;
