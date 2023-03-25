import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FooterUI from "../components/FooterUI";
import "./ConnectWalletMobile.css";

const ConnectWalletMobile = () => {
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

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-mobile");
  }, [navigate]);

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

  const onCoinBaseContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="connect-wallet-mobile">
      <div className="navigation4">
        <div className="nav-logo8" onClick={onNavLogo1Click}>
          <div className="nav-logo9">
            <img className="logo-icon4" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu4">
          <img className="burger-menu-icon2" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="connect-wallet-section">
        <img
          className="image-placeholder-icon9"
          alt=""
          src="/image-placeholder37@2x.png"
        />
        <div className="create-account-form">
          <div className="headline-subhead13">
            <div className="headline-subhead14">
              <div className="headline3">
                <div className="connect-wallet">Connect Wallet</div>
              </div>
              <div className="subhead3">
                <div className="choose-a-wallet">
                  Choose a wallet you want to connect. There are several wallet
                  providers.
                </div>
              </div>
            </div>
          </div>
          <div className="wallet-options">
            <div className="metamask" onClick={onMetamaskContainerClick}>
              <img className="metamask-icon" alt="" src="/metamask.svg" />
              <div className="metamask1">Metamask</div>
            </div>
            <div className="metamask" onClick={onWalletConnectContainerClick}>
              <img className="metamask-icon" alt="" src="/walletconnect.svg" />
              <div className="metamask1">Wallet Connect</div>
            </div>
            <div className="metamask" onClick={onCoinBaseContainerClick}>
              <img className="metamask-icon" alt="" src="/coinbase.svg" />
              <div className="metamask1">Coinbase</div>
            </div>
          </div>
        </div>
      </div>
      <FooterUI
        productIds="/logo4.svg"
        productDimensions="/discordlogo3.svg"
        productIds32x32="/youtubelogo2.svg"
        productIds20x20="/user2.svg"
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
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default ConnectWalletMobile;
