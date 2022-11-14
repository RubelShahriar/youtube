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
      pl: { xs: 0, sm: 0, md: 2, xl: 2 },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#e5e5e5",
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
              category.name === selectedCategory ? "black" : "rgba(0,0,0,0.5)",
            marginRight: "40px",
            marginLeft: "0",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory && "black",
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
