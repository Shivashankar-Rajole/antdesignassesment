import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTContainer from "./NFTContainer";
import "./MushroomCardContainer.css";

const MushroomCardContainer = () => {
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

  const onNFTCardContainer3Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer4Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  return (
    <div className="nft-cards-row1">
      <NFTContainer
        imageId="/image-placeholder12@2x.png"
        imageText="Magic Mushroom 0324"
        imageDescription="/avatar-placeholder3@2x.png"
        imageTextShroomie="Shroomie"
        onNFTCardContainerClick={onNFTCardContainerClick}
      />
      <NFTContainer
        imageId="/image-placeholder13@2x.png"
        imageText="Happy Robot 024"
        imageDescription="/avatar-placeholder4@2x.png"
        imageTextShroomie="BeKind2Robots"
        propBorderRadius="120px"
        onNFTCardContainerClick={onNFTCardContainer1Click}
      />
      <NFTContainer
        imageId="/image-placeholder14@2x.png"
        imageText="Happy Robot 0324"
        imageDescription="/avatar-placeholder4@2x.png"
        imageTextShroomie="BeKind2Robots"
        propBorderRadius="120px"
        onNFTCardContainerClick={onNFTCardContainer2Click}
      />
      <NFTContainer
        imageId="/image-placeholder15@2x.png"
        imageText="Designer Bear"
        imageDescription="/avatar-placeholder2@2x.png"
        imageTextShroomie="Mr Fox"
        propBorderRadius="100px"
        onNFTCardContainerClick={onNFTCardContainer3Click}
      />
      <NFTContainer
        imageId="/image-placeholder16@2x.png"
        imageText="Colorful Dog 0324"
        imageDescription="/avatar-placeholder19@2x.png"
        imageTextShroomie="Keepitreal"
        propBorderRadius="120px"
        onNFTCardContainerClick={onNFTCardContainer4Click}
      />
    </div>
  );
};

export default MushroomCardContainer;
