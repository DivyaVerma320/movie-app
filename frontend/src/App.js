import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import { BrowserRouter } from "react-router-dom";
import Routor from "./routes";

import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routor />
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
