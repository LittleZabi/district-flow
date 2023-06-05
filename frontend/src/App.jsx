import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomeView from "./pages/home";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import Application from "./pages/application";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeView/>} />
          <Route path="/application" element={<Application/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
