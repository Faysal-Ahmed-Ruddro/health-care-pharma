import React, { useState } from "react";
import "./Regester.css";
import { Form, Button } from "react-bootstrap";
import formImg from "../../images/4957136.jpg";
import googleImg from "../../images/google.png";
import githubImg from "../../images/gihub.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Regester = () => {
  const {error, createUserWithEmailPassWord,signInWithGitHub,signInWithGoogle } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailPassWord(email, password);
    console.log(email, password);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container">
      <div className=" p-4">
        <div className="row myCard">
          <div className="col-md-6">
            <h2 className="my-4 text-secondary">
              Register / Create an account
            </h2>
            <div className="myLeftCtn">
              <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address: </Form.Label>
                  <Form.Control
                    onBlur={handleEmailChange}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password: </Form.Label>
                  <Form.Control
                    onBlur={handlePasswordChange}
                    type="password"
                    placeholder="Password"
                  />
                  <p>{error?.message}</p>
                </Form.Group>
                <Button className="myBtn" type="submit">
                  Register
                </Button>
              </Form>
              <div>
                <Button onClick={signInWithGoogle}  variant="outline-primary" className="my-2 google-icon">
                  <img className="btn-img" src={googleImg} alt="" /> Sign In With Google
                </Button>
                <Button 
                  onClick={signInWithGitHub} variant="outline-primary"
                  className="my-2 mx-2 github-icon"
                >
                  <img className="btn-img" src={githubImg} alt="" /> Sign In With GitHub
                </Button>
              </div>
              <Link to="/login">
                <p>Already Have an account?</p>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="myRightCtn">
              <img className="formImg" src={formImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
