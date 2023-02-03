import styled from "@emotion/styled";
import { Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import React from "react";

// const HtmlButton = styled(({ className, ...props }) => (
//   <Button {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`&`]: {
//     backgroundColor: "#499557",
//     borderRadius: "20px",
//     marginBottom: "70px",
//     textTransform: "none",
//     fontSize: "17px",
//     padding: "6px 60px",
//     boxShadow: "none",
//     "&:hover": {
//       backgroundColor: "rgb(7, 177, 77, 0.42)",
//     },
//   },
// }));

const Subheader = () => {
  // const classes = useStyles();
  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
          margin: "30px 15px 15px",
          lineHeight: "41px",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        Save time and write with confidence
      </h1>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button
          // className={classes.button}
          variant="contained"
          style={{
            backgroundColor: "#499557",
            borderRadius: "20px",
            marginBottom: "70px",
            textTransform: "none",
            fontSize: "17px",
            padding: "6px 60px",
            boxShadow: "none",
          }}
        >
          Upgrade to QuillBot Premium
        </Button>
      </div>
    </div>
  );
};

export default Subheader;
