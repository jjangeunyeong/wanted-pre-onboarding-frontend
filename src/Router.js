import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main/Main";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Todo from "pages/Todo/Todo";
import NotFound from "pages/NotFound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
