import styled from "styled-components";
import { HeaderFooterContainer } from "../app/styled";

export const Footer = styled.footer`
  padding: 20px 0;
  background-color: #c2c3d5;
  margin: 0;
`;

export const FooterContainer = styled(HeaderFooterContainer)`
  align-items: center;
`;

export const FooterLogo = styled(FooterContainer)`
  text-align: start;
`;

export const FooterName = styled(FooterContainer)`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;
