import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTCardRowContainer from "../components/NFTCardRowContainer";
import ContainerFooter from "../components/ContainerFooter";
import "./MarketplaceTablet.css";

const MarketplaceTablet = () => {
  const navigate = useNavigate();

  const onNFTCardContainerClick = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer1Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer2Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer3Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer4Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer5Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer6Click = useCallback(() => {
    navigate("/nft-page-tablet");
  }, [navigate]);

  const onNFTCardContainer7Click = useCallback(() => {
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

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-tablet");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-tablet");
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
    <div className="marketplace-tablet">
      <div className="navigation3">
        <div className="nav-logo6" onClick={onNavLogo1Click}>
          <div className="nav-logo7">
            <img className="logo-icon3" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu3">
          <img className="burger-menu1" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="headline-subhead9">
        <div className="headline-subhead10">
          <div className="browse-marketplace-group">
            <div className="browse-marketplace1">Browse Marketplace</div>
            <div className="browse-through-more1">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </div>
          </div>
          <div className="table-header3">
            <div className="table-headers3">
              <div className="rank-artist3">
                <div className="search-your-favourite1">
                  Search your favourite NFTs
                </div>
              </div>
              <img className="burger-menu1" alt="" src="/magnifyingglass.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="marketplace-section1">
        <div className="line-parent">
          <div className="instance-child" />
          <div className="tabs-frame">
            <div className="tabs4">
              <div className="tab15">
                <div className="created15">NFTs</div>
                <div className="wrapper12">
                  <div className="div17">302</div>
                </div>
              </div>
              <div className="tab16">
                <div className="created15">Collections</div>
                <div className="wrapper13">
                  <div className="div17">67</div>
                </div>
              </div>
              <div className="tab17">
                <div className="created15">Collection</div>
                <div className="wrapper13">
                  <div className="div17">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft-cards-section1">
          <NFTCardRowContainer
            imageIds="/image-placeholder17@2x.png"
            imageTitles="Magic Mushroom 0324"
            imageDimensions="/avatar-placeholder3@2x.png"
            imageCaptions="Shroomie"
            imageUrls="/image-placeholder18@2x.png"
            imageRobotNames="Happy Robot 032"
            imageRobotIds="/avatar-placeholder4@2x.png"
            imageRobotMottos="BeKind2Robots"
            onNFTCardContainerClick={onNFTCardContainerClick}
            onNFTCardContainer1Click={onNFTCardContainer1Click}
          />
          <NFTCardRowContainer
            imageIds="/image-placeholder19@2x.png"
            imageTitles="Happy Robot 024"
            imageDimensions="/avatar-placeholder4@2x.png"
            imageCaptions="BeKind2Robots"
            imageUrls="/image-placeholder20@2x.png"
            imageRobotNames="Designer Bear"
            imageRobotIds="/avatar-placeholder2@2x.png"
            imageRobotMottos="Mr Fox"
            highestBidWidth="680px"
            propBorderRadius="100px"
            onNFTCardContainerClick={onNFTCardContainer2Click}
            onNFTCardContainer1Click={onNFTCardContainer3Click}
          />
          <NFTCardRowContainer
            imageIds="/image-placeholder21@2x.png"
            imageTitles="Colorful Dog 0345"
            imageDimensions="/avatar-placeholder19@2x.png"
            imageCaptions="Keepitreal"
            imageUrls="/image-placeholder22@2x.png"
            imageRobotNames="Dancing Robot 0323"
            imageRobotIds="/avatar-placeholder22@2x.png"
            imageRobotMottos="Robotica"
            highestBidWidth="680px"
            propBorderRadius="120px"
            onNFTCardContainerClick={onNFTCardContainer4Click}
            onNFTCardContainer1Click={onNFTCardContainer5Click}
          />
          <NFTCardRowContainer
            imageIds="/image-placeholder23@2x.png"
            imageTitles="Cherry Blossom Girl 035"
            imageDimensions="/avatar-placeholder17@2x.png"
            imageCaptions="MoonDancer"
            imageUrls="/image-placeholder24@2x.png"
            imageRobotNames="Space Travel"
            imageRobotIds="/avatar-placeholder18@2x.png"
            imageRobotMottos="NebulaKid"
            highestBidWidth="680px"
            propBorderRadius="120px"
            onNFTCardContainerClick={onNFTCardContainer6Click}
            onNFTCardContainer1Click={onNFTCardContainer7Click}
          />
        </div>
      </div>
      <ContainerFooter
        productIds="/logo.svg"
        productDimensions="/discordlogo4.svg"
        productIdsAndDimensions="/youtubelogo1.svg"
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

export default MarketplaceTablet;
