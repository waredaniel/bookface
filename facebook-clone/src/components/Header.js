import React from "react";

function Header(){
  const headerStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
  }
  return (
    <div style={headerStyles}>
      <h1>BookFace</h1>
    </div>
  );
}

export default Header;