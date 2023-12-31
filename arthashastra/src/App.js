import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route  path="/" element={<Home />} />
    </Routes>
    <Footer />
   </Router>
   </>
  );
}

export default App;
