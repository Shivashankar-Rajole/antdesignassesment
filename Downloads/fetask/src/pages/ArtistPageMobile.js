import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DistantGalaxyContainer from "../components/DistantGalaxyContainer";
import FooterUI from "../components/FooterUI";
import "./ArtistPageMobile.css";

const ArtistPageMobile = () => {
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
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-mobile");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-mobile");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-mobile");
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
    <div className="artist-page-mobile">
      <div className="navigation8">
        <div className="nav-logo16" onClick={onNavLogo1Click}>
          <div className="nav-logo17">
            <img className="logo-icon8" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu8">
          <img className="burger-menu-icon4" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="cover-profile-image">
        <img
          className="image-placeholder-icon14"
          alt=""
          src="/image-placeholder52@2x.png"
        />
        <div className="profile-image">
          <div className="avatar5">
            <div className="asset-12-25">
              <img
                className="avatar-placeholder-icon5"
                alt=""
                src="/avatar-placeholder50@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="artist-info2">
        <div className="artist-name-parent">
          <div className="artist-name2">animakid</div>
          <div className="ctas">
            <div className="button24">
              <img className="copy-icon" alt="" src="/copy.svg" />
              <div className="button25">0xc0E3...B79C</div>
            </div>
            <div className="button26">
              <img className="copy-icon" alt="" src="/plus.svg" />
              <div className="button25">Follow</div>
            </div>
          </div>
          <div className="stats">
            <div className="total-sale2">
              <b className="k3">250k+</b>
              <div className="total-sale3">Volume</div>
            </div>
            <div className="total-sale2">
              <b className="k3">50k+</b>
              <div className="total-sale3">NFTs Sold</div>
            </div>
            <div className="total-sale2">
              <b className="k3">3000+</b>
              <div className="total-sale3">Followers</div>
            </div>
          </div>
          <div className="bio">
            <div className="bio1">Bio</div>
            <div className="the-internets-friendliest">
              The internet's friendliest designer kid.
            </div>
          </div>
          <div className="bio">
            <div className="links">Links</div>
            <div className="icons">
              <img
                className="discordlogo-icon"
                alt=""
                src="/globe.svg"
                onClick={onGlobeIconClick}
              />
              <img
                className="discordlogo-icon"
                alt=""
                src="/discordlogo5.svg"
                onClick={onDiscordLogoIconClick}
              />
              <img
                className="discordlogo-icon"
                alt=""
                src="/youtubelogo3.svg"
                onClick={onYoutubeLogoIconClick}
              />
              <img
                className="discordlogo-icon"
                alt=""
                src="/twitterlogo3.svg"
                onClick={onTwitterLogoIconClick}
              />
              <img
                className="discordlogo-icon"
                alt=""
                src="/instagramlogo2.svg"
                onClick={onInstagramLogoIconClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bar3">
        <div className="tab-bar-item" />
        <div className="tabs-wrapper2">
          <div className="tabs6">
            <div className="tab21">
              <div className="created21">Created</div>
              <div className="wrapper18">
                <div className="links">302</div>
              </div>
            </div>
            <div className="tab22">
              <div className="created21">Owned</div>
              <div className="wrapper19">
                <div className="links">67</div>
              </div>
            </div>
            <div className="tab22">
              <div className="created21">Collection</div>
              <div className="wrapper19">
                <div className="links">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DistantGalaxyContainer />
      <FooterUI
        productIds="/logo.svg"
        productDimensions="/discordlogo4.svg"
        productIds32x32="/youtubelogo1.svg"
        productIds20x20="/user2.svg"
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

export default ArtistPageMobile;
