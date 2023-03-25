import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ShroomieContainer.css";

const ShroomieContainer = () => {
  const navigate = useNavigate();

  const onArtistCardContainer8Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  return (
    <div className="nft-highlight2">
      <div className="nft-info16">
        <div className="nft-artst-name-button-wrapper">
          <div className="nft-artst-name-button2">
            <div
              className="artist-card40"
              onClick={onArtistCardContainer8Click}
            >
              <div className="avatar52">
                <div className="asset-12-252">
                  <img
                    className="avatar-placeholder-icon52"
                    alt=""
                    src="/avatar-placeholder3@2x.png"
                  />
                </div>
              </div>
              <div className="dish-studio38">Shroomie</div>
            </div>
            <div className="magic-mashrooms2">Magic Mashrooms</div>
            <div className="auction-timer5">
              <div className="auction-ends-in5">Auction ends in:</div>
              <div className="timer5">
                <div className="hours10">
                  <b className="b27">59</b>
                  <div className="hours11">Hours</div>
                </div>
                <b className="b28">:</b>
                <div className="hours10">
                  <b className="b27">59</b>
                  <div className="hours11">Minutes</div>
                </div>
                <b className="b28">:</b>
                <div className="hours10">
                  <b className="b27">59</b>
                  <div className="hours11">Seconds</div>
                </div>
              </div>
            </div>
            <div className="button86" onClick={onButtonContainer3Click}>
              <img className="eye-icon3" alt="" src="/eye1.svg" />
              <div className="button87">See NFT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShroomieContainer;
