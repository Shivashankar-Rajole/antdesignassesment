import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TrendingCollectionBox from "../components/TrendingCollectionBox";
import TopArtistsContainer from "../components/TopArtistsContainer";
import FindNFTsContainer from "../components/FindNFTsContainer";
import ContainerFooter from "../components/ContainerFooter";
import "./HomepageTablet.css";

const HomepageTablet = () => {
  const navigate = useNavigate();

  const onPrimaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNumberOfAdditionalNFTsClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onAvatarContainer2Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onPrimaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder2Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder3Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNumberOfAdditionalNFTs1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onAvatarContainer3Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer4Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer5Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer6Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer7Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer8Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer9Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-tablet");
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
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-tablet");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-tablet");
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

  const onButtonContainerClick = useCallback(() => {
    navigate("/create-account-tablet");
  }, [navigate]);

  const onHighlightedNFTContainerClick = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="homepage-tablet">
      <div className="navigation13">
        <div className="nav-logo26" onClick={onNavLogo1Click}>
          <div className="nav-logo27">
            <img className="logo-icon13" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu13">
          <img className="burger-menu6" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="hero-section1">
        <div className="hero-section-frame1">
          <div className="hero-text-buttons1">
            <div className="headline-subhead26">
              <div className="discover-digital-art1">{`Discover digital art & Collect NFTs`}</div>
              <div className="nft-marketplace-ui1">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </div>
            </div>
            <div className="button40" onClick={onButtonContainerClick}>
              <img
                className="rocketlaunch-icon4"
                alt=""
                src="/rocketlaunch1.svg"
              />
              <div className="button41">Get Started</div>
            </div>
            <div className="additional-info4">
              <div className="total-sale6">
                <b className="k9">{`240k+ `}</b>
                <div className="total-sale7">Total Sale</div>
              </div>
              <div className="total-sale6">
                <b className="k9">100k+</b>
                <div className="total-sale7">Auctions</div>
              </div>
              <div className="total-sale6">
                <b className="k9">240k+</b>
                <div className="total-sale7">Artists</div>
              </div>
            </div>
          </div>
          <div
            className="highlighted-nft1"
            onClick={onHighlightedNFTContainerClick}
          >
            <div className="artist-card5">
              <div className="avatar8">
                <div className="asset-12-28">
                  <img
                    className="avatar-placeholder-icon8"
                    alt=""
                    src="/avatar-placeholder@2x.png"
                  />
                </div>
              </div>
              <div className="additional-info5">
                <div className="dish-studio5">Dish Studio</div>
                <div className="total-sales-group">
                  <div className="total-sales1">Total Sales:</div>
                  <div className="eth2">34.53 ETH</div>
                </div>
              </div>
            </div>
            <img
              className="image-placeholder-icon20"
              alt=""
              src="/image-placeholder78@2x.png"
            />
            <div className="space-walking-group">
              <div className="dish-studio5">Space Walking</div>
              <div className="artist-card6">
                <div className="avatar8">
                  <div className="burger-menu6">
                    <img
                      className="avatar-placeholder-icon9"
                      alt=""
                      src="/avatar-placeholder1@2x.png"
                    />
                  </div>
                </div>
                <div className="total-sales1">Animakid</div>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="frame-parent2">
                <div className="price-container">
                  <div className="price1">Price:</div>
                </div>
                <div className="eth-container">
                  <div className="eth3">1.63 ETH</div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="release-date-container">
                  <div className="release-date1">Release Date:</div>
                </div>
                <div className="sep-2022-container">
                  <div className="sep-20221">2 Sep 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrendingCollectionBox />
      <TopArtistsContainer />
      <div className="browse-categories2">
        <div className="section-headline3">
          <div className="dish-studio5">Browse Categories</div>
        </div>
        <div className="category-cards-grid1">
          <div className="category-cards-row2">
            <div className="category-card8">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder79@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img
                    className="paintbrush-icon1"
                    alt=""
                    src="/paintbrush1.svg"
                  />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Art</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder80@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img
                    className="paintbrush-icon1"
                    alt=""
                    src="/swatches2.svg"
                  />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Collectibles</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder81@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img
                    className="paintbrush-icon1"
                    alt=""
                    src="/musicnotes1.svg"
                  />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Music</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder82@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img className="paintbrush-icon1" alt="" src="/camera2.svg" />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Photography</div>
              </div>
            </div>
          </div>
          <div className="category-cards-row3">
            <div className="category-card12">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder83@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img
                    className="paintbrush-icon1"
                    alt=""
                    src="/videocamera1.svg"
                  />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Video</div>
              </div>
            </div>
            <div className="category-card12">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder84@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img
                    className="paintbrush-icon1"
                    alt=""
                    src="/magicwand2.svg"
                  />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Utility</div>
              </div>
            </div>
            <div className="category-card12">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder85@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img
                    className="paintbrush-icon1"
                    alt=""
                    src="/basketball2.svg"
                  />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Sport</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon9">
                <div className="image-placeholder8">
                  <img
                    className="image-placeholder-icon21"
                    alt=""
                    src="/image-placeholder86@2x.png"
                  />
                </div>
                <div className="category-icon8">
                  <img className="paintbrush-icon1" alt="" src="/planet2.svg" />
                </div>
              </div>
              <div className="category-name8">
                <div className="category-name9">Virtual Worlds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FindNFTsContainer />
      <div className="nft-highlight1">
        <div className="nft-info5">
          <div className="nft-artst-name-button-group">
            <div className="nft-artst-name-button1">
              <div className="artist-card7">
                <div className="avatar8">
                  <div className="burger-menu6">
                    <img
                      className="avatar-placeholder-icon9"
                      alt=""
                      src="/avatar-placeholder3@2x.png"
                    />
                  </div>
                </div>
                <div className="dish-studio7">Shroomie</div>
              </div>
              <div className="magic-mashrooms1">Magic Mashrooms</div>
              <div className="button42" onClick={onButtonContainer3Click}>
                <img className="rocketlaunch-icon4" alt="" src="/eye.svg" />
                <div className="button41">See NFT</div>
              </div>
            </div>
            <div className="auction-timer3">
              <div className="auction-ends-in3">Auction ends in:</div>
              <div className="timer3">
                <div className="additional-info5">
                  <b className="b15">59</b>
                  <div className="hours7">Hours</div>
                </div>
                <b className="b16">:</b>
                <div className="additional-info5">
                  <b className="b15">59</b>
                  <div className="hours7">Minutes</div>
                </div>
                <b className="b16">:</b>
                <div className="additional-info5">
                  <b className="b15">59</b>
                  <div className="hours7">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works4">
        <div className="section-headline4">
          <div className="dish-studio5">How it works</div>
          <div className="nft-marketplace-ui1">Find out how to get started</div>
        </div>
        <div className="card-row2">
          <div className="info-card6">
            <img className="icon6" alt="" src="/icon6.svg" />
            <div className="card-details6">
              <div className="category-name9">Setup Your wallet</div>
              <div className="set-up-your6">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </div>
            </div>
          </div>
          <div className="info-card6">
            <img className="icon6" alt="" src="/icon7.svg" />
            <div className="card-details6">
              <div className="category-name9">Create Collection</div>
              <div className="set-up-your6">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </div>
            </div>
          </div>
          <div className="info-card6">
            <img className="icon8" alt="" src="/icon8.svg" />
            <div className="card-details6">
              <div className="category-name9">Start Earning</div>
              <div className="set-up-your6">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-widget2">
        <div className="subscribe-widget3">
          <img className="photo-icon17" alt="" src="/photo2@2x.png" />
          <div className="headline-subhead-group">
            <div className="headline-subhead27">
              <div className="dish-studio5">Join our weekly digest</div>
              <div className="nft-marketplace-ui1">{`Get exclusive promotions & updates straight to your inbox.`}</div>
            </div>
            <div className="subscribe-widgetmobile1">
              <div className="type-form13">
                <img className="user-icon4" alt="" src="/user2.svg" />
                <div className="total-sales1">Enter Your Email Address</div>
                <img className="user-icon4" alt="" src="/eyeslash.svg" />
              </div>
              <div className="button44" onClick={onButtonContainer4Click}>
                <img
                  className="rocketlaunch-icon4"
                  alt=""
                  src="/envelopesimple3.svg"
                />
                <div className="button41">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerFooter
        productIds="/logo4.svg"
        productDimensions="/discordlogo3.svg"
        productIdsAndDimensions="/youtubelogo2.svg"
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

export default HomepageTablet;
