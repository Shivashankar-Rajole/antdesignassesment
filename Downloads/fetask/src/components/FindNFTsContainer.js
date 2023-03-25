import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTCardsContainer from "./NFTCardsContainer";
import "./FindNFTsContainer.css";

const FindNFTsContainer = () => {
  const navigate = useNavigate();

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/marketplace-tablet");
  }, [navigate]);

  return (
    <div className="discover-more-nfts4">
      <div className="section-headline-button8">
        <div className="section-headline16">
          <div className="discover-more-nfts5">Discover More NFTs</div>
          <div className="explore-new-trending2">Explore new trending NFTs</div>
        </div>
        <div className="button90" onClick={onButtonContainer2Click}>
          <img className="eye-icon4" alt="" src="/eye.svg" />
          <div className="button91">See All</div>
        </div>
      </div>
      <NFTCardsContainer
        designerBearText="/image-placeholder57@2x.png"
        designerBearText2="Distant Galaxy"
        orbitianText="/avatar-placeholder17@2x.png"
        catFromFutureText="MoonDancer"
        psychoDogText="/image-placeholder58@2x.png"
        catFromFutureText2="Life on Edena"
        futureCatText="/avatar-placeholder18@2x.png"
        orbitianText2="NebulaKid"
        propWidth="690px"
        propFlexDirection="row"
        propAlignSelf="unset"
        propFlexShrink="unset"
        propFlex="1"
        propCursor="pointer"
        propAlignSelf1="unset"
        propFlexShrink1="unset"
        propFlex1="1"
        propCursor1="pointer"
        onNFTCardContainerClick={onNFTCardContainerClick}
        onNFTCardContainer1Click={onNFTCardContainer1Click}
      />
    </div>
  );
};

export default FindNFTsContainer;
