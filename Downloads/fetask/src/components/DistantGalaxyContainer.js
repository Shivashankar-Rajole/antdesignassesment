import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTContainer from "./NFTContainer";
import "./DistantGalaxyContainer.css";

const DistantGalaxyContainer = () => {
  const navigate = useNavigate();

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer2Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  return (
    <div className="nft-cards-section5">
      <div className="nft-cards-row4">
        <NFTContainer
          imageId="/image-placeholder53@2x.png"
          imageText="Distant Galaxy"
          imageDescription="/avatar-placeholder1@2x.png"
          imageTextShroomie="Animakid"
          propBorderRadius="120px"
          onNFTCardContainerClick={onNFTCardContainerClick}
        />
        <NFTContainer
          imageId="/image-placeholder54@2x.png"
          imageText="Life On Edena"
          imageDescription="/avatar-placeholder1@2x.png"
          imageTextShroomie="Animakid"
          propBorderRadius="120px"
          onNFTCardContainerClick={onNFTCardContainer1Click}
        />
        <NFTContainer
          imageId="/image-placeholder55@2x.png"
          imageText="AstroFiction"
          imageDescription="/avatar-placeholder1@2x.png"
          imageTextShroomie="Animakid"
          propBorderRadius="120px"
          onNFTCardContainerClick={onNFTCardContainer2Click}
        />
      </div>
    </div>
  );
};

export default DistantGalaxyContainer;
