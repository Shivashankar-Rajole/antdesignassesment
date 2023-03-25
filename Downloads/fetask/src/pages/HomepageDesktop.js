import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TrendingCollectionContainer from "../components/TrendingCollectionContainer";
import TopCreatorsContainer from "../components/TopCreatorsContainer";
import ExploreNFTsContainer from "../components/ExploreNFTsContainer";
import SubscriptionContainer from "../components/SubscriptionContainer";
import FooterContainer from "../components/FooterContainer";
import "./HomepageDesktop.css";

const HomepageDesktop = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings-desktop");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-desktop");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account-desktop");
  }, [navigate]);

  const onPrimaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNumberOfAdditionalNFTsClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onAvatarPlaceholderIcon1Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onPrimaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder3Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNumberOfAdditionalNFTs1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onAvatarContainer3Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onPrimaryPhotoPlaceholder2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder4Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder5Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNumberOfAdditionalNFTs2Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onAvatarContainer4Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer5Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer6Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer7Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer8Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer9Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer10Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer11Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer12Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer13Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer14Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer15Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer16Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer2Click = useCallback(() => {
    navigate("/nft-page-desktop");
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

  const onButtonContainer5Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/create-account-desktop");
  }, [navigate]);

  const onHighlightedNFTContainerClick = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onCategoryCardContainerClick = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer1Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer2Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer3Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer4Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer5Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer6Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onCategoryCardContainer7Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onArtistCardContainer17Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  return (
    <div className="homepage-desktop">
      <Header
        productIds="/logo.svg"
        productDimensions="/rocketlaunch.svg"
        productIdsAndDimensions="/user.svg"
        onNavLogoClick={onNavLogoClick}
        onMarketplaceContainerClick={onMarketplaceContainerClick}
        onRankingsContainerClick={onRankingsContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
      />
      <div className="hero-section">
        <div className="hero-section-frame">
          <div className="hero-text-buttons">
            <div className="headline-subhead">
              <div className="discover-digital-art"></div>
              <div className="nft-marketplace-ui">
                NFT marketplace 
              </div>
            </div>
            <div className="button" onClick={onButtonContainerClick}>
             
              <div className="button1">Create NFT's</div>
            </div>  
            <div className="button" onClick={onButtonContainerClick}>
             
             <div className="button1">Explore NFT's</div>
           </div>         
          </div>
          <div
            className="highlighted-nft"
            onClick={onHighlightedNFTContainerClick}
          >
            <div className="artist-card">
              <div className="avatar">
                <div className="asset-12-2">
                  <img
                    className="avatar-placeholder-icon"
                    alt=""
                    src="/avatar-placeholder@2x.png"
                  />
                </div>
              </div>
              <div className="hours">
                <div className="dish-studio">Dish Studio</div>
                <div className="total-sales-parent">
                  <div className="total-sales">Total Sales:</div>
                  <div className="eth">34.53 ETH</div>
                </div>
              </div>
            </div>
            <img
              className="image-placeholder-icon"
              alt=""
              src="/image-placeholder@2x.png"
            />
            <div className="space-walking-parent">
              
            </div>
            <div className="frame-parent">
              <div className="frame-group">
                <div className="price-wrapper">
                  <div className="price">Price:</div>
                </div>
                <div className="eth-wrapper">
                  <div className="eth1">1.63 ETH</div>
                </div>
              </div>
              <div className="frame-container">
                <div className="release-date-wrapper">
                  <div className="release-date">Release Date:</div>
                </div>
                <div className="sep-2022-wrapper">
                  <div className="sep-2022">2 Sep 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrendingCollectionContainer />
      <TopCreatorsContainer />
      <div className="browse-categories">
        <div className="section-headline">
          <div className="browse-categories1">Marketplace</div>
        </div>
        <div className="category-cards-grid">
          <div className="category-cards-row">
            <div
              className="category-card"
              onClick={onCategoryCardContainerClick}
            >
              <div className="collection-name">
                <div className="dish-studio1">Trendings</div>
              </div>
            </div>
            <div
              className="category-card"
              onClick={onCategoryCardContainer1Click}
            >
            
              <div className="collection-name">
                <div className="dish-studio">Art</div>
              </div>
            </div>
            <div
              className="category-card"
              onClick={onCategoryCardContainer2Click}
            >
            
              <div className="collection-name">
                <div className="dish-studio">Sports</div>
              </div>
            </div>
            <div
              className="category-card"
              onClick={onCategoryCardContainer3Click}
            >
             
              <div className="collection-name">
                <div className="dish-studio">Music</div>
              </div>
            </div>
          </div>
          <div className="category-cards-row">
            <div
              className="category-card"
              onClick={onCategoryCardContainer4Click}
            >
            
              <div className="collection-name">
                <div className="dish-studio">Video</div>
              </div>
            </div>
            <div
              className="category-card"
              onClick={onCategoryCardContainer5Click}
            >
             
              <div className="collection-name">
                <div className="dish-studio">Utility</div>
              </div>
            </div>
            <div
              className="category-card"
              onClick={onCategoryCardContainer6Click}
            >
              
              <div className="collection-name">
                <div className="dish-studio">PhotoGraphy</div>
              </div>
            </div>
            <div
              className="category-card"
              onClick={onCategoryCardContainer7Click}
            >
             
              <div className="collection-name">
                <div className="dish-studio">Game</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreNFTsContainer />
      <div className="nft-highlight">
       
      </div>
      <div className="how-it-works">
        <div className="section-headline1">
          <div className="how-it-works1">How it works</div>
          <div className="find-out-how">Find out how to get started</div>
        </div>
        <div className="card-row">
          <div className="info-card">
            <img className="icon" alt="" src="/icon1.svg" />
            <div className="card-details">
              <div className="dish-studio">Buy & Sell your NFT's</div>
              
            </div>
          </div>
          <div className="info-card1">
            <img className="icon" alt="" src="/icon1.svg" />
            <div className="card-details">
              <div className="dish-studio">Discover</div>              
            </div>
          </div>
          <div className="info-card1">
            <img className="icon" alt="" src="/icon2.svg" />
            <div className="card-details">
              <div className="dish-studio"> Earning</div>              
            </div>
          </div>
        </div>
      </div>
      <SubscriptionContainer />
      <FooterContainer
        productIds="/logo1.svg"
        productDimensions="/discordlogo.svg"
        productIdsAndDimensions="/youtubelogo.svg"
        productIdsAndDimensionsTe="/twitterlogo.svg"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWallet1Click={onConnectAWallet1Click}
        onButtonContainer5Click={onButtonContainer5Click}
      />
    </div>
  );
};

export default HomepageDesktop;
