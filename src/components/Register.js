import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const name = useRef();
  const userName = useRef();
  const pass = useRef();
  const age = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(userName.current.value);
    console.log(age.current.value);
    axios
      .post("http://localhost:8787/user/add", {
        name: name.current.value,
        userName: userName.current.value,
        password: pass.current.value,
        age: age.current.value,
      })
      .then((response) => {
        console.log(response.data);
        handleEmail();
        alert("Successfully added");
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmail = () => {
    axios
      .post("http://localhost:8787/email/sendMail", {
        to: userName.current.value,
        subject: "Registration Successful!!",
        text: "Testing email service",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <br />
        <h1>Register User</h1>
        <br />
        <div className="row mb-4">
          <div className="col-xl-4 border">
            <form className="mt-2 mb-2">
              <div class="mb-3">
                <label class="form-label">Enter Name</label>
                <input type="text" class="form-control" ref={name} />
              </div>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" ref={userName} />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" ref={pass} />
              </div>
              <div class="mb-3">
                <label class="form-label">Age</label>
                <input type="text" class="form-control" ref={age} />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
