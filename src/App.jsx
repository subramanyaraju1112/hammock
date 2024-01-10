import "./App.css";
import Banner from "./components/Banner";
import Corporate from "./components/Corporate";
import Experience from "./components/Experience";
import Holidays from "./components/Holidays";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Packages />
      <Experience />
      <Corporate />
      <Holidays />
    </>
  );
}

export default App;
