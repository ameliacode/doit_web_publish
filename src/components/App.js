import AppRouter from "components/Router";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header/>
      <Footer/>
      <AppRouter/>
    </Router>
  );
}

export default App;
