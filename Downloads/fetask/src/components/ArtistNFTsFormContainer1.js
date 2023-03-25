import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTCardsRowContainer from "./NFTCardsRowContainer";
import "./ArtistNFTsFormContainer1.css";

const ArtistNFTsFormContainer1 = () => {
  const navigate = useNavigate();

  const onButtonContainer5Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  return (
    <div className="more-nfts-from-the-artist2">
      <div className="section-headline-button3">
        <div className="section-headline9">
          <div className="more-from-this2">More from this artist</div>
        </div>
        <div className="button76" onClick={onButtonContainer5Click}>
          <img className="arrowright-icon2" alt="" src="/arrowright.svg" />
          <div className="button77">Go To Artist Page</div>
        </div>
      </div>
      <NFTCardsRowContainer
        imageTitles="/image-placeholder46@2x.png"
        galaxyMushroomTitles="Foxy Life"
        smallImageTitles="/avatar-placeholder25@2x.png"
        largeImageTitles="Orbitian"
        largeImageDescriptions="/image-placeholder45@2x.png"
        largeImageTitles2="Cat from future"
        smallImageDescriptions="/avatar-placeholder25@2x.png"
        nebulaKidRobotTitles="Orbitian"
        largeImageUrls="/image-placeholder44@2x.png"
        astroFictionRobotTitles="Psycho Dog"
        smallImageUrls="/avatar-placeholder25@2x.png"
        spaceRobotTitles="Orbitian"
        propBackgroundColor="#3b3b3b"
        propCursor="unset"
        propBorderRadius="120px"
        propBackgroundColor1="#3b3b3b"
        propCursor1="unset"
        propBackgroundColor2="#3b3b3b"
        propCursor2="unset"
      />
      <NFTCardsRowContainer
        imageTitles="/image-placeholder28@2x.png"
        galaxyMushroomTitles="Designer Bear"
        smallImageTitles="/avatar-placeholder25@2x.png"
        largeImageTitles="Orbitian"
        largeImageDescriptions="/image-placeholder49@2x.png"
        largeImageTitles2="Dancing Robot 0375"
        smallImageDescriptions="/avatar-placeholder25@2x.png"
        nebulaKidRobotTitles="Orbitian"
        largeImageUrls="/image-placeholder50@2x.png"
        astroFictionRobotTitles="Dancing Robot 0356"
        smallImageUrls="/avatar-placeholder25@2x.png"
        spaceRobotTitles="Orbitian"
        propBackgroundColor="#3b3b3b"
        propCursor="unset"
        propBorderRadius="120px"
        propBackgroundColor1="#3b3b3b"
        propCursor1="unset"
        propBackgroundColor2="#3b3b3b"
        propCursor2="unset"
      />
      <NFTCardsRowContainer
        imageTitles="/image-placeholder30@2x.png"
        galaxyMushroomTitles="Dancing Robot 0321"
        smallImageTitles="/avatar-placeholder25@2x.png"
        largeImageTitles="Orbitian"
        largeImageDescriptions="/image-placeholder47@2x.png"
        largeImageTitles2="Dancing Robot 0512"
        smallImageDescriptions="/avatar-placeholder25@2x.png"
        nebulaKidRobotTitles="Orbitian"
        largeImageUrls="/image-placeholder51@2x.png"
        astroFictionRobotTitles="Dancing Robot 0024"
        smallImageUrls="/avatar-placeholder25@2x.png"
        spaceRobotTitles="Orbitian"
        propBackgroundColor="#3b3b3b"
        propCursor="unset"
        propBorderRadius="120px"
        propBackgroundColor1="#3b3b3b"
        propCursor1="unset"
        propBackgroundColor2="#3b3b3b"
        propCursor2="unset"
      />
    </div>
  );
};

export default ArtistNFTsFormContainer1;
