import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromApi } from '../../utils/fetchFromApi';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from '..';

const VideoDetail = () => {
  const {id} = useParams();

  const [videoDetail,setvideoDetail] = useState(null);
   const [reletedVideos, setReletedVideos] = useState([]);
console.log(videoDetail)
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>setvideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setReletedVideos(data.items))
  },[id])

  if(!videoDetail?.snippet) return 'Loading...'

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column', md:'row'}}>
      <Box flex={1}>
          <Box sx={{width:'100', position:'sticky', top:'86px'}}>
            <ReactPlayer   playing={true}  className="react-player" controls  url={`https://www.youtube.com/watch?v=${id}`}/>
            <Typography color='#fff' variant='h5' fontWeight="bold" p={2} >
              {title}
            </Typography>
            <Stack  direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
            <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
      </Box>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={reletedVideos} direction="column" />
        </Box>
    
      </Stack>
      
    </Box>
  )
}

export default VideoDetail