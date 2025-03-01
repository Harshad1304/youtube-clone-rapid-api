import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import {SideBar,Videos} from '../../Componets'
import { fetchFromApi } from '../../utils/fetchFromApi';


const Feed = () => {

  const[selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])
  
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])
  
  return (
    <Stack sx={{ flex:10 ,flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 },flex:1,}}>
          
          <SideBar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography  className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
            Copyright 2024 Harshad Bhoir
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 10}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
            {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
          </Typography>

          <Videos videos = {videos} />
        </Box>
    </Stack>
  )
}

export default Feed;