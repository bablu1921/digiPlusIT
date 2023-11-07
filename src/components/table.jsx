// import React from "react";
import "./table.css";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useState } from "react";
const Table = ({ data }) => {
  const [tdata, setTData] = useState(data);
  function handleDelete(id) {
    // e.preventDefault();
    tdata.filter;
  }

  function handleEdit(e) {
    e.preventDefault();
  }
  return (
    <>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Row Num</th>
          <th>Name</th>
          <th>Location</th>
          <th>CGPA</th>
          <th>Action</th>
        </tr>

        {tdata.map((d) => {
          return (
            <tr>
              <th>{d.rowNum}</th>
              <th>{d.Name}</th>
              <th>{d.Location}</th>
              <th>{d.CGPA}</th>
              <th>
                <button onClick={handleEdit}>
                  {" "}
                  <MdOutlineModeEditOutline />{" "}
                </button>
                <button onClick={handleDelete(d.id)}>
                  {" "}
                  <RxCross2 />{" "}
                </button>
              </th>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Table;
