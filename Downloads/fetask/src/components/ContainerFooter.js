import { useMemo } from "react";
import "./ContainerFooter.css";

const ContainerFooter = ({
  productIds,
  productDimensions,
  productIdsAndDimensions,
  propBorderTop,
  propCursor,
  propCursor1,
  propCursor2,
  onDiscordLogoIconClick,
  onYoutubeLogoIconClick,
  onTwitterLogoIconClick,
  onInstagramLogoIconClick,
  onMarketplaceTextClick,
  onRankingsTextClick,
  onConnectAWalletClick,
  onButtonContainerClick,
}) => {
  const footer2Style = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const marketplace3Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const rankings3Style = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const connectAWallet2Style = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  return (
    <div className="footer2" style={footer2Style}>
      <div className="footer-info2">
        <div className="nft-marketplace-info2">
          <img className="logo-icon17" alt="" src={productIds} />
          <div className="additional-info15">
            <div className="nft-marketplace-ui4">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="community-info2">
              <div className="nft-marketplace-ui4">Join our community</div>
              <div className="icons4">
                <img
                  className="discordlogo-icon4"
                  alt=""
                  src={productDimensions}
                  onClick={onDiscordLogoIconClick}
                />
                <img
                  className="discordlogo-icon4"
                  alt=""
                  src={productIdsAndDimensions}
                  onClick={onYoutubeLogoIconClick}
                />
                <img
                  className="discordlogo-icon4"
                  alt=""
                  src="/twitterlogo1.svg"
                  onClick={onTwitterLogoIconClick}
                />
                <img
                  className="discordlogo-icon4"
                  alt=""
                  src="/instagramlogo1.svg"
                  onClick={onInstagramLogoIconClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="additional-info15">
          <b className="explore5">Explore</b>
          <div className="nft-marketplace-info2">
            <div
              className="marketplace3"
              onClick={onMarketplaceTextClick}
              style={marketplace3Style}
            >
              Marketplace
            </div>
            <div
              className="rankings5"
              style={rankings3Style}
              onClick={onRankingsTextClick}
            >
              Rankings
            </div>
            <div
              className="marketplace3"
              onClick={onConnectAWalletClick}
              style={connectAWallet2Style}
            >
              Connect a wallet
            </div>
          </div>
        </div>
        <div className="additional-info15">
          <b className="explore5">Join our weekly digest</b>
          <div className="nft-marketplace-info2">
            <div className="nft-marketplace-ui4">{`Get exclusive promotions & updates straight to your inbox.`}</div>
            <div className="subscribe-form2">
              <div className="enter-your-email5">Enter your email here</div>
              <div className="button60" onClick={onButtonContainerClick}>
                <img
                  className="envelopesimple-icon8"
                  alt=""
                  src="/envelopesimple.svg"
                />
                <div className="button61">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-container">
        <div className="divider2" />
        <div className="nft-market-use2">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </div>
  );
};

export default ContainerFooter;
