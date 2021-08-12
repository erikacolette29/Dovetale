const axios = require("axios");
const API_KEY = process.env.REACT_APP_TRENDING_KEY


export default function Trending() {
   return axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=qBbeXw2m2s7TCRFWNBQ1PPRTEBXQ6e22&limit=30`)
   .catch((err) => console.log(err));
}
