import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../style/main.css";
function MovieCard({ movieList }) {
  return (
    <div className="row justify-content-start">
      {movieList.map((item, index) => {
        return (
          <div className="col-auto movieCard" key={index}>
            <Link to={`/${item._id}`}>
              <img className="image" src={item.movieImg}></img>
              <div className="overlay">
                <div className="text">
                  <h5>{item.movieTitle}</h5>
                  <p>{item.movieYear}</p>
                  <div>
                    {item.movieImdb > 1 && item.movieImdb <= 3 ? (
                      <div>
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star-half"></i>
                      </div>
                    ) : item.movieImdb > 3 && item.movieImdb <= 5 ? (
                      <div>
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fas fa-star-half"></i>
                      </div>
                    ) : item.movieImdb > 5 && item.movieImdb <= 7 ? (
                      <div>
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fas fa-star-half"></i>{" "}
                      </div>
                    ) : item.movieImdb > 7 && item.movieImdb <= 8 ? (
                      <div>
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                    ) : item.movieImdb > 8 && item.movieImdb <= 10 ? (
                      <div>
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

MovieCard.prototype = {
  movieList: PropTypes.array,
};
export default MovieCard;
