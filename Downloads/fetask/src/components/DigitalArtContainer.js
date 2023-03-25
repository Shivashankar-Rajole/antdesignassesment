import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DigitalArtContainer.css";

const DigitalArtContainer = () => {
  const navigate = useNavigate();

  const onHighlightedNFTContainerClick = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/create-account-mobile");
  }, [navigate]);

  return (
    <div className="hero-section2">
      <div className="hero-section-frame2">
        <div className="hero-text-buttons2">
          <div className="headline-subhead32">
            <div className="discover-digital-art2">{`Discover digital art & Collect NFTs`}</div>
            <div className="nft-marketplace-ui5">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </div>
          </div>
          <div
            className="highlighted-nft2"
            onClick={onHighlightedNFTContainerClick}
          >
            <div className="artist-card36">
              <div className="avatar47">
                <div className="asset-12-247">
                  <img
                    className="avatar-placeholder-icon47"
                    alt=""
                    src="/avatar-placeholder30@2x.png"
                  />
                </div>
              </div>
              <div className="additional-info22">
                <div className="discover-digital-art2">Dish Studio</div>
                <div className="total-sales-container">
                  <div className="total-sales7">Total Sales:</div>
                  <div className="eth39">34.53 ETH</div>
                </div>
              </div>
            </div>
            <img
              className="image-placeholder-icon38"
              alt=""
              src="/image-placeholder69@2x.png"
            />
            <div className="space-walking-container">
              <div className="discover-digital-art2">Space Walking</div>
              <div className="artist-card37">
                <div className="avatar47">
                  <div className="asset-12-248">
                    <img
                      className="avatar-placeholder-icon48"
                      alt=""
                      src="/avatar-placeholder1@2x.png"
                    />
                  </div>
                </div>
                <div className="total-sales7">Animakid</div>
              </div>
            </div>
            <div className="frame-parent4">
              <div className="frame-parent5">
                <div className="price-frame">
                  <div className="price18">Price:</div>
                </div>
                <div className="eth-frame">
                  <div className="eth40">1.63 ETH</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="release-date-frame">
                  <div className="release-date2">Release Date:</div>
                </div>
                <div className="sep-2022-frame">
                  <div className="sep-20222">2 Sep 2022</div>
                </div>
              </div>
            </div>
          </div>
          <div className="button82" onClick={onButtonContainerClick}>
            <img
              className="rocketlaunch-icon9"
              alt=""
              src="/rocketlaunch3.svg"
            />
            <div className="button83">Get Started</div>
          </div>
          <div className="additional-info23">
            <div className="total-sale10">
              <b className="k15">{`240k+ `}</b>
              <div className="total-sale11">Total Sale</div>
            </div>
            <div className="total-sale10">
              <b className="k15">100k+</b>
              <div className="total-sale11">Auctions</div>
            </div>
            <div className="total-sale10">
              <b className="k15">240k+</b>
              <div className="total-sale11">Artists</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalArtContainer;
