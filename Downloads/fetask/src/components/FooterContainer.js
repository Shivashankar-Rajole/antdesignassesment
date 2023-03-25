import { useMemo } from "react";
import "./FooterContainer.css";

const FooterContainer = ({
  productIds,
  productDimensions,
  productIdsAndDimensions,
  productIdsAndDimensionsTe,
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
  onConnectAWallet1Click,
  onButtonContainer5Click,
}) => {
  const footerStyle = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const marketplace1Style = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const rankings1Style = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const connectAWalletStyle = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="footer-info">
        <div className="nft-marketplace-info">
          <img className="logo-icon15" alt="" />
          <h4>P2E Pro</h4>
          <div className="additional-info13">
            <div className="nft-marketplace-ui2">
              P2E
            </div>
            <div className="community-info">
              <div className="join-our-community">Join our community</div>
              <div className="icons2">
                
                <img
                  className="discordlogo-icon2"
                  alt=""
                  src={productIdsAndDimensions}
                />
                <img
                  className="discordlogo-icon2"
                  alt=""
                  src={productIdsAndDimensionsTe}
                />
                <img
                  className="discordlogo-icon2"
                  alt=""
                  src="/instagramlogo.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <b className="explore1">Market Plc</b>
          <div className="pages">
            <div
              className="marketplace1"
              style={marketplace1Style}
            >
              Marketplace
            </div>
            <div
              className="marketplace1"
              style={rankings1Style}
            >
              Profile
            </div>
            <div
              className="marketplace1"
              style={connectAWalletStyle}
            >
              Creators
            </div>
            <div
              className="marketplace1"
              style={connectAWalletStyle}
            >
              Activity
            </div>
            <div
              className="marketplace1"
              style={connectAWalletStyle}
            >
              Collections
            </div>
          </div>
        </div>
        <div className="explore">
          <b className="explore1">Copmany</b>
          <div className="pages">
            <div
              className="marketplace1"
              style={marketplace1Style}
            >
              Upload
            </div>
            <div
              className="marketplace1"
              style={rankings1Style}
            >
              Connect Wallet
            </div>
            <div
              className="marketplace1"
              style={connectAWalletStyle}
            >
              Our Blog
            </div>
            <div
              className="marketplace1"
              style={connectAWalletStyle}
            >
              Item details
            </div>
            <div
              className="marketplace1"
              style={connectAWalletStyle}
            >
              Contact Us
            </div>
          </div>
        </div>
        <div className="subscribe">
          <b className="explore1">Join Newsletter</b>
          <div className="pages">
            <div className="subscribe-form1">
              <div className="enter-your-email3">Enter your email </div>
              <div className="button56" onClick={""}>
                <img
                  className="envelopesimple-icon6"
                  alt=""
                  src="/envelopesimple1.svg"
                />
                <div className="button57">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-parent">
        <div className="divider" />
       
      </div>
    </div>
  );
};

export default FooterContainer;
