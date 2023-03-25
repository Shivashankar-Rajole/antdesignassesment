import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTRowContainer from "./NFTRowContainer";
import ContainerHeadlineButton from "./ContainerHeadlineButton";
import "./DiscoverNFTsContainer.css";

const DiscoverNFTsContainer = () => {
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

  const onSectionHeadlineButton3Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  return (
    <div className="discover-more-nfts2">
      <div className="section-headline-button6">
        <div className="section-headline13">
          <div className="discover-more-nfts3">Discover More NFTs</div>
          <div className="explore-new-trending1">Explore new trending NFTs</div>
        </div>
      </div>
      <div className="nft-cards-row-parent">
        <NFTRowContainer
          bookCoverImageUrl="/image-placeholder53@2x.png"
          bookTitle="Distant Galaxy"
          bookISBN="/avatar-placeholder17@2x.png"
          bookAuthor="MoonDancer"
          onNFTCardContainerClick={onNFTCardContainerClick}
        />
        <NFTRowContainer
          bookCoverImageUrl="/image-placeholder54@2x.png"
          bookTitle="Life on Edena"
          bookISBN="/avatar-placeholder18@2x.png"
          bookAuthor="NebulaKid"
          onNFTCardContainerClick={onNFTCardContainer1Click}
        />
        <NFTRowContainer
          bookCoverImageUrl="/image-placeholder55@2x.png"
          bookTitle="AstroFiction"
          bookISBN="/avatar-placeholder19@2x.png"
          bookAuthor="Spaceone"
          onNFTCardContainerClick={onNFTCardContainer2Click}
        />
      </div>
      <ContainerHeadlineButton
        rankingIds="/eye.svg"
        rankingActionText="See All"
        onSectionHeadlineButton1Click={onSectionHeadlineButton3Click}
      />
    </div>
  );
};

export default DiscoverNFTsContainer;
