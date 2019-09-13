import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="container is-fluid">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
