// App.js
import Wrapper from "./components/layout/Wrapper";
import Navbar from "./components/layout/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
  const [pagina, setPagina] = useState("login");

  async function handleLogin(form) {
    console.log("login:", form);
    setPagina("home");
  }

  return (
    <Wrapper>
      <Navbar />
      {pagina === "login" && <Login onSubmit={handleLogin} loading={false} />}
      {pagina === "home"  && <Home />}
    </Wrapper>
  );
}

export default App;