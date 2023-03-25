import { useMemo } from "react";
import "./NFTCardsRowContainer.css";

const NFTCardsRowContainer = ({
  imageTitles,
  galaxyMushroomTitles,
  smallImageTitles,
  largeImageTitles,
  largeImageDescriptions,
  largeImageTitles2,
  smallImageDescriptions,
  nebulaKidRobotTitles,
  largeImageUrls,
  astroFictionRobotTitles,
  smallImageUrls,
  spaceRobotTitles,
  propBackgroundColor,
  propCursor,
  propBorderRadius,
  propBackgroundColor1,
  propCursor1,
  propBackgroundColor2,
  propCursor2,
  onNFTCardContainerClick,
  onNFTCardContainer1Click,
  onNFTCardContainer2Click,
}) => {
  const nFTCardStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      cursor: propCursor,
    };
  }, [propBackgroundColor, propCursor]);

  const avatarPlaceholderIcon5Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const nFTCard1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      cursor: propCursor1,
    };
  }, [propBackgroundColor1, propCursor1]);

  const nFTCard2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      cursor: propCursor2,
    };
  }, [propBackgroundColor2, propCursor2]);

  return (
    <div className="nft-cards-row">
      <div
        className="nft-card"
        onClick={onNFTCardContainerClick}
        style={nFTCardStyle}
      >
        <div className="image">
          <img className="image-placeholder-icon29" alt="" src={imageTitles} />
        </div>
        <div className="nft-info6">
          <div className="artst-info">
            <div className="nft-name">{galaxyMushroomTitles}</div>
            <div className="artist-avatar-name">
              <div className="avatar16">
                <div className="asset-12-216">
                  <img
                    className="avatar-placeholder-icon16"
                    alt=""
                    src={smallImageTitles}
                    style={avatarPlaceholderIcon5Style}
                  />
                </div>
              </div>
              <div className="nft-artist">{largeImageTitles}</div>
            </div>
          </div>
          <div className="additional-info10">
            <div className="price2">
              <div className="price3">Price</div>
              <div className="weth">1.63 ETH</div>
            </div>
            <div className="highest-bid">
              <div className="price3">Highest Bid</div>
              <div className="weth">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nft-card"
        onClick={onNFTCardContainer1Click}
        style={nFTCard1Style}
      >
        <div className="image">
          <img
            className="image-placeholder-icon29"
            alt=""
            src={largeImageDescriptions}
          />
        </div>
        <div className="nft-info6">
          <div className="artst-info">
            <div className="nft-name">{largeImageTitles2}</div>
            <div className="artist-avatar-name">
              <div className="avatar16">
                <div className="asset-12-216">
                  <img
                    className="avatar-placeholder-icon16"
                    alt=""
                    src={smallImageDescriptions}
                  />
                </div>
              </div>
              <div className="nft-artist">{nebulaKidRobotTitles}</div>
            </div>
          </div>
          <div className="additional-info10">
            <div className="price2">
              <div className="price3">Price</div>
              <div className="weth">1.63 ETH</div>
            </div>
            <div className="highest-bid">
              <div className="price3">Highest Bid</div>
              <div className="weth">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nft-card"
        onClick={onNFTCardContainer2Click}
        style={nFTCard2Style}
      >
        <div className="image">
          <img
            className="image-placeholder-icon29"
            alt=""
            src={largeImageUrls}
          />
        </div>
        <div className="nft-info6">
          <div className="artst-info">
            <div className="nft-name">{astroFictionRobotTitles}</div>
            <div className="artist-avatar-name">
              <div className="avatar16">
                <div className="asset-12-216">
                  <img
                    className="avatar-placeholder-icon16"
                    alt=""
                    src={smallImageUrls}
                  />
                </div>
              </div>
              <div className="nft-artist">{spaceRobotTitles}</div>
            </div>
          </div>
          <div className="additional-info10">
            <div className="price2">
              <div className="price3">Price</div>
              <div className="weth">1.63 ETH</div>
            </div>
            <div className="highest-bid">
              <div className="price3">Highest Bid</div>
              <div className="weth">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardsRowContainer;
