import { pricingPlans } from "@/utils/utils";
import { Button, useMediaQuery } from "@mui/material";
import React from "react";

const Plans = () => {
  const matches = useMediaQuery("@media (max-width:700px)");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "46px 0px",
        }}
      >
        <span
          style={{
            fontWeight: "normal",
            fontSize: "30px",
            letterSpacing: "-0.03em",
            textAlign:'center'  
          }}
        >
          Experience the full power of QuillBot
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        {pricingPlans.map((item, index) => (
          <>
            <div
              style={{
                border: "1px solid #DEE1E3",
                marginRight: matches ? '0px' : "40px",
                width: "25rem",
                boxShadow: "0px 4px 22px 0px #00000033",
                borderRadius: "10px",
                marginBottom: matches && pricingPlans.length != index + 1 ? '40px' : "5px",
              }}
            >
              <div
                style={{
                  backgroundColor: item.background,
                  //   padding: "10px",
                  borderRadius: "10px 10px 0px 0px",
                  display: "flex",
                  alignItems: "center",
                  padding: "13px 14px",
                }}
              >
                {item.icon}
                <span
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    lineHeight: "25px",
                    letterSpacing: "1.5px",
                  }}
                >
                  {item.name}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: item.background,
                    borderRadius: "20px",
                    marginBottom: "20px",
                    textTransform: "none",
                    fontSize: "17px",
                    padding: "10px, 16px",
                    boxShadow: "none",
                    width: "90%",
                  }}
                >
                  {item.btnText}
                </Button>
              </div>

              {item.desc.map((desc, index) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderTop: "1px solid #DEE1E3",
                        padding: "10px 25px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {desc.icon}
                      <span style={{ marginLeft: "10px" }}>{desc.title}</span>
                    </div>
                    <div></div>
                  </div>
                </>
              ))}

              <div
                style={{
                  backgroundColor: "#EEEEEE",
                  //   padding: "10px",
                  borderRadius: "0px 0px 10px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 14px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    lineHeight: "25px",
                    letterSpacing: "1.5px",
                  }}
                >
                  {item.details}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div style={{display:'flex', justifyContent:'center', marginBottom:'40px'}}>
        <span>*Scan up to 20 pages a month</span>
      </div>
    </>
  );
};

export default Plans;
