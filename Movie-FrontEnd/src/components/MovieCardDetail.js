import PropTypes from "prop-types";
function MovieCardDetail({ detail }) {
  return (
    <div className="row justify-content-start align-items-start">
      <div className="col-auto">
        <img width="500" height="600" src={detail.movieImg}></img>
      </div>
      <div className="col-6">
        <div className="overflow-auto text-white subjectMovie" height="100">
          {detail.movieSubject}
        </div>
        <table className="table table-borderless   text-white ">
          <tbody>
            <tr>
              <th width="200">Film İsmi</th>
              <td> {detail.movieTitle} </td>
            </tr>

            <tr>
              <th width="200">Yönetmen</th>
              <td> {detail.movieDirector} </td>
            </tr>
            <tr>
              <th width="200">Oyuncular</th>
              <td> {detail.movieActress} </td>
            </tr>
            <tr>
              <th width="200">Yapım</th>
              <td>{detail.movieYear}</td>
            </tr>
            <tr>
              <th width="200">Kategori</th>
              <td>{detail.movieCategory}</td>
            </tr>
            <tr>
              <th width="200">Süre</th>
              <td>{detail.movieTimer}</td>
            </tr>
            <tr>
              <th width="200">IMDB</th>
              <td>{detail.movieImdb}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-8 mt-5">
        <video
          className="bg-secondary"
          height="510"
          width="905"
          src={detail.movieVideo}
          controls
          poster={detail.movieImg}
        ></video>
      </div>
    </div>
  );
}
MovieCardDetail.prototype = {
  detail: PropTypes.object,
};
export default MovieCardDetail;
