import React, { useState } from 'react';
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import formImg from "../../images/20944201.jpg";
import googleImg from "../../images/google.png"
import githubImg from "../../images/gihub.png"
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';


const Login = () => {
    const {error, signInWithGoogle, signInWithGitHub, signInWithEmailPassword } =
      useFirebase();
    
    const [email,setEmail] = useState("");
    const [password,sePassword] = useState("")

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      sePassword(e.target.value);
    };
    const handleLogin= (e) =>{
        e.preventDefault();
        signInWithEmailPassword(email,password);
        console.log(email,password);
    }
    return (
      <div className="container">
        <div className=" p-4">
          <div className="row myCard">
            <div className="col-md-6">
              <h2 className="my-3 text-secondary">Please Login </h2>
              <div className="myLeftCtn">
                <Form onSubmit={handleLogin}>
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
                    Log In
                  </Button>
                </Form>
                <div>
                  <Button
                    onClick={signInWithGoogle}
                    variant="outline-primary"
                    className="my-2 google-icon"
                  >
                    <img className="btn-img" src={googleImg} alt="" /> Sign In
                    With Google
                  </Button>
                  <Button
                    onClick={signInWithGitHub}
                    variant="outline-primary"
                    className="my-2 mx-2 github-icon"
                  >
                    <img className="btn-img" src={githubImg} alt="" /> Sign In
                    With GitHub
                  </Button>
                </div>
                <Link to="/regester">
                  <p>New Here? Create an account</p>
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

export default Login;