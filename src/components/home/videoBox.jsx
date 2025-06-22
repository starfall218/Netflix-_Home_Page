import './videobox.css'
function VideoBox(props){
  return <div className="cardbox">
    <img className="card-box" src={props.movieImage}/>
    <span className='movie-title'>{props.movieName}</span>
  </div>
};
export default VideoBox;