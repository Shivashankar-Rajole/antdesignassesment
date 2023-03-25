import { useMemo } from "react";
import "./FooterUI.css";

const FooterUI = ({
  productIds,
  productDimensions,
  productIds32x32,
  productIds20x20,
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
  const footer1Style = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const marketplace2Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const rankings2Style = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const connectAWallet1Style = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  return (
    <div className="footer1" style={footer1Style}>
      <div className="footer-info1">
        <div className="nft-marketplace-info1">
          <img className="logo-icon16" alt="" src={productIds} />
          <div className="additional-info14">
            <div className="nft-marketplace-ui3">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="community-info1">
              <div className="nft-marketplace-ui3">Join our community</div>
              <div className="icons3">
                <img
                  className="discordlogo-icon3"
                  alt=""
                  src={productDimensions}
                  onClick={onDiscordLogoIconClick}
                />
                <img
                  className="discordlogo-icon3"
                  alt=""
                  src={productIds32x32}
                  onClick={onYoutubeLogoIconClick}
                />
                <img
                  className="discordlogo-icon3"
                  alt=""
                  src="/twitterlogo1.svg"
                  onClick={onTwitterLogoIconClick}
                />
                <img
                  className="discordlogo-icon3"
                  alt=""
                  src="/instagramlogo1.svg"
                  onClick={onInstagramLogoIconClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="additional-info14">
          <b className="explore3">Explore</b>
          <div className="nft-marketplace-info1">
            <div
              className="marketplace2"
              onClick={onMarketplaceTextClick}
              style={marketplace2Style}
            >
              Marketplace
            </div>
            <div
              className="rankings4"
              style={rankings2Style}
              onClick={onRankingsTextClick}
            >
              Rankings
            </div>
            <div
              className="marketplace2"
              onClick={onConnectAWalletClick}
              style={connectAWallet1Style}
            >
              Connect a wallet
            </div>
          </div>
        </div>
        <div className="additional-info14">
          <b className="explore3">Join our weekly digest</b>
          <div className="nft-marketplace-info1">
            <div className="nft-marketplace-ui3">{`Get exclusive promotions & updates straight to your inbox.`}</div>
            <div className="subscribe-widgetmobile2">
              <div className="type-form14">
                <img className="user-icon6" alt="" src={productIds20x20} />
                <div className="enter-your-email4">
                  Enter Your Email Address
                </div>
                <img className="user-icon6" alt="" src="/eyeslash.svg" />
              </div>
              <div className="button58" onClick={onButtonContainerClick}>
                <img
                  className="envelopesimple-icon7"
                  alt=""
                  src="/envelopesimple.svg"
                />
                <div className="button59">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-group">
        <div className="divider1" />
        <div className="nft-market-use1">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </div>
  );
};

export default FooterUI;
