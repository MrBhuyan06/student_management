import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { rowData } from "../constant.js";
import { useCallback } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

const SimpleComp = (p) => {
  const onEdit = useCallback(() => window.alert("edit", p.value));
  const onDelete = useCallback(() => window.alert("delete", p.value));
  return (
    <>
      <button className="" onClick={onEdit}>
        Edit
      </button>
      <button className="" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

const MainBody = () => {
  //define the col
  const [rowsData, setRowsData] = useState(rowData);
  const [colDef, setColDef] = useState([
    { field: "Name" },
    { field: "Dob" },
    { field: "Age" },
    { field: "std" },
    { field: "Address" },
    { field: "Gender" },
    { field: "Action", CellRenderer: SimpleComp },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1400 }}>
      <AgGridReact rowData={rowsData} columnDefs={colDef}></AgGridReact>
    </div>
  );
};

export default MainBody;
