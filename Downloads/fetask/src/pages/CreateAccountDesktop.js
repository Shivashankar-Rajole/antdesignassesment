import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterContainer from "../components/FooterContainer";
import "./CreateAccountDesktop.css";

const CreateAccountDesktop = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings-desktop");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-desktop");
  }, [navigate]);

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
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-desktop");
  }, [navigate]);

  const onConnectAWallet1Click = useCallback(() => {
    navigate("/connect-wallet-desktop");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="create-account-desktop">
      <Header
        productIds="/logo.svg"
        productDimensions="/rocketlaunch1.svg"
        productIdsAndDimensions="/user.svg"
        rocketLaunchCursor="pointer"
        rocketLaunchCursor1="pointer"
        userCursor="unset"
        onNavLogoClick={onNavLogoClick}
        onMarketplaceContainerClick={onMarketplaceContainerClick}
        onRankingsContainerClick={onRankingsContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
      />
      <div className="create-account-section2">
        <img
          className="image-placeholder-icon19"
          alt=""
          src="/image-placeholder68@2x.png"
        />
        <div className="create-account-form3">
          <div className="headline-subhead23">
            <div className="headline-subhead24">
              <div className="headline7">
                <div className="create-account2">Create account</div>
              </div>
              <div className="subhead7">
                <div className="welcome-enter-your2">
                  Welcome! enter your details and start creating, collecting and
                  selling NFTs.
                </div>
              </div>
            </div>
          </div>
          <div className="form2">
            <div className="typeforms">
              <div className="type-form8">
                <img className="user-icon2" alt="" src="/user4.svg" />
                <div className="username8">Username</div>
                <img className="eyeslash-icon8" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form8">
                <img className="user-icon2" alt="" src="/envelopesimple2.svg" />
                <div className="username8">Email Address</div>
                <img className="eyeslash-icon8" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form8">
                <img className="user-icon2" alt="" src="/lockkey.svg" />
                <div className="username8">Password</div>
                <img className="eyeslash-icon8" alt="" src="/eyeslash.svg" />
              </div>
              <div className="type-form8">
                <img className="user-icon2" alt="" src="/lockkey.svg" />
                <div className="username8">Confirm Password</div>
                <img className="eyeslash-icon8" alt="" src="/eyeslash.svg" />
              </div>
            </div>
            <div className="button36">
              <img className="eyeslash-icon8" alt="" src="/rocketlaunch3.svg" />
              <div className="button37">Create account</div>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer
        productIds="/logo3.svg"
        productDimensions="/discordlogo6.svg"
        productIdsAndDimensions="/youtubelogo4.svg"
        productIdsAndDimensionsTe="/twitterlogo2.svg"
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
        onConnectAWallet1Click={onConnectAWallet1Click}
        onButtonContainer5Click={onButtonContainer1Click}
      />
    </div>
  );
};

export default CreateAccountDesktop;
