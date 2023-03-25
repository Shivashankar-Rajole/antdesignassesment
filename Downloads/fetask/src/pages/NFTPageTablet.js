import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArtistNFTsFormContainer from "../components/ArtistNFTsFormContainer";
import ContainerFooter from "../components/ContainerFooter";
import "./NFTPageTablet.css";

const NFTPageTablet = () => {
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
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings-tablet");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-tablet");
  }, [navigate]);

  const onButtonContainer6Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-tablet");
  }, [navigate]);

  const onArtistCardContainerClick = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onGlobeIconClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onViewOnEtherscanClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onGlobeIcon1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onViewOriginalTextClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/marketplace-tablet");
  }, [navigate]);

  return (
    <div className="nft-page-tablet">
      <div className="navigation7">
        <div className="nav-logo14" onClick={onNavLogo1Click}>
          <div className="nav-logo15">
            <img className="logo-icon7" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu7">
          <img className="burger-menu3" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <img
        className="image-placeholder-icon12"
        alt=""
        src="/image-placeholder43@2x.png"
      />
      <div className="artist-info">
        <div className="artist-info-section">
          <div className="nft-info1">
            <div className="nft-info2">
              <div className="created-by">
                <div className="artist-name">The Orbitians</div>
                <div className="minted-on-sep">Minted on Sep 30, 2022</div>
              </div>
              <div className="additional-info2">
                <div className="created-by">
                  <div className="created-by1">Created By</div>
                  <div
                    className="artist-card3"
                    onClick={onArtistCardContainerClick}
                  >
                    <div className="avatar3">
                      <div className="burger-menu3">
                        <img
                          className="avatar-placeholder-icon3"
                          alt=""
                          src="/avatar-placeholder25@2x.png"
                        />
                      </div>
                    </div>
                    <div className="dish-studio3">Orbitian</div>
                  </div>
                </div>
                <div className="created-by">
                  <div className="created-by1">Description</div>
                  <div className="the-orbitians-is-container">
                    <p className="the-orbitians">The Orbitians</p>
                    <p className="the-orbitians">
                      is a collection of 10,000 unique NFTs on the Ethereum
                      blockchain,  There are all sorts of beings in the NFT
                      Universe. The most advanced and friendly of the bunch are
                      Orbitians.   They live in a metal space machines, high up
                      in the sky and only have one foot on Earth.
                    </p>
                    <p className="the-orbitians">
                      These Orbitians are a peaceful race, but they have been at
                      war with a group of invaders for many generations. The
                      invaders are called Upside-Downs, because of their
                      inverted bodies that live on the ground, yet do not know
                      any other way to be. Upside-Downs believe that they will
                      be able to win this war if they could only get an eye into
                      Orbitian territory, so they've taken to make human beings
                      their target.
                    </p>
                  </div>
                </div>
                <div className="details">
                  <div className="details1">Details</div>
                  <div className="website-link">
                    <img
                      className="globe-icon"
                      alt=""
                      src="/globe.svg"
                      onClick={onGlobeIconClick}
                    />
                    <div
                      className="view-on-etherscan"
                      onClick={onViewOnEtherscanClick}
                    >
                      View on Etherscan
                    </div>
                  </div>
                  <div className="website-link">
                    <img
                      className="globe-icon"
                      alt=""
                      src="/globe.svg"
                      onClick={onGlobeIcon1Click}
                    />
                    <div
                      className="view-on-etherscan"
                      onClick={onViewOriginalTextClick}
                    >
                      View Original
                    </div>
                  </div>
                </div>
                <div className="tags">
                  <div className="tags1">Tags</div>
                  <div className="tags2">
                    <div className="button4" onClick={onButtonContainerClick}>
                      <img className="wallet-icon" alt="" src="/wallet1.svg" />
                      <div className="button5">Animation</div>
                    </div>
                    <div className="button4" onClick={onButtonContainer1Click}>
                      <img className="wallet-icon" alt="" src="/wallet1.svg" />
                      <div className="button5">illustration</div>
                    </div>
                    <div className="button4" onClick={onButtonContainer2Click}>
                      <img className="wallet-icon" alt="" src="/wallet1.svg" />
                      <div className="button5">moon</div>
                    </div>
                    <div className="button4" onClick={onButtonContainer3Click}>
                      <img className="wallet-icon" alt="" src="/wallet1.svg" />
                      <div className="button5">moon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="auction-timer-cta">
              <div className="auction-timer1">
                <div className="auction-ends-in1">Auction ends in:</div>
                <div className="timer1">
                  <div className="hours2">
                    <b className="b5">59</b>
                    <div className="hours3">Hours</div>
                  </div>
                  <b className="b6">:</b>
                  <div className="hours2">
                    <b className="b5">59</b>
                    <div className="hours3">Minutes</div>
                  </div>
                  <b className="b6">:</b>
                  <div className="hours2">
                    <b className="b5">59</b>
                    <div className="hours3">Seconds</div>
                  </div>
                </div>
              </div>
              <div className="button12">
                <img className="wallet-icon" alt="" src="/wallet.svg" />
                <div className="button13">Place Bid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArtistNFTsFormContainer />
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
        onButtonContainerClick={onButtonContainer6Click}
      />
    </div>
  );
};

export default NFTPageTablet;
