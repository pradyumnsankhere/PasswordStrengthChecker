import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@material-ui/core";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import React, { Component } from "react";

interface PwdandSecurtyState {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  uppercaseChecked: boolean;
  numberChecked: boolean;
  specialCharChecked: boolean;
  confirmPasswordError: boolean;
}
// interface PwdandSecurtyProps {}
class PwdandSecurty extends Component<PwdandSecurtyState> {
  constructor(props: PwdandSecurtyState) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      uppercaseChecked: false,
      numberChecked: false,
      specialCharChecked: false,
      confirmPasswordError: false,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { newPassword }: any = this.state;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      uppercaseChecked: /[A-Z]/.test(value),
      numberChecked: /\d/.test(value),
      specialCharChecked: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      confirmPasswordError: name === "confirmPassword" && newPassword !== value,
    }));
  };

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  render() {
    const {
      oldPassword,
      newPassword,
      confirmPassword,
      confirmPasswordError,
    }: any = this.state;

    const newPasswordStrength = {
      lengthValid: newPassword.length >= 12,
      uppercaseChecked: /[A-Z]/.test(newPassword),
      numberChecked: /\d/.test(newPassword),
      specialCharChecked: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    };
    return (
      <div style={styles.mainContainer as React.CSSProperties}>
        <Box style={styles.headingBox as React.CSSProperties}>
          <Typography style={styles.pwdandSecuHeading as React.CSSProperties}>
            Password & Security
          </Typography>
          <Button style={styles.btnSave as React.CSSProperties}>Save</Button>
        </Box>
        <Box>
          <Box style={{ maxWidth: "440px", marginTop: "20px" }}>
            <div>
              <Typography style={styles.pwdHeading as React.CSSProperties}>
                Enter Old Password
              </Typography>
              <TextField
                style={styles.pwdField as React.CSSProperties}
                type="password"
                variant="outlined"
                name="oldPassword"
                value={oldPassword}
                onChange={this.handleInputChange}
              />
            </div>

            <div style={styles.newPswdBox as React.CSSProperties}>
              <Typography style={styles.pwdHeading as React.CSSProperties}>
                Enter New Password
              </Typography>

              <TextField
                style={styles.pwdField as React.CSSProperties}
                type="password"
                variant="outlined"
                name="newPassword"
                value={newPassword}
                onChange={this.handleInputChange}
              />
              {newPassword.length > 0 && !newPasswordStrength.lengthValid ? (
                <p style={styles.pwdLenthError as React.CSSProperties}>
                  Passwords should be at least 12 characters long
                </p>
              ) : (
                " "
              )}
            </div>

            <div style={styles.newPswdBox as React.CSSProperties}>
              <Typography style={styles.pwdHeading as React.CSSProperties}>
                Confirm New Password
              </Typography>

              <TextField
                style={styles.pwdField as React.CSSProperties}
                type="password"
                variant="outlined"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleInputChange}
              />
                {confirmPasswordError && (
              <Typography     style={styles.pwdDoNotMatch as React.CSSProperties} >
                Passwords do not match.
              </Typography>
            )}
            </div>
           

            <div style={styles.newPswdBox as React.CSSProperties}> 
              <Typography style={styles.checkBoxHeading as React.CSSProperties}>
                <Checkbox
                  size="small"
                  style={styles.checkBox as React.CSSProperties}
                  checked={newPasswordStrength.uppercaseChecked}
                  color="default"
                  name="uppercaseChecked"
                  onChange={this.handleCheckboxChange}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
                Contain at least one uppercase letter
              </Typography>
              <Typography style={styles.checkBoxHeading as React.CSSProperties}>
                <Checkbox
                  size="small"
                  style={styles.checkBox as React.CSSProperties}
                  checked={newPasswordStrength.numberChecked}
                  color="default"
                  name="numberChecked"
                  onChange={this.handleCheckboxChange}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
                Contain at least one number
              </Typography>
              <Typography style={styles.checkBoxHeading as React.CSSProperties}>
                <Checkbox
                  size="small"
                  style={styles.checkBox as React.CSSProperties}
                  checked={newPasswordStrength.specialCharChecked}
                  color="default"
                  name="specialCharChecked"
                  onChange={this.handleCheckboxChange}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
                Contain at least one special character
              </Typography>
            </div>
          </Box>
        </Box>
      </div>
    );
  }
}

export default PwdandSecurty;

const styles = {
  mainContainer: {
    marginTop: "20px",
    padding: "20px",
  },
  headingBox: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
  },
  pwdandSecuHeading: {
    fontFamily: "Rubik",
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "43px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  btnSave: {
    width: "120px",
    height: "56px",
    background: "#2378D1",
    fontFamily: "Rubik",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "21px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "#FFFFFF",
    borderRadius: "10px",
  },
  pwdField: {
    borderRadius: "30px !important",
    width: "100%",
    border: "1px",
    borderColor: "#0A0A0A",
    color: "#0A0A0A",
    
    marginTop: "15px",
  },
  pwdHeading: {
    fontFamily: "Rubik",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "21px",
    letterspacing: "0px",
    textalign: "left",
  },
  checkBox: {
    color: "#2378D1",
    paddingLeft: "0px",
  },
  checkBoxHeading: {
    fontFamily: "DMSans",
    fontSize: "16px",
    lineHeight: "19px",
    letterspacing: "0px",
    textAlign: "left",
    color: "#0A0A0A",
  },
  strengthChecker: {
    marginTop: "8px",
    fontFamily: "DMSans",
    fontSize: "18px",
    lineHeight: "21px",
    letterspacing: "0px",
    textAlign: "left",
    fontWeight: "bold",
  },
  pwdLenthError: {
    color: "red",
  },
  newPswdBox:{
    marginTop:'25px',
  },
  pwdDoNotMatch:{
    color:'red',
    marginTop:'10px',
  }
};
