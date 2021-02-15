import React, { Component } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <form className="">
        <div className="login-page__form__input-group">
          <input
            onChange={(e) => {}}
            value={5}
            type="text"
            placeholder="username"
            required
          />
          <label htmlFor="name" className="login-page__form__label">
            username
          </label>
        </div>

        <input
          onChange={(e) => {}}
          value={5}
          maxLength="4"
          type="password"
          placeholder="password"
        />
        <button
          className={"loginButton"}
          onClick={(e) => {
            e.preventDefault();
            console.log();
            this.props.login(this.state.username, this.state.pin);
            this.setState({
              username: "",
              pin: "",
            });
          }}
        >
          login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
