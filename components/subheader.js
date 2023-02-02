import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#499557",
    padding:'6px 40px',
    "&:hover": {
      backgroundColor: "#308140",
    },
  },
});

const Subheader = () => {
  const classes = useStyles();
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
          className={classes.button}
          variant="contained"
          style={{
            backgroundColor: "#499557",
            borderRadius: "20px",
            marginBottom: "70px",
            textTransform: "none",
            fontSize: "17px",
            padding: "6px, 16px",
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
