import axios from "axios";



export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    
    headers:{
        Authorization:'Bearer 3_xoMoFiNVLeyOyuOSoCFQZJlltTxhFNOisomARp2V1z7274aC98ul84SK5A-b8VuOn3aaKKG_RrexhArK8HWbeo_VNTvfGpI8OeGHPjXi4xdQI70twr9KoimGuzYXYx'
    }

});