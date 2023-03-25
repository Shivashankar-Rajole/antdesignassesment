import { useMemo } from "react";
import "./NFTContainer.css";

const NFTContainer = ({
  imageId,
  imageText,
  imageDescription,
  imageTextShroomie,
  propBorderRadius,
  onNFTCardContainerClick,
}) => {
  const avatarPlaceholderIcon8Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="nft-card3" onClick={onNFTCardContainerClick}>
      <div className="image3">
        <img className="image-placeholder-icon32" alt="" src={imageId} />
      </div>
      <div className="nft-info9">
        <div className="artist-info9">
          <div className="nft-name3">{imageText}</div>
          <div className="artist-avatar-name3">
            <div className="avatar41">
              <div className="asset-12-241">
                <img
                  className="avatar-placeholder-icon41"
                  alt=""
                  src={imageDescription}
                  style={avatarPlaceholderIcon8Style}
                />
              </div>
            </div>
            <div className="artist-name5">
              <div className="nft-artist3">{imageTextShroomie}</div>
            </div>
          </div>
        </div>
        <div className="additional-info17">
          <div className="price8">
            <div className="price9">Price</div>
            <div className="eth34">1.63 ETH</div>
          </div>
          <div className="highest-bid6">
            <div className="price9">Highest Bid</div>
            <div className="eth34">0.33 wETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTContainer;
