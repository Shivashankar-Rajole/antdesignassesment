import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistInfoContainer.css";

const ArtistInfoContainer = () => {
  const navigate = useNavigate();

  const onArtistCardContainerClick = useCallback(() => {
    navigate("/artist-page-mobile");
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

  const onButtonContainer1Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  return (
    <div className="artist-info10">
      <div className="nft-info12">
        <div className="headline-subhead31">
          <div className="artist-name6">The Orbitians</div>
          <div className="minted-on-sep2">Minted on Sep 30, 2022</div>
        </div>
        <div className="auction-timer-cta2">
          <div className="auction-timer4">
            <div className="auction-ends-in4">Auction ends in:</div>
            <div className="timer4">
              <div className="hours8">
                <b className="b21">59</b>
                <div className="hours9">Hours</div>
              </div>
              <b className="b22">:</b>
              <div className="hours8">
                <b className="b21">59</b>
                <div className="hours9">Minutes</div>
              </div>
              <b className="b22">:</b>
              <div className="hours8">
                <b className="b21">59</b>
                <div className="hours9">Seconds</div>
              </div>
            </div>
          </div>
          <div className="button62">
            <img className="wallet-icon10" alt="" src="/wallet.svg" />
            <div className="button63">Place Bid</div>
          </div>
        </div>
        <div className="created-by4">
          <div className="created-by5">Created By</div>
          <div className="artist-card35" onClick={onArtistCardContainerClick}>
            <div className="avatar44">
              <div className="asset-12-244">
                <img
                  className="avatar-placeholder-icon44"
                  alt=""
                  src="/avatar-placeholder24@2x.png"
                />
              </div>
            </div>
            <div className="dish-studio34">Dish Studio</div>
          </div>
        </div>
        <div className="created-by4">
          <div className="created-by5">Description</div>
          <div className="the-orbitians-is-container2">
            <p className="the-orbitians2">The Orbitians</p>
            <p className="the-orbitians2">
              is a collection of 10,000 unique NFTs on the Ethereum
              blockchain,  There are all sorts of beings in the NFT Universe.
              The most advanced and friendly of the bunch are Orbitians.   They
              live in a metal space machines, high up in the sky and only have
              one foot on Earth.
            </p>
            <p className="the-orbitians2">
              These Orbitians are a peaceful race, but they have been at war
              with a group of invaders for many generations. The invaders are
              called Upside-Downs, because of their inverted bodies that live on
              the ground, yet do not know any other way to be. Upside-Downs
              believe that they will be able to win this war if they could only
              get an eye into Orbitian territory, so they've taken to make human
              beings their target.
            </p>
          </div>
        </div>
        <div className="details4">
          <div className="details5">Details</div>
          <div className="website-link4">
            <img
              className="globe-icon6"
              alt=""
              src="/globe.svg"
              onClick={onGlobeIconClick}
            />
            <div
              className="view-on-etherscan2"
              onClick={onViewOnEtherscanClick}
            >
              View on Etherscan
            </div>
          </div>
          <div className="website-link4">
            <img
              className="globe-icon6"
              alt=""
              src="/globe.svg"
              onClick={onGlobeIcon1Click}
            />
            <div
              className="view-on-etherscan2"
              onClick={onViewOriginalTextClick}
            >
              View Original
            </div>
          </div>
        </div>
        <div className="tags5">
          <div className="tags6">Tags</div>
          <div className="tags7">
            <div className="button64" onClick={onButtonContainer1Click}>
              <img className="wallet-icon10" alt="" src="/wallet1.svg" />
              <div className="button65">Animation</div>
            </div>
            <div className="button64" onClick={onButtonContainer2Click}>
              <img className="wallet-icon10" alt="" src="/wallet1.svg" />
              <div className="button65">illustration</div>
            </div>
            <div className="button64" onClick={onButtonContainer3Click}>
              <img className="wallet-icon10" alt="" src="/wallet1.svg" />
              <div className="button65">moon</div>
            </div>
            <div className="button64" onClick={onButtonContainer4Click}>
              <img className="wallet-icon10" alt="" src="/wallet1.svg" />
              <div className="button65">moon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfoContainer;
