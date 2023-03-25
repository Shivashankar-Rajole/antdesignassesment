import { useMemo } from "react";
import "./NFTCardRowContainer.css";

const NFTCardRowContainer = ({
  imageIds,
  imageTitles,
  imageDimensions,
  imageCaptions,
  imageUrls,
  imageRobotNames,
  imageRobotIds,
  imageRobotMottos,
  highestBidWidth,
  propBorderRadius,
  onNFTCardContainerClick,
  onNFTCardContainer1Click,
}) => {
  const nFTCardsRowStyle = useMemo(() => {
    return {
      width: highestBidWidth,
    };
  }, [highestBidWidth]);

  const avatarPlaceholderIcon9Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="nft-cards-row2" style={nFTCardsRowStyle}>
      <div className="nft-card4" onClick={onNFTCardContainerClick}>
        <div className="image4">
          <img className="image-placeholder-icon33" alt="" src={imageIds} />
        </div>
        <div className="nft-info10">
          <div className="artst-info3">
            <div className="nft-name4">{imageTitles}</div>
            <div className="artist-avatar-name4">
              <div className="avatar42">
                <div className="asset-12-242">
                  <img
                    className="avatar-placeholder-icon42"
                    alt=""
                    src={imageDimensions}
                  />
                </div>
              </div>
              <div className="nft-artist4">{imageCaptions}</div>
            </div>
          </div>
          <div className="additional-info18">
            <div className="price10">
              <div className="price11">Price</div>
              <div className="eth35">1.63 ETH</div>
            </div>
            <div className="highest-bid8">
              <div className="price11">Highest Bid</div>
              <div className="eth35">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="nft-card4" onClick={onNFTCardContainer1Click}>
        <div className="image4">
          <img className="image-placeholder-icon33" alt="" src={imageUrls} />
        </div>
        <div className="nft-info10">
          <div className="artst-info3">
            <div className="nft-name4">{imageRobotNames}</div>
            <div className="artist-avatar-name4">
              <div className="avatar42">
                <div className="asset-12-242">
                  <img
                    className="avatar-placeholder-icon42"
                    alt=""
                    src={imageRobotIds}
                    style={avatarPlaceholderIcon9Style}
                  />
                </div>
              </div>
              <div className="nft-artist4">{imageRobotMottos}</div>
            </div>
          </div>
          <div className="additional-info18">
            <div className="price10">
              <div className="price11">Price</div>
              <div className="eth35">1.63 ETH</div>
            </div>
            <div className="highest-bid8">
              <div className="price11">Highest Bid</div>
              <div className="eth35">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardRowContainer;
