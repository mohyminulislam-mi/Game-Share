import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="bg-white sticky top-0 z-50">
        <Header />
      </header>
      {/* Body / Main section */}
      <main>
        <Outlet />
      </main>
      {/* footer part */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
