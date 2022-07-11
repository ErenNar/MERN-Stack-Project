import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Slider from "../components/Slider";
import "../style/main.css";

/*const movieList = [
  {
    id: 1,
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 9,
  },
  {
    id: 2,
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 8,
  },
  {
    id: 3,
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 7,
  },
  {
    id: 4,
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 6,
  },
  {
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 5,
  },
  {
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 4,
  },
  {
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 3,
  },
  {
    movieImg:
      "https://media.cinemaximum.com.tr/255//Files/POSTER/DR-STRANGE.jpg",
    movieTitle: "lorem ipsum dolor sit amet",
    movieYear: 2020,
    movieImdb: 2,
  },
];*/

function AllMovie() {
  const [movieList , setMovie] = useState([])
  
  const dataOne  = async()=>{
      const response = await axios.get("http://localhost:5000/api-data/all-movies")
      const result = setMovie(response.data)
      console.log(response.data);
  }


  const [slideList , setSlide] = useState([])

  const dataSlide  = async()=>{
    const response = await axios.get("http://localhost:5000/api-data/slider-movie")
    setSlide(response.data)
    console.log(response.data);
}
  useEffect(()=>{
      dataOne()
      dataSlide()
  },[])




  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <Slider slideList={slideList}></Slider>
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

export default AllMovie;
