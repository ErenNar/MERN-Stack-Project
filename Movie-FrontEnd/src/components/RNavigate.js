import { Link } from "react-router-dom";
import "../style/nav.css";
import Logo from "../images/logo.png";
function RHeader() {
  return (
    <nav className="navigasyon">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <Link to="/">
              <img
                src={Logo}
                alt="resim yüklenmedi"
                width="120"
                height="60"
              ></img>
            </Link>
          </div>

          <div className="col-8"></div>
          <div className="col-auto">
            <Link className="a1" to="/most-viewed">
              En Çok İzlenilenler
            </Link>
          </div>

          <div className="col-auto">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <div
              className="offcanvas offcanvas-end bg-secondary"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header ">
                <button
                  type="button"
                  className="btn-close text-reset bg-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="dropdown-item">
                  <Link className="a2" to="/action-movies">
                    Aksiyon Filmleri
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link className="a2" to="/advanture-movies">
                    Macera Filmleri
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link className="a2" to="/comedy-movies">
                    Komedi Filmleri
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link className="a2" to="/dram-movies">
                    Dram Filmleri
                  </Link>
                </div>

                <div className="dropdown-item">
                  <Link className="a2" to="/historial-movies">
                    Tarih Filmleri
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link className="a2" to="/scinece-fiction-movies">
                    Bilim Kurgu Filmleri
                  </Link>
                </div>
                <div className="dropdown-item">
                  <Link className="a2" to="/romantic-movies">
                    Aşk Filmleri
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default RHeader;
