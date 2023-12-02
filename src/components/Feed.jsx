import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
 const [videos, setvideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideos(data.items))
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ margin: "1.5 0 0 0 ", color: "#fff" }}
        >
          Copyright 2023 Shady Waheed
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
          <Videos videos={videos} />
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
