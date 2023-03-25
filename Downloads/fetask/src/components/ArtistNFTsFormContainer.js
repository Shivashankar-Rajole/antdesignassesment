import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTCardsContainer from "./NFTCardsContainer";
import "./ArtistNFTsFormContainer.css";

const ArtistNFTsFormContainer = () => {
  const navigate = useNavigate();

  const onButtonContainer5Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  return (
    <div className="more-nfts-from-the-artist1">
      <div className="section-headline-button2">
        <div className="section-headline8">
          <div className="more-from-this1">More from this artist</div>
        </div>
        <div className="button74" onClick={onButtonContainer5Click}>
          <img className="arrowright-icon1" alt="" src="/arrowright.svg" />
          <div className="button75">Go To Artist Page</div>
        </div>
      </div>
      <NFTCardsContainer
        designerBearText="/image-placeholder28@2x.png"
        designerBearText2="Designer Bear"
        orbitianText="/avatar-placeholder25@2x.png"
        catFromFutureText="Orbitian"
        psychoDogText="/image-placeholder44@2x.png"
        catFromFutureText2="Psycho Dog"
        futureCatText="/avatar-placeholder25@2x.png"
        orbitianText2="Orbitian"
        propWidth="690px"
        propFlexDirection="row"
        propAlignSelf="unset"
        propFlexShrink="unset"
        propFlex="1"
        propCursor="unset"
        propAlignSelf1="unset"
        propFlexShrink1="unset"
        propFlex1="1"
        propCursor1="unset"
      />
      <NFTCardsContainer
        designerBearText="/image-placeholder45@2x.png"
        designerBearText2="Cat from future"
        orbitianText="/avatar-placeholder25@2x.png"
        catFromFutureText="Orbitian"
        psychoDogText="/image-placeholder46@2x.png"
        catFromFutureText2="Foxy Life"
        futureCatText="/avatar-placeholder25@2x.png"
        orbitianText2="Orbitian"
        propWidth="690px"
        propFlexDirection="row"
        propAlignSelf="unset"
        propFlexShrink="unset"
        propFlex="1"
        propCursor="unset"
        propAlignSelf1="unset"
        propFlexShrink1="unset"
        propFlex1="1"
        propCursor1="unset"
      />
      <NFTCardsContainer
        designerBearText="/image-placeholder30@2x.png"
        designerBearText2="Dancing Robot 0345"
        orbitianText="/avatar-placeholder25@2x.png"
        catFromFutureText="Orbitian"
        psychoDogText="/image-placeholder47@2x.png"
        catFromFutureText2="Dancing Robot 0387"
        futureCatText="/avatar-placeholder25@2x.png"
        orbitianText2="Orbitian"
        propWidth="690px"
        propFlexDirection="row"
        propAlignSelf="unset"
        propFlexShrink="unset"
        propFlex="1"
        propCursor="unset"
        propAlignSelf1="unset"
        propFlexShrink1="unset"
        propFlex1="1"
        propCursor1="unset"
      />
    </div>
  );
};

export default ArtistNFTsFormContainer;
