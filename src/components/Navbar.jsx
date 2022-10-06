import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <div style={{ display: "flex" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={"/logo.svg"} alt="logo" height={45} />
      </Link>
      <p style={{ color: "white", float: "left" }}> WeTube</p>
    </div>

    <SearchBar />
  </Stack>
);

export default Navbar;
