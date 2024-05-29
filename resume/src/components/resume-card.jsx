import "../styles/resume-card.css";
import { useState } from "react";

const ResumeCard = ({github_link, live_view, img, title, description}) => {
  const [extented, setExtended] = useState(false);
  const [onImg, setOnImg] = useState(false);

  function handleExtend() {
    setExtended(true);
  }

  function handleHide() {
    setExtended(false);
  }

  function onImage() {
    setOnImg(true);
  }

  function offImage() {
    setOnImg(false);
  }

  return (
    <div className="container">
    <div className="resumeCard" >
      <div className="img" onMouseOver={onImage} onMouseOut={offImage} style={{backgroundImage : onImg ? 'url("https://wallpapers.com/images/featured/plain-black-background-02fh7564l8qq4m6d.jpg")' :   `url(${img})`}}>
        {onImg && (
          <div>
             <a href={github_link} target="_blank"><button className="read-more" id="github" > 
              Github
            </button> </a> 
           <a href={live_view} target="_blank"> <button className="read-more" id="live-view" >
              Live View
            </button></a>
          </div>
        )}
      </div>
      <div>
        <h1 style={{color : "white" , fontWeight : "bolder", fontSize : "30px"}}>{title}</h1>
      </div>
      {extented ? (
        ""
      ) : (
        <button className="read-more" id="readMore" onClick={handleExtend}>
          Read More
        </button>
      )}
      {extented && (
        <p>
          {description}
        </p>
      )}

      {extented && (
        <div>
         <a href={github_link} target="_blank"><button className="read-more" id="github">
            Github
          </button> </a> 
         <a href={live_view} target="_blank"> <button className="read-more" id="live-view">
            Live View
          </button> </a>
        </div>
      )}
      {extented && (
        <button
          className="read-more"
          id="hide"
          onClick={handleHide}
          style={{ marginTop: "17px" }}
        >
          Hide
        </button>
      )}
    </div>
    </div>
  );
};

export default ResumeCard;
