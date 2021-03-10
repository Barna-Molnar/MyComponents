import React from "react";
import "./NewTabs.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewTabs = () => {
  return (
    <div>
      <div>
        <h2>Tabs</h2>
      </div>
      <div className="tabs-container">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Lend">
            <Card>
              <Card.Body>
                <div className="op op--lend">
                  <h2>Lend money</h2>
                  <form action="#" className="form form--lend">
                    <div className="input-flex">
                      <input
                        // value={this.state.recepient}
                        // onChange={(e) => {
                        //   this.setState({ recepient: e.target.value });
                        // }}
                        type="text"
                        className="form__input form__input--forWho"
                      />

                      <input
                        // value={this.state.lendAmount}
                        // onChange={(e) => {
                        //   this.setState({ lendAmount: Number(e.target.value) });
                        // }}
                        type="number"
                        className="form__input form__input--amount"
                      />
                      <button
                        className="form__btn form__btn--lend"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   if (this.state.message === "") {
                        //     this.props.lend(
                        //       this.props.currentAcc.username,
                        //       this.state.recepient,
                        //       this.state.lendAmount
                        //     );
                        //   } else {
                        //     this.props.lend(
                        //       this.props.currentAcc.username,
                        //       this.state.recepient,
                        //       this.state.lendAmount,
                        //       this.state.message
                        //     );
                        //   }
                        //   this.setState({
                        //     recepient: "",
                        //     lendAmount: "",
                        //     message: "",
                        //   });
                        // }}
                      >
                        &rarr;
                      </button>
                    </div>
                    <div className="label-flex">
                      <div>
                        <label htmlFor="#" className="form__label">
                          For Who
                        </label>
                      </div>
                      <div>
                        <label htmlFor="#" className="form__label">
                          Amount
                        </label>
                      </div>
                    </div>
                    <input
                      className="form__input form__input--message"
                      maxLength="50"
                      // value={this.state.message}
                      // onChange={(e) => {
                      //   this.setState({ message: e.target.value });
                      // }}
                      type="text"
                    />
                    <div>
                      <div className="label-flex">
                        <label htmlFor="#" className="form__label explanation">
                          Explanation
                        </label>
                      </div>
                    </div>
                  </form>
                </div>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="profile" title="Upload">
            <Card>
              <Card.Body>
                <Card.Title>Upload</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="contact" title="Repayment">
            <Card>
              <Card.Body>
                <Card.Title>Repayment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default NewTabs;
