import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterUI from "../components/FooterUI";
import "./CreateAccountMobile.css";

const CreateAccountMobile = () => {
  const navigate = useNavigate();

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://twitter.com/animaapp?lang=en");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/?hl=en");
  }, []);

  const onMarketplaceTextClick = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-mobile");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-mobile");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-mobile");
  }, [navigate]);

  return (
    <div className="create-account-mobile">
      <div className="navigation10">
        <div className="nav-logo20" onClick={onNavLogo1Click}>
          <div className="nav-logo21">
            <img className="logo-icon10" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu10">
          <img className="burger-menu-icon5" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="create-account-section">
        <img
          className="image-placeholder-icon17"
          alt=""
          src="/image-placeholder66@2x.png"
        />
        <div className="create-account-form1">
          <div className="headline-subhead19">
            <div className="headline-subhead20">
              <div className="headline5">
                <div className="create-account">Create account</div>
              </div>
              <div className="subhead5">
                <div className="welcome-enter-your">
                  Welcome! enter your details and start creating, collecting and
                  selling NFTs.
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="typeform">
              <div className="type-form">
                <img className="user-icon" alt="" src="/user4.svg" />
                <div className="username">Username</div>
                <img className="eyeslash-icon" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form">
                <img className="user-icon" alt="" src="/envelopesimple2.svg" />
                <div className="username">Email Address</div>
                <img className="eyeslash-icon" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form">
                <img className="user-icon" alt="" src="/lockkey.svg" />
                <div className="username">Password</div>
                <img className="eyeslash-icon" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form">
                <img className="user-icon" alt="" src="/lockkey.svg" />
                <div className="username">Confirm Password</div>
                <img className="eyeslash-icon" alt="" src="/eyeslash.svg" />
              </div>
            </div>
            <div className="button32">
              <img className="eyeslash-icon" alt="" src="/rocketlaunch1.svg" />
              <div className="button33">Create account</div>
            </div>
          </div>
        </div>
      </div>
      <FooterUI
        productIds="/logo.svg"
        productDimensions="/discordlogo4.svg"
        productIds32x32="/youtubelogo1.svg"
        productIds20x20="/user1.svg"
        propBorderTop="unset"
        propCursor="pointer"
        propCursor1="pointer"
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onButtonContainerClick={onButtonContainer1Click}
      />
    </div>
  );
};

export default CreateAccountMobile;
