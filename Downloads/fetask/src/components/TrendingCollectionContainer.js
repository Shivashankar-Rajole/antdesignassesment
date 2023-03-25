import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CollectionContainer from "./CollectionContainer";
import "./TrendingCollectionContainer.css";

const TrendingCollectionContainer = () => {
  const navigate = useNavigate();

  const onPrimaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNumberOfAdditionalNFTsClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onAvatarPlaceholderIcon1Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onPrimaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder3Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNumberOfAdditionalNFTs1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onAvatarContainer3Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onPrimaryPhotoPlaceholder2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder4Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder5Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNumberOfAdditionalNFTs2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onAvatarContainer4Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  return (
    <div className="trending-collection">
      <div className="section-headline5">
        <div className="heading">
          <div className="trending-collection1">Trending Collection</div>
        </div>
        <div className="subhead8">
          
        </div>
      </div>
      <div className="collection-card-row">
        <CollectionContainer
          imageIds="/primary-photo-placeholder@2x.png"
          smallImageIds="/secondary-photo-placeholder@2x.png"
          mediumImageIds="/secondary-photo-placeholder1@2x.png"
          largeImageIds="1025+"
          animalName="DSGN Animals"
          smallImageText="/avatar-placeholder2@2x.png"
          animalImageText="MrFox"
          onPrimaryPhotoPlaceholderClick={onPrimaryPhotoPlaceholderClick}
          onSecondaryPhotoPlaceholderClick={onSecondaryPhotoPlaceholderClick}
          onSecondaryPhotoPlaceholder1Click={onSecondaryPhotoPlaceholder1Click}
          onNumberOfAdditionalNFTsClick={onNumberOfAdditionalNFTsClick}
          onAvatarPlaceholderIcon1Click={onAvatarPlaceholderIcon1Click}
        />
        <CollectionContainer
          imageIds="/primary-photo-placeholder1@2x.png"
          smallImageIds="/secondary-photo-placeholder2@2x.png"
          mediumImageIds="/secondary-photo-placeholder3@2x.png"
          largeImageIds="1025+"
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
        <CollectionContainer
          imageIds="/primary-photo-placeholder2@2x.png"
          smallImageIds="/secondary-photo-placeholder4@2x.png"
          mediumImageIds="/secondary-photo-placeholder5@2x.png"
          largeImageIds="1025+"
          animalName="Disco Machines"
          smallImageText="/avatar-placeholder4@2x.png"
          animalImageText="BeKind2Robots"
          propCursor="pointer"
          propBorderRadius="120px"
          propCursor1="unset"
          onPrimaryPhotoPlaceholderClick={onPrimaryPhotoPlaceholder2Click}
          onSecondaryPhotoPlaceholderClick={onSecondaryPhotoPlaceholder4Click}
          onSecondaryPhotoPlaceholder1Click={onSecondaryPhotoPlaceholder5Click}
          onNumberOfAdditionalNFTsClick={onNumberOfAdditionalNFTs2Click}
          onAvatarContainer3Click={onAvatarContainer4Click}
        />
      </div>
    </div>
  );
};

export default TrendingCollectionContainer;
