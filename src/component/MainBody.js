import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { rowData } from "../constant.js";
import { useCallback } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import {
  Button,
  Modal,
  Grid,
  Typography,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  TextField,
  Stack,
} from "@mui/material";

import Model from "./Model.js";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rowsData, setRowsData] = useState(rowData);
  const [colDef, setColDef] = useState([
    { field: "Name" },
    { field: "Dob" },
    { field: "Age" },
    { field: "std" },
    { field: "Address" },
    { field: "Gender" },
    { field: "Action", cellRenderer: SimpleComp },
  ]);

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(!IsModalOpen);
  };

  //   const handleCloseModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <>
      {/* <Button variant="contained" onClick={handleOpenModal} color="secondary">
        Add Student
      </Button> */}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          // onSubmit={formik.handleSubmit}
          style={{
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            paddingRight: "20px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            // bgcolor: "background.paper",
            backgroundColor: "white",
            border: "2px solid #000",
            boxShadow: 10,
            p: 4,
          }}
        >
          {/* Personal info */}
          <Typography variant="h4" align="center" mb={2} mt={4}>
            Student Details
          </Typography>
          <Stack container spacing={5} mb={5} ml={3}>
            <Stack spacing={6} item xs={12} sm={3}>
              <FormControl fullWidth>
                <TextField
                  id="firstName"
                  name="firstName"
                  // value={formik.values.firstName}
                  // onChange={formik.handleChange}
                  label="Student First Name"
                  required
                />
              </FormControl>
            </Stack>
            <Stack spacing={6} item xs={12} sm={3}>
              <FormControl
                fullWidth
                //   error={Boolean(
                //     formik.touched.registrationDate &&
                //       formik.errors.registrationDate
                //   )}
              >
                <TextField
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  id="registrationDate"
                  name="registrationDate"
                  value={"demo"}
                  // onChange={}
                  label="Date Of Registration"
                  placeholder="Date Of Registration"
                  required
                />
              </FormControl>
            </Stack>

            <Stack item xs={12} sm={3} spacing={3}>
              <FormControl fullWidth>
                <TextField
                  id="lastName"
                  name="Age"
                  // value={formik.values.lastName}
                  // onChange={formik.handleChange}
                  label="Age"
                  required={true}
                />
              </FormControl>
            </Stack>

            <Stack item xs={12} sm={3} spacing={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="gender">Gender</InputLabel>
                <Select
                  id="gender"
                  // name="gender"
                  // value={formik.values.gender}
                  // onChange={formik.handleChange}
                  label="Gender"
                >
                  <MenuItem value="m">Male</MenuItem>
                  <MenuItem value="f">Female</MenuItem>
                  <MenuItem value="o">Other</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack item xs={12} sm={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="caste">Std</InputLabel>
                <Select
                  id="caste"
                  name="std"
                  // value={formik.values.caste}
                  // onChange={formik.handleChange}
                  label="std"
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack item xs={12} sm={3}>
              <textarea />
            </Stack>
          </Stack>
        </form>
      </Modal>

      {/* {IsModalOpen && <Model />} */}
      {open || (
        <div className="ag-theme-alpine" style={{ height: 400, width: 1400 }}>
          <AgGridReact
            rowData={rowsData}
            columnDefs={colDef}
            onCellClicked={cellClickedListener}
          ></AgGridReact>
        </div>
      )}
    </>
  );
};

export default MainBody;
