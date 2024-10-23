import React from "react";

interface HeaderProps {
  title?: string; // Example prop (optional)
  onClick?: () => void; // Example event handler prop (optional)
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>FakeShop</h2>
      </div>
    </div>
  );
};

export default Header;
