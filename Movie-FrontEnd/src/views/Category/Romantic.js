import MovieCard from "../../components/MovieCard";


import axios from 'axios'
import { useEffect, useState } from "react";

function Romantic() {
  const [movieList , setMovie] = useState([])
  const dataOne  = async()=>{
      const response = await axios.get("http://localhost:5000/api-data/romantizm-movie")
      setMovie(response.data)
      console.log(response.data);
  }
  
  useEffect(()=>{
      dataOne()
  },[])
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <h3 className="text-center text-white text-uppercase mt-5">
              aşk Filmleri
            </h3>
            <hr className="text-white"></hr>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 mt-5">
            <MovieCard movieList={movieList}></MovieCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Romantic;
