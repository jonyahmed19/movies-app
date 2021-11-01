import React from "react";

const Header = ({ search, searchChange }) => {
  return (
    <header className="header">
      <form onSubmit={search}>
        <input
          onChange={searchChange}
          type="text"
          placeholder="Search..."
          className="search"
        />
      </form>
    </header>
  );
};

export default Header;
