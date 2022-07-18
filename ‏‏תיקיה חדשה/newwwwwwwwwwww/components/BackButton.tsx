import { IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  const navigate = useNavigate();
  const Back = () => {
    navigate("/");
  };
  return (
    <>
      <IconButton
        onClick={() => {
          Back();
        }}
        sx={{ right: 360, bottom: 60 }}
        aria-label="delete"
        size="large"
      >
        <ArrowBackIcon sx={{ fontSize: 100 }} />
      </IconButton>
    </>
  );
}

export default BackButton;