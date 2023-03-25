import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ArtistNFTsFormContainer1 from "../components/ArtistNFTsFormContainer1";
import FooterContainer from "../components/FooterContainer";
import "./NFTPageDesktop.css";

const NFTPageDesktop = () => {
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

  const onButtonContainer6Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onArtistCardContainerClick = useCallback(() => {
    navigate("/artist-page-desktop");
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
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  return (
    <div className="nft-page-desktop">
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
      <img
        className="image-placeholder-icon13"
        alt=""
        src="/image-placeholder48@2x.png"
      />
      <div className="artist-info1">
        <div className="artist-info-section1">
          <div className="nft-info3">
            <div className="nft-info4">
              <div className="headline-subhead18">
                <div className="artist-name1">The Orbitians</div>
                <div className="minted-on-sep1">Minted on Sep 30, 2022</div>
              </div>
              <div className="additional-info3">
                <div className="headline-subhead18">
                  <b className="created-by3">Created By</b>
                  <div
                    className="artist-card4"
                    onClick={onArtistCardContainerClick}
                  >
                    <div className="avatar4">
                      <div className="asset-12-24">
                        <img
                          className="avatar-placeholder-icon4"
                          alt=""
                          src="/avatar-placeholder49@2x.png"
                        />
                      </div>
                    </div>
                    <div className="dish-studio4">Orbitian</div>
                  </div>
                </div>
                <div className="headline-subhead18">
                  <b className="description3">Description</b>
                  <div className="the-orbitians-is-container1">
                    <p className="the-orbitians1">The Orbitians</p>
                    <p className="the-orbitians1">
                      is a collection of 10,000 unique NFTs on the Ethereum
                      blockchain,  There are all sorts of beings in the NFT
                      Universe. The most advanced and friendly of the bunch are
                      Orbitians.   They live in a metal space machines, high up
                      in the sky and only have one foot on Earth.
                    </p>
                    <p className="the-orbitians1">
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
                <div className="details2">
                  <b className="details3">Details</b>
                  <div className="website-link2">
                    <img
                      className="globe-icon2"
                      alt=""
                      src="/globe1.svg"
                      onClick={onGlobeIconClick}
                    />
                    <div
                      className="view-on-etherscan1"
                      onClick={onViewOnEtherscanClick}
                    >
                      View on Etherscan
                    </div>
                  </div>
                  <div className="website-link2">
                    <img
                      className="globe-icon2"
                      alt=""
                      src="/globe1.svg"
                      onClick={onGlobeIcon1Click}
                    />
                    <div
                      className="view-on-etherscan1"
                      onClick={onViewOriginalTextClick}
                    >
                      View Original
                    </div>
                  </div>
                </div>
                <div className="tags3">
                  <div className="tags4">Tags</div>
                  <div className="button-parent">
                    <div className="button14" onClick={onButtonContainerClick}>
                      <img className="wallet-icon5" alt="" src="/wallet1.svg" />
                      <div className="button15">Animation</div>
                    </div>
                    <div className="button14" onClick={onButtonContainer1Click}>
                      <img className="wallet-icon5" alt="" src="/wallet1.svg" />
                      <div className="button15">illustration</div>
                    </div>
                    <div className="button14" onClick={onButtonContainer2Click}>
                      <img className="wallet-icon5" alt="" src="/wallet1.svg" />
                      <div className="button15">moon</div>
                    </div>
                    <div className="button14" onClick={onButtonContainer3Click}>
                      <img className="wallet-icon5" alt="" src="/wallet1.svg" />
                      <div className="button15">moon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="auction-timer-cta1">
              <div className="auction-timer2">
                <div className="auction-ends-in2">Auction ends in:</div>
                <div className="timer2">
                  <div className="hours4">
                    <b className="b10">59</b>
                    <div className="hours5">Hours</div>
                  </div>
                  <b className="b11">:</b>
                  <div className="hours4">
                    <b className="b10">59</b>
                    <div className="hours5">Minutes</div>
                  </div>
                  <b className="b11">:</b>
                  <div className="hours4">
                    <b className="b10">59</b>
                    <div className="hours5">Seconds</div>
                  </div>
                </div>
              </div>
              <div className="button22">
                <img className="wallet-icon5" alt="" src="/wallet.svg" />
                <div className="button23">Place Bid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArtistNFTsFormContainer1 />
      <FooterContainer
        productIds="/logo1.svg"
        productDimensions="/discordlogo2.svg"
        productIdsAndDimensions="/youtubelogo.svg"
        productIdsAndDimensionsTe="/twitterlogo2.svg"
        propBorderTop="2px solid var(--background)"
        propCursor="pointer"
        propCursor1="pointer"
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onRankingsTextClick={onRankingsTextClick}
        onConnectAWallet1Click={onConnectAWallet1Click}
        onButtonContainer5Click={onButtonContainer6Click}
      />
    </div>
  );
};

export default NFTPageDesktop;
