import React from "react";
import Navigation from "../Navigation_bar/Navigation.tsx";
import Header from "../Header/Header.tsx";
import Main from "../Main_body/Main.tsx";
import Footer from "../Footer/Footer.tsx";

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
