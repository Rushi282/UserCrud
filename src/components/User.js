import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8787/user/getUsers")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (e) => {
    // console.log("hiiiiiiii " + e);
    axios
      .delete(`http://localhost:8787/user/delete/${e}`)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setDataToStorage = (id, name, userName, age) => {
    console.log(id, name, userName, age);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("userName", userName);
    localStorage.setItem("age", age);
  };

  return (
    <>
      <div className="container">
        <br />
        <h1>Users</h1>
        <br />
        <Link to="/register">
          <button className="btn btn-success">Register</button>
        </Link>
        <br />
        <br />
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr>
                  <th>{user.id}</th>
                  <th>{user.name}</th>
                  <th>{user.userName}</th>
                  <th>{user.age}</th>
                  <th>
                    <Link to="/update">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setDataToStorage(
                            user.id,
                            user.name,
                            user.userName,
                            user.age
                          );
                        }}
                      >
                        Update
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (
                          window.confirm("Are you sure to delete this user?")
                        ) {
                          handleDelete(user.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
      </div>
    </>
  );
}
