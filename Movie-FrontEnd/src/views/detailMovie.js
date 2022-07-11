import MovieCardDetail from "../components/MovieCardDetail";
import "../style/main.css";
import {
 
  useParams
} from "react-router-dom";

import axios from 'axios'
import { useEffect, useState } from "react";
function DetailMovie() {
  let  {id}  = useParams();
  const [detail , setMovie] = useState({})
  const dataOne  = async()=>{
    const response = await axios.get(`http://localhost:5000/api-data/all-movies/${id}`)
    setMovie(response.data)
  }
  
  useEffect(()=>{
      dataOne()
  },[])
  return (

    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mt-5">
            <MovieCardDetail detail={detail}></MovieCardDetail>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailMovie;
