import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import UpdatePost from "../pages/UpdatePost";
import Newpost from "../pages/Newpost";
import Footer from "../components/Footer";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Navbar />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route element={PrivateRouter}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/updatePost/:id" element={<UpdatePost />} />
          <Route path="/newpost" element={<Newpost />} />
        </Route>
        <Footer />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
