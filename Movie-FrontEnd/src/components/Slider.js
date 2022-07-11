import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
function Slider({ slideList }) {
  return (
    <div className="col-12 my-5">
      <OwlCarousel
        autoplay
        autoplayTimeout={1000}
        className="owl-theme"
        loop
        nav
        dots
      
      >
        {slideList.map((item, index2) => {
          return (
            <div className="item" key={index2}>
              <Link to={`/${item._id}`}>
                <img
                  height="350"
                  className="sliderImg"
                  src={item.movieImg}
                ></img>
              </Link>
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
