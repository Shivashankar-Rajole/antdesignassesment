import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import NFTCardsRowContainer from "../components/NFTCardsRowContainer";
import FooterContainer from "../components/FooterContainer";
import "./MarketplaceDesktop.css";

const MarketplaceDesktop = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
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

  const onNFTCardContainer9Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer10Click = useCallback(() => {
    navigate("/nft-page-desktop");
  }, [navigate]);

  const onNFTCardContainer11Click = useCallback(() => {
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

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-desktop");
  }, [navigate]);

  const onConnectAWallet1Click = useCallback(() => {
    navigate("/connect-wallet-desktop");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="marketplace-desktop">
      <Header
        productIds="/logo.svg"
        productDimensions="/rocketlaunch1.svg"
        productIdsAndDimensions="/user.svg"
        rocketLaunchCursor="unset"
        rocketLaunchCursor1="pointer"
        userCursor="pointer"
        onNavLogoClick={onNavLogoClick}
        onRankingsContainerClick={onRankingsContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
      />
      <div className="headline-subhead11">
        <div className="headline-subhead12">
          <div className="browse-marketplace-container">
            <div className="browse-marketplace2">Browse Marketplace</div>
            <div className="browse-through-more2">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </div>
          </div>
          <div className="table-header4">
            <div className="table-headers4">
              <div className="rank-artist4">
                <div className="search-your-favourite2">
                  Search your favourite NFTs
                </div>
              </div>
              <img
                className="magnifyingglass-icon2"
                alt=""
                src="/magnifyingglass.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="marketplace-section2">
        <div className="line-group">
          <div className="instance-item" />
          <div className="tabs-wrapper1">
            <div className="tabs5">
              <div className="tab18">
                <div className="created18">NFTs</div>
                <div className="wrapper15">
                  <div className="div20">302</div>
                </div>
              </div>
              <div className="tab19">
                <div className="created18">Collections</div>
                <div className="wrapper16">
                  <div className="div20">67</div>
                </div>
              </div>
              <div className="tab20">
                <div className="created18">Collection</div>
                <div className="wrapper16">
                  <div className="div20">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft-cards-section2">
          <NFTCardsRowContainer
            imageTitles="/image-placeholder25@2x.png"
            galaxyMushroomTitles="Magic Mushroom 0325"
            smallImageTitles="/avatar-placeholder3@2x.png"
            largeImageTitles="Shroomie"
            largeImageDescriptions="/image-placeholder26@2x.png"
            largeImageTitles2="Happy Robot 032"
            smallImageDescriptions="/avatar-placeholder4@2x.png"
            nebulaKidRobotTitles="BeKind2Robots"
            largeImageUrls="/image-placeholder27@2x.png"
            astroFictionRobotTitles="Happy Robot 024"
            smallImageUrls="/avatar-placeholder4@2x.png"
            spaceRobotTitles="BeKind2Robots"
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
            imageTitles="/image-placeholder28@2x.png"
            galaxyMushroomTitles="Designer Bear"
            smallImageTitles="/avatar-placeholder2@2x.png"
            largeImageTitles="Mr Fox"
            largeImageDescriptions="/image-placeholder29@2x.png"
            largeImageTitles2="Colorful Dog 0356"
            smallImageDescriptions="/avatar-placeholder19@2x.png"
            nebulaKidRobotTitles="Keepitreal"
            largeImageUrls="/image-placeholder30@2x.png"
            astroFictionRobotTitles="Dancing Robot 0312"
            smallImageUrls="/avatar-placeholder22@2x.png"
            spaceRobotTitles="Robotica"
            propBackgroundColor="#2b2b2b"
            propCursor="pointer"
            propBorderRadius="100px"
            propBackgroundColor1="#2b2b2b"
            propCursor1="pointer"
            propBackgroundColor2="#2b2b2b"
            propCursor2="pointer"
            onNFTCardContainerClick={onNFTCardContainer3Click}
            onNFTCardContainer1Click={onNFTCardContainer4Click}
            onNFTCardContainer2Click={onNFTCardContainer5Click}
          />
          <NFTCardsRowContainer
            imageTitles="/image-placeholder31@2x.png"
            galaxyMushroomTitles="Cherry Blossom Girl 035"
            smallImageTitles="/avatar-placeholder17@2x.png"
            largeImageTitles="MoonDancer"
            largeImageDescriptions="/image-placeholder32@2x.png"
            largeImageTitles2="Space Travel"
            smallImageDescriptions="/avatar-placeholder18@2x.png"
            nebulaKidRobotTitles="NebulaKid"
            largeImageUrls="/image-placeholder33@2x.png"
            astroFictionRobotTitles="Sunset Dimension"
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
          <NFTCardsRowContainer
            imageTitles="/image-placeholder34@2x.png"
            galaxyMushroomTitles="Desert Walk"
            smallImageTitles="/avatar-placeholder47@2x.png"
            largeImageTitles="Catch 22"
            largeImageDescriptions="/image-placeholder35@2x.png"
            largeImageTitles2="IceCream Ape 0324"
            smallImageDescriptions="/avatar-placeholder48@2x.png"
            nebulaKidRobotTitles="Ice Ape Club"
            largeImageUrls="/image-placeholder36@2x.png"
            astroFictionRobotTitles="Colorful Dog 0344"
            smallImageUrls="/avatar-placeholder28@2x.png"
            spaceRobotTitles="PuppyPower"
            propBackgroundColor="#2b2b2b"
            propCursor="pointer"
            propBorderRadius="120px"
            propBackgroundColor1="#2b2b2b"
            propCursor1="pointer"
            propBackgroundColor2="#2b2b2b"
            propCursor2="pointer"
            onNFTCardContainerClick={onNFTCardContainer9Click}
            onNFTCardContainer1Click={onNFTCardContainer10Click}
            onNFTCardContainer2Click={onNFTCardContainer11Click}
          />
        </div>
      </div>
      <FooterContainer
        productIds="/logo3.svg"
        productDimensions="/discordlogo2.svg"
        productIdsAndDimensions="/youtubelogo.svg"
        productIdsAndDimensionsTe="/twitterlogo2.svg"
        propBorderTop="2px solid var(--background)"
        propCursor="unset"
        propCursor1="pointer"
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWallet1Click={onConnectAWallet1Click}
        onButtonContainer5Click={onButtonContainerClick}
      />
    </div>
  );
};

export default MarketplaceDesktop;
