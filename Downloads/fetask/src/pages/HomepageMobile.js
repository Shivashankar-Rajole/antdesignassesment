import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DigitalArtContainer from "../components/DigitalArtContainer";
import TrendingCollectionWrapper from "../components/TrendingCollectionWrapper";
import TopRatedArtistsContainer from "../components/TopRatedArtistsContainer";
import CategoryBrowser from "../components/CategoryBrowser";
import DiscoverNFTsContainer from "../components/DiscoverNFTsContainer";
import ShroomieContainer from "../components/ShroomieContainer";
import FooterUI from "../components/FooterUI";
import "./HomepageMobile.css";

const HomepageMobile = () => {
  const navigate = useNavigate();

  const onArtistCardContainer3Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer4Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer5Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer6Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer7Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onSectionHeadlineButton1Click = useCallback(() => {
    navigate("/rankings-mobile");
  }, [navigate]);

  const onCategoryCardContainerClick = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer1Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer2Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer3Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer4Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer5Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer6Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer7Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNFTCardContainer2Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onSectionHeadlineButton3Click = useCallback(() => {
    navigate("/marketplace-mobile");
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
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-mobile");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-mobile");
  }, [navigate]);

  const onButtonContainer5Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer4Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="homepage-mobile">
      <div className="navigation12">
        <div className="nav-logo24" onClick={onNavLogo1Click}>
          <div className="nav-logo25">
            <img className="logo-icon12" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu12">
          <img className="burger-menu-icon6" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <DigitalArtContainer />
      <TrendingCollectionWrapper />
      <TopRatedArtistsContainer />
      <CategoryBrowser />
      <DiscoverNFTsContainer />
      <ShroomieContainer />
      <div className="how-it-works2">
        <div className="section-headline2">
          <div className="join-our-weekly">How it works</div>
          <div className="get-exclusive-promotions">
            Find out how to get started
          </div>
        </div>
        <div className="card-row1">
          <div className="info-card3">
            <img className="icon3" alt="" src="/icon3.svg" />
            <div className="card-details3">
              <div className="setup-your-wallet3">Setup Your wallet</div>
              <div className="set-up-your3">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </div>
            </div>
          </div>
          <div className="info-card3">
            <img className="icon3" alt="" src="/icon4.svg" />
            <div className="card-details3">
              <div className="setup-your-wallet3">Create Collection</div>
              <div className="set-up-your3">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </div>
            </div>
          </div>
          <div className="info-card3">
            <img className="icon5" alt="" src="/icon5.svg" />
            <div className="card-details3">
              <div className="setup-your-wallet3">Start Earning</div>
              <div className="set-up-your3">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-widget">
        <div className="subscribe-widget1">
          <img className="photo-icon8" alt="" src="/photo1@2x.png" />
          <div className="headline-subhead-parent">
            <div className="headline-subhead25">
              <div className="join-our-weekly">Join our weekly digest</div>
              <div className="get-exclusive-promotions">{`Get exclusive promotions & updates straight to your inbox.`}</div>
            </div>
            <div className="subscribe-widgetmobile">
              <div className="type-form12">
                <img className="user-icon3" alt="" src="/user2.svg" />
                <div className="enter-your-email">Enter Your Email Address</div>
                <img className="user-icon3" alt="" src="/eyeslash.svg" />
              </div>
              <div className="button38" onClick={onButtonContainer4Click}>
                <img
                  className="envelopesimple-icon3"
                  alt=""
                  src="/envelopesimple.svg"
                />
                <div className="button39">Subscribe</div>
              </div>
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
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onButtonContainerClick={onButtonContainer5Click}
      />
    </div>
  );
};

export default HomepageMobile;
