import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CollectionContainer from "./CollectionContainer";
import "./TrendingCollectionBox.css";

const TrendingCollectionBox = () => {
  const navigate = useNavigate();

  const onPrimaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNumberOfAdditionalNFTsClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onAvatarContainer2Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onPrimaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder2Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder3Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNumberOfAdditionalNFTs1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onAvatarContainer3Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  return (
    <div className="trending-collection4">
      <div className="section-headline14">
        <div className="heading4">
          <div className="trending-collection5">Trending Collection</div>
        </div>
        <div className="subhead12">
          <div className="checkout-our-weekly2">
            Checkout our weekly updated trending collection.
          </div>
        </div>
      </div>
      <div className="collection-slider1">
        <CollectionContainer
          imageIds="/primary-photo-placeholder@2x.png"
          smallImageIds="/secondary-photo-placeholder@2x.png"
          mediumImageIds="/secondary-photo-placeholder1@2x.png"
          largeImageIds="1025+"
          animalName="DSGN Animals"
          smallImageText="/avatar-placeholder2@2x.png"
          animalImageText="MrFox"
          propCursor="pointer"
          propBorderRadius="100px"
          propCursor1="unset"
          onPrimaryPhotoPlaceholderClick={onPrimaryPhotoPlaceholderClick}
          onSecondaryPhotoPlaceholderClick={onSecondaryPhotoPlaceholderClick}
          onSecondaryPhotoPlaceholder1Click={onSecondaryPhotoPlaceholder1Click}
          onNumberOfAdditionalNFTsClick={onNumberOfAdditionalNFTsClick}
          onAvatarContainer3Click={onAvatarContainer2Click}
        />
        <CollectionContainer
          imageIds="/primary-photo-placeholder1@2x.png"
          smallImageIds="/secondary-photo-placeholder2@2x.png"
          mediumImageIds="/secondary-photo-placeholder3@2x.png"
          largeImageIds="6+"
          animalName="Magic Mushrooms"
          smallImageText="/avatar-placeholder3@2x.png"
          animalImageText="Shroomie"
          propCursor="pointer"
          propBorderRadius="120px"
          propCursor1="unset"
          onPrimaryPhotoPlaceholderClick={onPrimaryPhotoPlaceholder1Click}
          onSecondaryPhotoPlaceholderClick={onSecondaryPhotoPlaceholder2Click}
          onSecondaryPhotoPlaceholder1Click={onSecondaryPhotoPlaceholder3Click}
          onNumberOfAdditionalNFTsClick={onNumberOfAdditionalNFTs1Click}
          onAvatarContainer3Click={onAvatarContainer3Click}
        />
      </div>
    </div>
  );
};

export default TrendingCollectionBox;
