import React, { Component } from "react";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login__container">
      <div>
        <div className="circle-small"></div>
        <form action="action" className="login__form">
          <div className=" container--title">
            <h2>LOG IN</h2>
          </div>
          <div className="  container__input container__input--first">
            {/* <label className="login__form__label" htmlFor="fname">
            First Name
          </label> */}
            <input
              className="login__form__input"
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
            />
          </div>
          <div className=" container__input container__input--last">
            {/* <label className="login__form__label" htmlFor="lname">
            Last Name
          </label> */}
            <input
              className="login__form__input"
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            />
          </div>
          <button className="login-btn">LOG IN</button>
        </form>
        <div className="circle-big"></div>
      </div>
    </div>
  );
};

export default LoginPage;

// <form action="/action_page.php">
//         <label for="fname">First name:</label><br>
//         <input type="text" id="fname" name="fname" value="John"><br>
//         <label for="lname">Last name:</label><br>
//         <input type="text" id="lname" name="lname" value="Doe"><br><br>
//         <input type="submit" value="Submit">
// </form>
