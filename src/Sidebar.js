import React, { useEffect, useState } from "react";
import axios from "axios";
const Sidebar = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/student");
        setRecord(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li className="nav-item mb-2 mt-3">
          <a className="nav-link text-secondary" href="#">
            <h5>{record?.[0]?.name}</h5>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <a className="nav-link text-secondary" href="/">
            <i className="fas fa-user font-weight-bold"></i>
            <span className="ml-3">Overview</span>
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            className="nav-link text-secondary"
            href="#"
            data-toggle="collapse"
            data-target="#"
          >
            <i className="far fa-file-word font-weight-bold"></i>
            <span className="ml-3">Reports</span>
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-secondary" href="./barchart">
            <i className="far fa-chart-bar font-weight-bold"></i>
            <span className="ml-3">Analytics</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
