import React from "react";
import "./login.css";

function Sign() {
  return (
    <div>
      <form action="/login" method="post" className="position_701">
        <p className="p_1">Sign in</p>
        <input type="text" placeholder="userid" className="text_1" />
        <input type="password" placeholder="password" className="text_2" />
        <input type="submit" className="submit" value="Sign In" />
      </form>

      <form action="/sign" method="post" className="position_702">
        <p className="p_1">Sign up</p>
        <input type="text" placeholder="userid" className="text_1" />
        <input type="password" placeholder="password" className="text_2" />
        <input type="submit" className="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Sign;
