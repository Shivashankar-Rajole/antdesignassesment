import { useCallback } from "react";
import NFTCardsContainer from "./NFTCardsContainer";
import { useNavigate } from "react-router-dom";
import "./ArtistNFTsContainer.css";

const ArtistNFTsContainer = () => {
  const navigate = useNavigate();

  const onButtonContainer5Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  return (
    <div className="more-nfts-from-the-artist">
      <div className="more-from-artist">
        <div className="more-from-this">More from this artist</div>
        <NFTCardsContainer
          designerBearText="/image-placeholder41@2x.png"
          designerBearText2="Designer Bear"
          orbitianText="/avatar-placeholder25@2x.png"
          catFromFutureText="Orbition"
          psychoDogText="/image-placeholder42@2x.png"
          catFromFutureText2="Cat from future"
          futureCatText="/avatar-placeholder25@2x.png"
          orbitianText2="Orbition"
        />
        <div className="button72" onClick={onButtonContainer5Click}>
          <img className="arrowright-icon" alt="" src="/arrowright.svg" />
          <div className="button73">Go To Artist Page</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistNFTsContainer;
