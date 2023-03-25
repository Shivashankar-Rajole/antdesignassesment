import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FooterContainer from "../components/FooterContainer";
import "./ConnectWalletDesktop.css";

const ConnectWalletDesktop = () => {
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
    navigate("/connect-wallet-mobile");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account-desktop");
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

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onMetamaskContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onWalletConnectContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onCoinbaseContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="connect-wallet-desktop">
      <Header
        productIds="/logo4.svg"
        productDimensions="/rocketlaunch1.svg"
        productIdsAndDimensions="/user3.svg"
        rocketLaunchCursor="pointer"
        rocketLaunchCursor1="pointer"
        userCursor="pointer"
        onNavLogoClick={onNavLogoClick}
        onMarketplaceContainerClick={onMarketplaceContainerClick}
        onRankingsContainerClick={onRankingsContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
      />
      <div className="connect-wallet-section1">
        <img
          className="image-placeholder-icon10"
          alt=""
          src="/image-placeholder39@2x.png"
        />
        <div className="connect-a-wallet">
          <div className="headline-subhead15">
            <div className="headline-subhead16">
              <div className="headline4">
                <div className="connect-wallet1">Connect wallet</div>
              </div>
              <div className="subhead4">
                <div className="choose-a-wallet1">
                  Choose a wallet you want to connect. There are several wallet
                  providers.
                </div>
              </div>
            </div>
          </div>
          <div className="wallet-options1">
            <div className="metamask4" onClick={onMetamaskContainerClick}>
              <img className="metamask-icon1" alt="" src="/metamask2.svg" />
              <div className="metamask5">Metamask</div>
            </div>
            <div className="metamask4" onClick={onWalletConnectContainerClick}>
              <img
                className="metamask-icon1"
                alt=""
                src="/walletconnect2.svg"
              />
              <div className="metamask5">Wallet Connect</div>
            </div>
            <div className="metamask4" onClick={onCoinbaseContainerClick}>
              <img className="metamask-icon1" alt="" src="/coinbase2.svg" />
              <div className="metamask5">Coinbase</div>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer
        productIds="/logo1.svg"
        productDimensions="/discordlogo2.svg"
        productIdsAndDimensions="/youtubelogo.svg"
        productIdsAndDimensionsTe="/twitterlogo2.svg"
        propBorderTop="unset"
        propCursor="pointer"
        propCursor1="pointer"
        propCursor2="unset"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onRankingsTextClick={onRankingsTextClick}
        onButtonContainer5Click={onButtonContainerClick}
      />
    </div>
  );
};

export default ConnectWalletDesktop;
