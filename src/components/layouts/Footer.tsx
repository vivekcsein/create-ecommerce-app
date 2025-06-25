import React from "react";

interface HeaderProps {
  isMobile: boolean;
}

const Footer = ({ isMobile }: HeaderProps) => {
  return <div>{isMobile}</div>;
};

export default Footer;
