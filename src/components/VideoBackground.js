import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((Store) => Store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" +
    trailerVideo?.key +
    "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
