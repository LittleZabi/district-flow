import { Routes, BrowserRouter, Route } from "react-router-dom";
import Admin from "./admin/admin";
import Pages from "./pages/pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<Pages />} />
        <Route exact path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
