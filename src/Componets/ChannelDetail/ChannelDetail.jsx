import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {Videos, ChannelCard} from '../index'
import { fetchFromApi } from '../../utils/fetchFromApi'

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then(data=>setChannelDetails(data?.items?.[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(data=> setVideos(data?.items))
    
  },[id])
console.log(videos)
  return ( 
    <Box minHeight="95vh">
      <Box>
        <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,17,39,1) 26%, rgba(20,53,69,1) 37%, rgba(6,11,37,1) 48%, rgba(7,23,29,1) 64%, rgba(5,40,47,1) 87%, rgba(0,212,255,1) 100%)",zIndex:10,
          height:'300px'
        }}/>
        <ChannelCard marginTop='-120px' channelDetail={channelDetails}/>
      </Box>
      <Box display='flex' p="2">
          <Box sx={{mr:{sm:"100px"}}} />
              <Videos videos={videos} />
          </Box>
     
    </Box>
  )
}

export default ChannelDetail