import React from 'react'

import { demoProfilePicture } from '../../utils/constants'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({channelDetail, marginTop}) => {
    console.log(channelDetail)
  return (
    <Box sx={{
      
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%',sm:'358px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop
      }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}  alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}/>
        <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount&&(
            <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subcribers
            </Typography>
        )}
        </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard