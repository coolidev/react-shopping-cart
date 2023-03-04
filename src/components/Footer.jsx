import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; {currentYear} <strong>Veggy</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
