import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RankingsContainer from "../components/RankingsContainer";
import FooterUI from "../components/FooterUI";
import "./RankingsMobile.css";

const RankingsMobile = () => {
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

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-mobile");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-mobile");
  }, [navigate]);

  return (
    <div className="rankings-mobile">
      <div className="navigation">
        <div className="nav-logo" onClick={onNavLogo1Click}>
          <div className="nav-logo1">
            <img className="logo-icon" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu">
          <img className="burger-menu-icon" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="headline-subhead1">
        <div className="headline-subhead2">
          <div className="headline">
            <div className="top-creators">Top Creators</div>
          </div>
          <div className="subhead">
            <div className="check-out-top">
              Check out top ranking NFT artists on the NFT Marketplace.
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bar">
        <div className="tabs">
          <div className="tab">
            <div className="created">1d</div>
            <div className="wrapper">
              <div className="div">302</div>
            </div>
          </div>
          <div className="tab1">
            <div className="created">7d</div>
            <div className="container">
              <div className="div">67</div>
            </div>
          </div>
          <div className="tab1">
            <div className="created">30d</div>
            <div className="container">
              <div className="div">67</div>
            </div>
          </div>
          <div className="tab1">
            <div className="created">All Time</div>
            <div className="container">
              <div className="div">67</div>
            </div>
          </div>
        </div>
      </div>
      <RankingsContainer />
      <FooterUI
        productIds="/logo.svg"
        productDimensions="/discordlogo1.svg"
        productIds32x32="/youtubelogo1.svg"
        productIds20x20="/user1.svg"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default RankingsMobile;
