import "./App.css";
import Navigation from ".//components/Navigation_bar/Navigation";
import Header from ".//components/Header/Header";
import Main from ".//components/Main_body/Main";
import Footer from ".//components/Footer/Footer";

function App() {
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

export default App;
