import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArtistInfoContainer from "../components/ArtistInfoContainer";
import ArtistNFTsContainer from "../components/ArtistNFTsContainer";
import FooterUI from "../components/FooterUI";
import "./NFTPageMobile.css";

const NFTPageMobile = () => {
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

  const onButtonContainer6Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-mobile");
  }, [navigate]);

  return (
    <div className="nft-page-mobile">
      <div className="navigation6">
        <div className="nav-logo12" onClick={onNavLogo1Click}>
          <div className="nav-logo13">
            <img className="logo-icon6" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu6">
          <img className="burger-menu-icon3" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <img
        className="image-placeholder-icon11"
        alt=""
        src="/image-placeholder40@2x.png"
      />
      <ArtistInfoContainer />
      <ArtistNFTsContainer />
      <FooterUI
        productIds="/logo4.svg"
        productDimensions="/discordlogo3.svg"
        productIds32x32="/youtubelogo2.svg"
        productIds20x20="/user2.svg"
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
        onButtonContainerClick={onButtonContainer6Click}
      />
    </div>
  );
};

export default NFTPageMobile;
