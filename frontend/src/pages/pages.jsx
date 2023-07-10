import { Route, Routes } from "react-router-dom";
import HomeView from "../pages/home";
import Header from "../components/header.component";
import Footer from "../components/footer.component";
import Application from "../pages/application";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import { useCookies } from "react-cookie";
import SignOut from "../pages/sign-out";
import About from "../pages/About";
import ListApplication from "../pages/list";

const Pages = () => {
  const [cookie, setCookies] = useCookies(["user"]);
  return (
    <>
      <Header user={cookie.user} />
      <main>
        <Routes>
          <Route path="/" element={<HomeView user={cookie.user} />} />
          <Route
            path="/application"
            element={<Application user={cookie.user} />}
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route
            path="/my-applications"
            element={<ListApplication user={cookie.user} />}
          />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Pages;
