import React, { useState } from "react";
import LoginPage from "./LoginPage/LoginPage";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";

function AlphaPage() {
  const adminUser = {
    email: "sid@email.com",
    password: "12345sid",
  };
  const [context, setContext] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
      setContext(details.name);
    } else {
      console.log("details incorrect");
      setError("incorrect details");
    }
  };
  

  return (
    <div className="AlphaPage">
      <div>
        <Context.Provider value={[context, setContext]}>
          {user.email !== "" ? (
            <Redirect to="MainPage/" />
           
          ) : (
            <LoginPage Login={Login} error={error} />
          )}
        </Context.Provider>
      </div>
    </div>
  );
}

export default AlphaPage;
