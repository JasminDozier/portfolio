import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="container is-fluid jd-layout">
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
