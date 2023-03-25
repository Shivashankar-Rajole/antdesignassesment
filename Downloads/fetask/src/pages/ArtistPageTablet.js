import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NFTCardRowContainer from "../components/NFTCardRowContainer";
import ContainerFooter from "../components/ContainerFooter";
import "./ArtistPageTablet.css";

const ArtistPageTablet = () => {
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
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-tablet");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-tablet");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-tablet");
  }, [navigate]);

  const onGlobeIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  return (
    <div className="artist-page-tablet">
      <div className="navigation9">
        <div className="nav-logo18" onClick={onNavLogo1Click}>
          <div className="nav-logo19">
            <img className="logo-icon9" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu9">
          <img className="burger-menu4" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="cover-profile-image1">
        <img
          className="image-placeholder-icon15"
          alt=""
          src="/image-placeholder56@2x.png"
        />
        <div className="profile-image1">
          <div className="avatar6">
            <div className="asset-12-26">
              <img
                className="avatar-placeholder-icon6"
                alt=""
                src="/avatar-placeholder51@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="artist-info3">
        <div className="artist-name-group">
          <div className="artist-name3">animakid</div>
          <div className="ctas1">
            <div className="button28">
              <img className="copy-icon1" alt="" src="/copy1.svg" />
              <div className="button29">0xc0E3...B79C</div>
            </div>
            <div className="button30">
              <img className="copy-icon1" alt="" src="/plus.svg" />
              <div className="button29">Follow</div>
            </div>
          </div>
          <div className="stats1">
            <div className="total-sale4">
              <b className="k6">{`250k+ `}</b>
              <div className="total-sale5">Volume</div>
            </div>
            <div className="total-sale4">
              <b className="k6">50k+</b>
              <div className="total-sale5">NFTs Sold</div>
            </div>
            <div className="total-sale4">
              <b className="k6">3000+</b>
              <div className="total-sale5">Followers</div>
            </div>
          </div>
          <div className="bio2">
            <div className="bio3">Bio</div>
            <div className="the-internets-friendliest1">
              The internet's friendliest designer kid.
            </div>
          </div>
          <div className="bio2">
            <div className="links1">Links</div>
            <div className="icons1">
              <img
                className="globe-icon5"
                alt=""
                src="/globe.svg"
                onClick={onGlobeIconClick}
              />
              <img
                className="globe-icon5"
                alt=""
                src="/discordlogo5.svg"
                onClick={onDiscordLogoIconClick}
              />
              <img
                className="globe-icon5"
                alt=""
                src="/youtubelogo3.svg"
                onClick={onYoutubeLogoIconClick}
              />
              <img
                className="globe-icon5"
                alt=""
                src="/twitterlogo3.svg"
                onClick={onTwitterLogoIconClick}
              />
              <img
                className="globe-icon5"
                alt=""
                src="/instagramlogo2.svg"
                onClick={onInstagramLogoIconClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="line-container">
        <div className="instance-inner" />
        <div className="tabs-wrapper3">
          <div className="tabs7">
            <div className="tab24">
              <div className="created24">Created</div>
              <div className="wrapper21">
                <div className="div26">302</div>
              </div>
            </div>
            <div className="tab25">
              <div className="created24">owned</div>
              <div className="wrapper22">
                <div className="div26">67</div>
              </div>
            </div>
            <div className="tab25">
              <div className="created24">Collection</div>
              <div className="wrapper22">
                <div className="div26">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nft-cards-section3">
        <NFTCardRowContainer
          imageIds="/image-placeholder57@2x.png"
          imageTitles="Distant Galaxy"
          imageDimensions="/avatar-placeholder1@2x.png"
          imageCaptions="Animakid"
          imageUrls="/image-placeholder58@2x.png"
          imageRobotNames="Life On Edena"
          imageRobotIds="/avatar-placeholder1@2x.png"
          imageRobotMottos="Animakid"
          highestBidWidth="690px"
          propBorderRadius="120px"
          onNFTCardContainerClick={onNFTCardContainerClick}
          onNFTCardContainer1Click={onNFTCardContainer1Click}
        />
        <NFTCardRowContainer
          imageIds="/image-placeholder59@2x.png"
          imageTitles="AstroFiction"
          imageDimensions="/avatar-placeholder1@2x.png"
          imageCaptions="Animakid"
          imageUrls="/image-placeholder60@2x.png"
          imageRobotNames="CryptoCity"
          imageRobotIds="/avatar-placeholder1@2x.png"
          imageRobotMottos="Animakid"
          highestBidWidth="690px"
          propBorderRadius="120px"
          onNFTCardContainerClick={onNFTCardContainer2Click}
          onNFTCardContainer1Click={onNFTCardContainer3Click}
        />
        <NFTCardRowContainer
          imageIds="/image-placeholder61@2x.png"
          imageTitles="ColorfulDog 0524"
          imageDimensions="/avatar-placeholder1@2x.png"
          imageCaptions="Animakid"
          imageUrls="/image-placeholder62@2x.png"
          imageRobotNames="Space Tales"
          imageRobotIds="/avatar-placeholder1@2x.png"
          imageRobotMottos="Animakid"
          highestBidWidth="690px"
          propBorderRadius="120px"
          onNFTCardContainerClick={onNFTCardContainer4Click}
          onNFTCardContainer1Click={onNFTCardContainer5Click}
        />
      </div>
      <ContainerFooter
        productIds="/logo.svg"
        productDimensions="/discordlogo4.svg"
        productIdsAndDimensions="/youtubelogo1.svg"
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
        onConnectAWalletClick={onConnectAWalletClick}
        onButtonContainerClick={onButtonContainer2Click}
      />
    </div>
  );
};

export default ArtistPageTablet;
