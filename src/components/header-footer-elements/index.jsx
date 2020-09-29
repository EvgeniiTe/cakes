import React from "react";
import { SocialLinks } from "../social-links";
import { Logo } from "../logo";

const name = () => {
  return <p>Bohemian Cakes</p>;
};

export const headerElements = [
  { element: name, className: "HeaderName" },
  { element: Logo, className: "HeaderLogo", props: { height: "280rem" } },
  { element: SocialLinks, className: "FlexItem" },
];

export const footerElements = [
  { element: Logo, className: "FooterLogo", props: { height: "100rem" } },
  { element: name, className: "FooterName" },
  { element: SocialLinks, className: "FlexItem" },
];
