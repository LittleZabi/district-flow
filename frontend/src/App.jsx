import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomeView from "./pages/home";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeView/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
