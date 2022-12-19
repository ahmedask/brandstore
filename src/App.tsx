import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Main from "./views/Main";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { user } from "./data/user";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const { state, dispatch } = useContext(AppContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, setSignIn] = useState(state?.isLoggedIn);
  const [warn, setWarn] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (username === user[0].userName && password === user[0].password) {
      dispatch({ type: "SET_LOGGED_IN" });
      return setSignIn(true);
    } else {
      console.log("Wrong username or password");
      return setWarn("Wrong username or password");
    }
  };

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state?.cart));
    localStorage.setItem("isLoggedIn", JSON.stringify(signIn));
  });
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <LoginForm
                userInfo={user}
                username={username}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                onSubmit={onSubmit}
                sigIn={signIn}
                warn={warn}
              />
            }
          />
          <Route element={<ProtectedRoutes sigIn={signIn} />}>
            <Route path="main" element={<Main />} />
          </Route>
          <Route element={<ProtectedRoutes sigIn={signIn} />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
