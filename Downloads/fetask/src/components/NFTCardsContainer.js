import { useMemo } from "react";
import "./NFTCardsContainer.css";

const NFTCardsContainer = ({
  designerBearText,
  designerBearText2,
  orbitianText,
  catFromFutureText,
  psychoDogText,
  catFromFutureText2,
  futureCatText,
  orbitianText2,
  propWidth,
  propFlexDirection,
  propAlignSelf,
  propFlexShrink,
  propFlex,
  propCursor,
  propAlignSelf1,
  propFlexShrink1,
  propFlex1,
  propCursor1,
  onNFTCardContainerClick,
  onNFTCardContainer1Click,
}) => {
  const nFTCardsRow1Style = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
    };
  }, [propWidth, propFlexDirection]);

  const nFTCard3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexShrink: propFlexShrink,
      flex: propFlex,
      cursor: propCursor,
    };
  }, [propAlignSelf, propFlexShrink, propFlex, propCursor]);

  const nFTCard4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      flexShrink: propFlexShrink1,
      flex: propFlex1,
      cursor: propCursor1,
    };
  }, [propAlignSelf1, propFlexShrink1, propFlex1, propCursor1]);

  return (
    <div className="nft-cards-row3" style={nFTCardsRow1Style}>
      <div
        className="nft-card6"
        style={nFTCard3Style}
        onClick={onNFTCardContainerClick}
      >
        <div className="image6">
          <img
            className="image-placeholder-icon36"
            alt=""
            src={designerBearText}
          />
        </div>
        <div className="nft-info13">
          <div className="artst-info5">
            <div className="nft-name6">{designerBearText2}</div>
            <div className="artist-avatar-name6">
              <div className="avatar45">
                <div className="asset-12-245">
                  <img
                    className="avatar-placeholder-icon45"
                    alt=""
                    src={orbitianText}
                  />
                </div>
              </div>
              <div className="nft-artist6">{catFromFutureText}</div>
            </div>
          </div>
          <div className="additional-info20">
            <div className="price14">
              <div className="price15">Price</div>
              <div className="eth37">1.63 ETH</div>
            </div>
            <div className="highest-bid12">
              <div className="price15">Highest Bid</div>
              <div className="eth37">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nft-card6"
        style={nFTCard4Style}
        onClick={onNFTCardContainer1Click}
      >
        <div className="image6">
          <img
            className="image-placeholder-icon36"
            alt=""
            src={psychoDogText}
          />
        </div>
        <div className="nft-info13">
          <div className="artst-info5">
            <div className="nft-name6">{catFromFutureText2}</div>
            <div className="artist-avatar-name6">
              <div className="avatar45">
                <div className="asset-12-245">
                  <img
                    className="avatar-placeholder-icon45"
                    alt=""
                    src={futureCatText}
                  />
                </div>
              </div>
              <div className="nft-artist6">{orbitianText2}</div>
            </div>
          </div>
          <div className="additional-info20">
            <div className="price14">
              <div className="price15">Price</div>
              <div className="eth37">1.63 ETH</div>
            </div>
            <div className="highest-bid12">
              <div className="price15">Highest Bid</div>
              <div className="eth37">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardsContainer;
