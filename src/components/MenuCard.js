import { blue } from "@mui/material/colors";
import React from "react";

function MenuCard({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h6 style={{ marginTop: "0px" }}>{content}</h6>
      <p>
        <i style={{ color: 'blue' }}>${price}</i>
      </p>
    </div>
  );
}

export default MenuCard;
