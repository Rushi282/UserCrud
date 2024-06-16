import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Update() {
  const [id, setId] = useState(" ");
  const [name, setName] = useState(" ");
  const [userName, setUserName] = useState(" ");
  const [age, setAge] = useState(" ");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setUserName(localStorage.getItem("userName"));
    setAge(localStorage.getItem("age"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("hiiiiii");
    axios
      .put("http://localhost:8787/user/update" + id, {
        userName: userName,
        age: age,
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
        <h1>Update User</h1>
        <br />
        <div className="row mb-4">
          <div className="col-xl-4 border">
            <form className="mt-2 mb-2">
              <div class="mb-3">
                <label class="form-label">Id</label>
                <input type="text" class="form-control" value={id} />
              </div>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value={name} />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Email address</label>
                <input
                  type="email"
                  class="form-control"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Age</label>
                <input
                  type="text"
                  class="form-control"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleUpdate}
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
