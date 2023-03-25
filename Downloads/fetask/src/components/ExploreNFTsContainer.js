import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTCardsRowContainer from "./NFTCardsRowContainer";
import "./ExploreNFTsContainer.css";

const ExploreNFTsContainer = () => {
  const navigate = useNavigate();

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  return (
    <div className="discover-more-nfts">
      <div className="section-headline-button1">
        <div className="section-headline7">
          <div className="discover-more-nfts1">Discover More NFTs</div>
          <div className="explore-new-trending">Explore new trending NFTs</div>
        </div>
        <div className="button52" onClick={onButtonContainer2Click}>
          <img className="eye-icon2" alt="" src="/eye.svg" />
          <div className="button53">See All</div>
        </div>
      </div>
      <NFTCardsRowContainer
        imageTitles="/image-placeholder9@2x.png"
        galaxyMushroomTitles="Distant Galaxy"
        smallImageTitles="/avatar-placeholder17@2x.png"
        largeImageTitles="MoonDancer"
        largeImageDescriptions="/image-placeholder10@2x.png"
        largeImageTitles2="Life On Edena"
        smallImageDescriptions="/avatar-placeholder18@2x.png"
        nebulaKidRobotTitles="NebulaKid"
        largeImageUrls="/image-placeholder11@2x.png"
        astroFictionRobotTitles="AstroFiction"
        smallImageUrls="/avatar-placeholder19@2x.png"
        spaceRobotTitles="Spaceone"
        onNFTCardContainerClick={onNFTCardContainerClick}
        onNFTCardContainer1Click={onNFTCardContainer1Click}
        onNFTCardContainer2Click={onNFTCardContainer2Click}
      />
    </div>
  );
};

export default ExploreNFTsContainer;
