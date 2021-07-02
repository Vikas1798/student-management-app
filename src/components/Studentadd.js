import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Studentadd = () => {
  let history = useHistory();
  const [students, setStudents] = useState({
    name: "",
    dateOfBirth: "",
    age: "",
    gender: "",
  });

  const { name, dateOfBirth, age, gender } = students;

  const onInputChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/students", students);
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <h1> Add student</h1>
            <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <lable>Name:</lable>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />

                <lable>Age</lable>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="enter your age"
                  name="age"
                  value={age}
                  onChange={(e) => onInputChange(e)}
                />
                <lable>DOB:</lable>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your date of birth"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => onInputChange(e)}
                />

                <lable>Gender</lable>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="select your gender Male,Female,others"
                  name="gender"
                  value={gender}
                  onChange={(e) => onInputChange(e)}
                />
                <br />
                <button className="btn btn-secondary"> Add New student</button>
              </div>
            </form>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Studentadd;
