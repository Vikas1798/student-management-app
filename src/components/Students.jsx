import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Students = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  const [filterstudent, setFilterStudent] = useState([]);

  const loadData = async () => {
    let result = await axios.get("http://localhost:8000/students");
    setDatas(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  //selected student details deletion

  const deletedata = async (id) => {
    if (window.confirm("Are you sure..! you want to delete student delete")) {
      await axios.delete(`http://localhost:8000/students/${id}`);
      loadData();
    }
  };
  // student searching
  useEffect(() => {
    setFilterStudent(
      datas.filter((data) => {
        data.name.toLowerCase().includes(search.toLocaleLowerCase());
      })
    );
  }, [datas, search]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <br /> <br /> <br />
          {/* searching */}
          <h3 style={{ color: "blue" }}> search for the Student details </h3>
          <input
            className="form-control"
            type="text"
            placeholder="Search student"
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <br />
          {/* students data */}
          <div className="col-sm-10">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((data) => (
                  <tr>
                    <th>{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.dateOfBirth}</td>
                    {/* checking age of student is less than 10 or not */}
                    {data.age <= 10 ? (
                      <td style={{ color: "red" }}>{data.age}</td>
                    ) : (
                      <td>{data.age}</td>
                    )}
                    <td>{data.gender}</td>
                    <td>
                      <Link to={`/students/edit/${data.id}`}>
                        <button className="btn btn-primary mr-2"> Edit </button>
                      </Link>
                      <Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deletedata(data.id)}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Students;
