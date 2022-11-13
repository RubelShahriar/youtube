import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "10px", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background:
            category.name === selectedCategory ? "#606060" : "rgba(0,0,0,0.05)",
          color: "black",
          height: "28px",
          padding: "16px 7px",
          borderRadius: "6px",
          fontWeight: "400",
        }}
        key={category.name}
      >
        <span
          style={{
            color:
              category.name === selectedCategory ? "white" : "rgba(0,0,0,0.5)",
            marginRight: "6px",
            marginLeft: "0",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "black",
            opacity: category.name === selectedCategory ? "1" : "0.8",
            marginRight: "0px",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
