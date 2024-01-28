import React from "react";
import Navigation from "../Navigation_bar/Navigation";
import Header from "../Header/Header";
import Main from "../Main_body/Main";
import Footer from "../Footer/Footer";

function HelpPage() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HelpPage;
