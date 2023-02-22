import AppRouter from "components/Router";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
      <AppRouter/>
    </Router>
  );
}

export default App;
