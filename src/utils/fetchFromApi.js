import axios from "axios";

const PathUrl = "https://youtube-v31.p.rapidapi.com"

const options = {
  url: PathUrl,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromApi = async (url)=>{
  const {data} = await axios.get(`${PathUrl}/${url}`,options)

  return data;
}