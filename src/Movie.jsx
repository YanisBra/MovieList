import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const Movie = ({
  id,
  title,
  date,
  category,
  resume,
  nbLike,
  comment,
  bookmark,
  trailer,
  image,
  dispatch,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(bookmark);
  const [likesCount, setLikesCount] = useState(nbLike);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <CardDiv image={image}>
      <div className="orga">
        <div
          className="wrapper"
          // style={{
          //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
          // }}
        >
          <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="posters" />

          <div className="header">
            <div className="date">
              <span>{date}</span>
              {/* <span className="day">{day}</span>
            <span className="month">{month}</span>
            <span className="year">{year}</span> */}
            </div>
            <ul className="menu-content">
              <li>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={[
                    "fa",
                    isBookmarked ? "fa-bookmark" : "fa-bookmark-o",
                  ].join(" ")}
                  style={{ color: isBookmarked ? "#FFBF4D" : "" }}
                />
              </li>
              <li>
                <button
                  onClick={handleLike}
                  className={["fa", isLiked ? "fa-heart" : "fa-heart-o"].join(
                    " "
                  )}
                  style={{ color: isLiked ? "#F91980" : "" }}
                ></button>

                <span>{likesCount}</span>
              </li>
              <li>
                <button className="fa fa-comment-o">
                  <span>{comment}</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">{category}</span>
              <h1 className="title">{title}</h1>
              <p className="text">{resume}</p>
              {/* <a
              href={trailer}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Trailer
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </CardDiv>
  );
};

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  resume: PropTypes.string,
  like: PropTypes.bool,
  nbLike: PropTypes.number,
  comment: PropTypes.number,
  bookmark: PropTypes.bool,
  trailer: PropTypes.string,
  image: PropTypes.string,
};

const CardDiv = styled.div`
  float: left;
  padding: 1.7rem;
  margin: auto;

  & a {
    text-decoration: none;
  }

  & h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }

  & .menu-content {
    margin: 0;
    padding: 0;
    list-style-type: none;
    float: right;
  }

  & .menu-content::before,
  & .menu-content::after {
    content: "";
    display: table;
  }
  & .menu-content::after {
    clear: both;
  }
  & .menu-content li {
    display: inline-block;
    margin: 0 5px;
    position: relative;
  }
  & .menu-content button {
    color: #fff;
    background: none !important;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  & .menu-content span {
    position: absolute;
    left: 50%;
    top: 0;
    font-size: 10px;
    font-weight: 700;
    font-family: "Open Sans";
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    transition: all 0.3s;
    opacity: 0;
  }

  & .wrapper:hover .menu-content span {
    -webkit-transform: translate(-50%, -10px);
    transform: translate(-50%, -10px);
    opacity: 1;
  }

  .wrapper {
    background-color: #fff;
    background-position: center;
    height: 500px;
    width: 300px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
    background-size: cover;
    display: flex;
    flex-direction: column;
  }

  .wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: filter 0.3s; /* Ajoute une transition pour une animation fluide */
  }

  .wrapper:hover img {
    filter: blur(5px) brightness(0.7); /* Ajout de l'effet sombre avec une luminosité réduite */
  }

  .orga {
    display: flex;
    flex-direction: column;
  }

  .header {
    padding: 1em;
    z-index: 1;
  }

  .data {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 0;
    padding: 1em;
    opacity: 0; // Rend la div invisible par défaut
    transition: opacity 0.3s; // Ajoute une transition pour une animation fluide
    z-index: 1;
  }

  .wrapper:hover .data {
    opacity: 1; // Rend la div visible lors du survol
  }

  & .title {
    font-size: 28px;
    padding: 0 16px;

    font-weight: bold;
  }

  .text {
    margin-top: auto; // Positionne le texte en bas de la div .data
    height: 100%;
    margin: 0;
    padding: 16px;
  }

  & input[type="checkbox"] {
    display: none;
  }
  & input[type="checkbox"]:checked + .menu-content {
    -webkit-transform: translateY(-60px);
    transform: translateY(-60px);
  }

  & .header {
    color: #fff;
    padding: 1em;
  }
  & .header::before,
  & .header::after {
    content: "";
    display: table;
  }
  & .header::after {
    clear: both;
  }
  & .header .date {
    float: left;
    font-weight: bold;
    font-size: 12px;
  }

  & .button {
    display: block;
    width: 100px;
    margin: 6em auto 1em;
    text-align: center;
    font-size: 12px;
    color: #fff;
    line-height: 1;
    position: relative;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Movie;
