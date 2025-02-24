import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className = "" }) => {
  return <h1 className={`text-2xl md:text-6xl fascinate-inline ${className}`}>{children}</h1>;
};

export default Header;
