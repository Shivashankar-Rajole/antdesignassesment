import { useMemo } from "react";
import "./CollectionContainer.css";

const CollectionContainer = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  largeImageIds,
  animalName,
  smallImageText,
  animalImageText,
  propCursor,
  propBorderRadius,
  propCursor1,
  onPrimaryPhotoPlaceholderClick,
  onSecondaryPhotoPlaceholderClick,
  onSecondaryPhotoPlaceholder1Click,
  onNumberOfAdditionalNFTsClick,
  onAvatarContainer3Click,
  onAvatarPlaceholderIcon1Click,
}) => {
  const avatarStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const avatarPlaceholderIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      cursor: propCursor1,
    };
  }, [propBorderRadius, propCursor1]);

  return (
    <div className="collection-card">
      <div className="photos-number-of-additional">
       
      </div>
      <div className="collection-info">
        
        <div className="artist-card8">
          <div
            className="avatar11"
            style={avatarStyle}
            onClick={onAvatarContainer3Click}
          >
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionContainer;
