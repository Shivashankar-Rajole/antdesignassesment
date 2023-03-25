import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MushroomCardContainer from "../components/MushroomCardContainer";
import FooterUI from "../components/FooterUI";
import "./MarketplaceMobile.css";

const MarketplaceMobile = () => {
  const navigate = useNavigate();

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer2Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer3Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer4Click = useCallback(() => {
    navigate("/nft-page-mobile");
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

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-mobile");
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
    <div className="marketplace-mobile">
      <div className="navigation2">
        <div className="nav-logo4" onClick={onNavLogo1Click}>
          <div className="nav-logo5">
            <img className="logo-icon2" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu2">
          <img className="magnifyingglass-icon" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="headline-subhead7">
        <div className="headline-subhead8">
          <div className="browse-marketplace-parent">
            <div className="browse-marketplace">Browse Marketplace</div>
            <div className="browse-through-more">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </div>
          </div>
          <div className="table-header2">
            <div className="table-headers2">
              <div className="rank-artist2">
                <div className="search-your-favourite">
                  Search your favourite NFTs
                </div>
              </div>
              <img
                className="magnifyingglass-icon"
                alt=""
                src="/magnifyingglass.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="marketplace-section">
        <div className="tab-bar2">
          <div className="tab-bar-child" />
          <div className="tabs-container">
            <div className="tabs3">
              <div className="tab12">
                <div className="created12">NFTs</div>
                <div className="wrapper9">
                  <div className="div14">302</div>
                </div>
              </div>
              <div className="tab13">
                <div className="created12">Owned</div>
                <div className="wrapper10">
                  <div className="div14">67</div>
                </div>
              </div>
              <div className="tab14">
                <div className="created12">Collections</div>
                <div className="wrapper10">
                  <div className="div14">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft-cards-section">
          <MushroomCardContainer />
        </div>
      </div>
      <FooterUI
        productIds="/logo.svg"
        productDimensions="/discordlogo3.svg"
        productIds32x32="/youtubelogo2.svg"
        productIds20x20="/user2.svg"
        propBorderTop="2px solid var(--background)"
        propCursor="unset"
        propCursor1="pointer"
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default MarketplaceMobile;
