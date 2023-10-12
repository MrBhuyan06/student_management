import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  TextField,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import React from "react";

const Model = () => {
  return (
    <>
      <form
        // onSubmit={formik.handleSubmit}
        style={{
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
          paddingRight: "20px",
        }}
      >
        {/* Personal info */}
        <Typography variant="h4" align="center" mb={2} mt={4}>
          Student Details
        </Typography>
        <Grid container spacing={2} mb={5}>
          <Grid item xs={12} sm={3}>
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
              {/* {formik.touched.registrationDate &&
                formik.errors.registrationDate && (
                  <FormHelperText error>
                    {formik.errors.registrationDate}
                  </FormHelperText>
                )} */}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              //   error={Boolean(
              //     formik.touched.firstName && formik.errors.firstName
              //   )}
            >
              <TextField
                id="firstName"
                name="firstName"
                // value={formik.values.firstName}
                // onChange={formik.handleChange}
                label="Student First Name"
                required
              />
              {/* {formik.touched.firstName && formik.errors.firstName && (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              //   error={Boolean(
              //     formik.touched.firstName && formik.errors.firstName
              //   )}
            >
              <TextField
                id="lastName"
                name="lastName"
                // value={formik.values.lastName}
                // onChange={formik.handleChange}
                label="Student Last Name"
                required={true}
              />
              {/* {formik.touched.firstName && formik.errors.firstName && (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              //   error={Boolean(formik.touched.email && formik.errors.email)}
            >
              <TextField
                id="email"
                name="email"
                type="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                label="Communication Email"
                required
              />
              {/* {formik.touched.email && formik.errors.email && (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              //   error={Boolean(formik.touched.gender && formik.errors.gender)}
              required
            >
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
              {/* {formik.touched.gender && formik.errors.gender && (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              error={Boolean()
              // formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
            >
              <TextField
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                id="dateOfBirth"
                name="dateOfBirth"
                // value={formik.values.dateOfBirth}
                // onChange={formik.handleChange}
                className="date-input"
                placeholder="Date Of Birth"
                label="Date Of Birth"
              />
              {/* {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                <FormHelperText error>
                  {formik.errors.dateOfBirth}
                </FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              error={Boolean()
              // formik.touched.aadharNumber && formik.errors.aadharNumber
              }
            >
              <TextField
                id="aadharNumber"
                name="aadharNumber"
                // value={formik.values.aadharNumber}
                // onChange={formik.handleChange}
                label="Aadhar Number"
                type="number"
              />

              {/* {formik.touched.aadharNumber && formik.errors.aadharNumber && (
                <FormHelperText error>
                  {formik.errors.aadharNumber}
                </FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              error={Boolean()
              // formik.touched.bloodGroup && formik.errors.bloodGroup
              }
            >
              <InputLabel htmlFor="bloodGroup">Blood Group</InputLabel>
              <Select
                id="bloodGroup"
                name="bloodGroup"
                // value={formik.values.bloodGroup}
                // onChange={formik.handleChange}
                label="Blood Group"
              >
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
              </Select>
              {/* {formik.touched.bloodGroup && formik.errors.bloodGroup && (
                <FormHelperText error>
                  {formik.errors.bloodGroup}
                </FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              error={Boolean()
              // formik.touched.relligion && formik.errors.relligion
              }
            >
              <InputLabel htmlFor="relligion">Relligion</InputLabel>
              <Select
                id="relligion"
                name="relligion"
                // value={formik.values.relligion}
                // onChange={formik.handleChange}
                label="Religion"
              >
                <MenuItem value="Hindu">Hindu</MenuItem>
                <MenuItem value="Muslim">Muslim</MenuItem>
                <MenuItem value="Sikh">Sikh</MenuItem>
                <MenuItem value="Jain">Jain</MenuItem>
                <MenuItem value="Buddhist">Buddhist</MenuItem>
                <MenuItem value="Christian">Christian</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {/* {formik.touched.religion && formik.errors.religion && (
                <FormHelperText error>{formik.errors.religion}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              //   error={Boolean(formik.touched.caste && formik.errors.caste)}
            >
              <InputLabel htmlFor="caste">Caste</InputLabel>
              <Select
                id="caste"
                name="caste"
                // value={formik.values.caste}
                // onChange={formik.handleChange}
                label="Caste"
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="OBC">OBC</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="ST">ST</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {/* {formik.touched.caste && formik.errors.caste && (
                <FormHelperText error>{formik.errors.caste}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl
              fullWidth
              //   error={Boolean(formik.touched.subCaste && formik.errors.subCaste)}
            >
              <TextField
                id="subCaste"
                name="subCaste"
                // value={formik.values.subCaste}
                // onChange={formik.handleChange}
                label="Sub Caste"
              />
              {/* {formik.touched.subCaste && formik.errors.subCaste && (
                <FormHelperText error>{formik.errors.subCaste}</FormHelperText>
              )} */}
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Model;
