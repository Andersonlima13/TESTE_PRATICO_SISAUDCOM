import Wrapper from "./components/layout/Wrapper";
import Navbar from "./components/layout/Navbar/Navbar";
import Login from "./pages/Login/Login";

function App() {
  async function handleLogin(form) {
    // POST /auth/login
    console.log("login:", form);
  }

  return (
    <Wrapper>
      <Navbar />
      <Login onSubmit={handleLogin} loading={false} />
    </Wrapper>
  );
}

export default App;
