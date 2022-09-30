import axios from "axios";
const baseURL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  // APi fetching and exporting it

  export const FetchApi=async(url)=>{
    const{data}=await axios.get(`${baseURL}/${url}`,options);
    return data;
  }