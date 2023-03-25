import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WalletContainer from "../components/WalletContainer";
import ContainerFooter from "../components/ContainerFooter";
import "./ConnectWalletTablet.css";

const ConnectWalletTablet = () => {
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

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-tablet");
  }, [navigate]);

  return (
    <div className="connect-wallet-tablet">
      <div className="navigation5">
        <div className="nav-logo10" onClick={onNavLogo1Click}>
          <div className="nav-logo11">
            <img className="logo-icon5" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu5">
          <img className="burger-menu2" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <WalletContainer />
      <ContainerFooter
        productIds="/logo4.svg"
        productDimensions="/discordlogo3.svg"
        productIdsAndDimensions="/youtubelogo2.svg"
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

export default ConnectWalletTablet;
