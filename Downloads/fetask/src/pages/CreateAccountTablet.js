import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFooter from "../components/ContainerFooter";
import "./CreateAccountTablet.css";

const CreateAccountTablet = () => {
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
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-tablet");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-tablet");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-tablet");
  }, [navigate]);

  return (
    <div className="create-account-tablet">
      <div className="navigation11">
        <div className="nav-logo22" onClick={onNavLogo1Click}>
          <div className="nav-logo23">
            <img className="logo-icon11" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu11">
          <img className="burger-menu5" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="create-account-section1">
        <img
          className="image-placeholder-icon18"
          alt=""
          src="/image-placeholder67@2x.png"
        />
        <div className="create-account-form2">
          <div className="headline-subhead21">
            <div className="headline-subhead22">
              <div className="headline6">
                <div className="create-account1">Create account</div>
              </div>
              <div className="subhead6">
                <div className="welcome-enter-your1">
                  Welcome! enter your details and start creating, collecting and
                  selling NFTs.
                </div>
              </div>
            </div>
          </div>
          <div className="form1">
            <div className="typeform1">
              <div className="type-form4">
                <img className="user-icon1" alt="" src="/user4.svg" />
                <div className="username4">Username</div>
                <img className="eyeslash-icon4" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form4">
                <img className="user-icon1" alt="" src="/envelopesimple2.svg" />
                <div className="username4">Email Address</div>
                <img className="eyeslash-icon4" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form4">
                <img className="user-icon1" alt="" src="/lockkey.svg" />
                <div className="username4">Password</div>
                <img className="eyeslash-icon4" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form4">
                <img className="user-icon1" alt="" src="/lockkey.svg" />
                <div className="username4">Confirm Password</div>
                <img className="eyeslash-icon4" alt="" src="/eyeslash.svg" />
              </div>
            </div>
            <div className="button34">
              <img className="eyeslash-icon4" alt="" src="/rocketlaunch1.svg" />
              <div className="button35">Create account</div>
            </div>
          </div>
        </div>
      </div>
      <ContainerFooter
        productIds="/logo.svg"
        productDimensions="/discordlogo4.svg"
        productIdsAndDimensions="/youtubelogo1.svg"
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

export default CreateAccountTablet;
