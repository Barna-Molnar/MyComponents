import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div>
      <form action="action" className="login">
        <h2>LOG IN</h2>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" placeholder="Barnabas" />
        </div>
        <div>
          <label htmlFor="lname">Larst Name</label>
          <input type="text" id="lname" name="lname" placeholder="Molnar" />
        </div>
        <input type="submit" value="Submit"></input>
      </form>
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
