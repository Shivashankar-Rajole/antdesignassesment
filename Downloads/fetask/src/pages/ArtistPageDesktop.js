import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AnimakidContainer from "../components/AnimakidContainer";
import NFTCardsRowContainer from "../components/NFTCardsRowContainer";
import FooterContainer from "../components/FooterContainer";
import "./ArtistPageDesktop.css";

const ArtistPageDesktop = () => {
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

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account-desktop");
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

  const onNFTCardContainer3Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer4Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer5Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer6Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer7Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer8Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onDiscordLogoIcon1Click = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIcon1Click = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIcon1Click = useCallback(() => {
    window.open("https://twitter.com/animaapp?lang=en");
  }, []);

  const onInstagramLogoIcon1Click = useCallback(() => {
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

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="artist-page-desktop">
      <Header
        productIds="/logo.svg"
        productDimensions="/rocketlaunch1.svg"
        productIdsAndDimensions="/user.svg"
        rocketLaunchCursor="pointer"
        rocketLaunchCursor1="pointer"
        userCursor="pointer"
        onNavLogoClick={onNavLogoClick}
        onMarketplaceContainerClick={onMarketplaceContainerClick}
        onRankingsContainerClick={onRankingsContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
      />
      <div className="cover-profile-image2">
        <img
          className="image-placeholder-icon16"
          alt=""
          src="/image-placeholder63@2x.png"
        />
        <div className="profile-image2">
          <div className="avatar7">
            <div className="asset-12-27">
              <img
                className="avatar-placeholder-icon7"
                alt=""
                src="/avatar-placeholder51@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <AnimakidContainer />
      <div className="line-parent1">
        <div className="line-div" />
        <div className="tabs-wrapper4">
          <div className="tabs8">
            <div className="tab27">
              <div className="created27">Created</div>
              <div className="wrapper24">
                <div className="div29">302</div>
              </div>
            </div>
            <div className="tab28">
              <div className="created27">owned</div>
              <div className="wrapper25">
                <div className="div29">67</div>
              </div>
            </div>
            <div className="tab28">
              <div className="created27">Collection</div>
              <div className="wrapper25">
                <div className="div29">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nft-cards-section4">
        <NFTCardsRowContainer
          imageTitles="/image-placeholder57@2x.png"
          galaxyMushroomTitles="Distant Galaxy"
          smallImageTitles="/avatar-placeholder1@2x.png"
          largeImageTitles="Animakid"
          largeImageDescriptions="/image-placeholder58@2x.png"
          largeImageTitles2="Life On Edena"
          smallImageDescriptions="/avatar-placeholder1@2x.png"
          nebulaKidRobotTitles="Animakid"
          largeImageUrls="/image-placeholder59@2x.png"
          astroFictionRobotTitles="AstroFiction"
          smallImageUrls="/avatar-placeholder1@2x.png"
          spaceRobotTitles="Animakid"
          propBackgroundColor="#2b2b2b"
          propCursor="pointer"
          propBorderRadius="120px"
          propBackgroundColor1="#2b2b2b"
          propCursor1="pointer"
          propBackgroundColor2="#2b2b2b"
          propCursor2="pointer"
          onNFTCardContainerClick={onNFTCardContainerClick}
          onNFTCardContainer1Click={onNFTCardContainer1Click}
          onNFTCardContainer2Click={onNFTCardContainer2Click}
        />
        <NFTCardsRowContainer
          imageTitles="/image-placeholder60@2x.png"
          galaxyMushroomTitles="CryptoCity"
          smallImageTitles="/avatar-placeholder1@2x.png"
          largeImageTitles="Animakid"
          largeImageDescriptions="/image-placeholder61@2x.png"
          largeImageTitles2="ColorfulDog 0524"
          smallImageDescriptions="/avatar-placeholder1@2x.png"
          nebulaKidRobotTitles="Animakid"
          largeImageUrls="/image-placeholder62@2x.png"
          astroFictionRobotTitles="Space Tales"
          smallImageUrls="/avatar-placeholder1@2x.png"
          spaceRobotTitles="Animakid"
          propBackgroundColor="#2b2b2b"
          propCursor="pointer"
          propBorderRadius="120px"
          propBackgroundColor1="#2b2b2b"
          propCursor1="pointer"
          propBackgroundColor2="#2b2b2b"
          propCursor2="pointer"
          onNFTCardContainerClick={onNFTCardContainer3Click}
          onNFTCardContainer1Click={onNFTCardContainer4Click}
          onNFTCardContainer2Click={onNFTCardContainer5Click}
        />
        <NFTCardsRowContainer
          imageTitles="/image-placeholder64@2x.png"
          galaxyMushroomTitles="Cherry Blossom Girl 037"
          smallImageTitles="/avatar-placeholder1@2x.png"
          largeImageTitles="Animakid"
          largeImageDescriptions="/image-placeholder50@2x.png"
          largeImageTitles2="Dancing Robots 0987"
          smallImageDescriptions="/avatar-placeholder1@2x.png"
          nebulaKidRobotTitles="Animakid"
          largeImageUrls="/image-placeholder65@2x.png"
          astroFictionRobotTitles="IceCream Ape "
          smallImageUrls="/avatar-placeholder1@2x.png"
          spaceRobotTitles="Animakid"
          propBackgroundColor="#2b2b2b"
          propCursor="pointer"
          propBorderRadius="120px"
          propBackgroundColor1="#2b2b2b"
          propCursor1="pointer"
          propBackgroundColor2="#2b2b2b"
          propCursor2="pointer"
          onNFTCardContainerClick={onNFTCardContainer6Click}
          onNFTCardContainer1Click={onNFTCardContainer7Click}
          onNFTCardContainer2Click={onNFTCardContainer8Click}
        />
      </div>
      <FooterContainer
        productIds="/logo3.svg"
        productDimensions="/discordlogo2.svg"
        productIdsAndDimensions="/youtubelogo.svg"
        productIdsAndDimensionsTe="/twitterlogo2.svg"
        propBorderTop="2px solid var(--background)"
        propCursor="pointer"
        propCursor1="pointer"
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIcon1Click}
        onYoutubeLogoIconClick={onYoutubeLogoIcon1Click}
        onTwitterLogoIconClick={onTwitterLogoIcon1Click}
        onInstagramLogoIconClick={onInstagramLogoIcon1Click}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWallet1Click={onConnectAWallet1Click}
        onButtonContainer5Click={onButtonContainer2Click}
      />
    </div>
  );
};

export default ArtistPageDesktop;
