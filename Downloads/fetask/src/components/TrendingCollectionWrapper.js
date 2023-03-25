import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingCollectionWrapper.css";

const TrendingCollectionWrapper = () => {
  const navigate = useNavigate();

  const onPrimaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onSecondaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  const onNumberOfAdditionalNFTsClick = useCallback(() => {
    navigate("/nft-page-mobile");
  }, [navigate]);

  return (
    <div className="trending-collection2">
      <div className="section-headline10">
        <div className="heading2">
          <div className="trending-collection3">Trending Collection</div>
        </div>
        <div className="subhead10">
          <div className="checkout-our-weekly1">
            Checkout our weekly updated trending collection.
          </div>
        </div>
      </div>
      <div className="collection-slider">
        <div className="collection-card1">
          <div className="photos-number-of-additional1">
            <img
              className="primary-photo-placeholder1"
              alt=""
              src="/primary-photo-placeholder3@2x.png"
              onClick={onPrimaryPhotoPlaceholderClick}
            />
            <div className="secondary-photo-placeholder-group">
              <img
                className="secondary-photo-placeholder2"
                alt=""
                src="/secondary-photo-placeholder6@2x.png"
                onClick={onSecondaryPhotoPlaceholderClick}
              />
              <img
                className="secondary-photo-placeholder2"
                alt=""
                src="/secondary-photo-placeholder7@2x.png"
                onClick={onSecondaryPhotoPlaceholder1Click}
              />
              <div
                className="number-of-additional-nfts1"
                onClick={onNumberOfAdditionalNFTsClick}
              >
                <b className="b26">1025+</b>
              </div>
            </div>
          </div>
          <div className="collection-info1">
            <div className="collection-name9">DSGN Animals</div>
            <div className="artist-card38">
              <div className="avatar49">
                <div className="asset-12-249">
                  <img
                    className="avatar-placeholder-icon49"
                    alt=""
                    src="/avatar-placeholder2@2x.png"
                  />
                </div>
              </div>
              <div className="checkout-our-weekly1">MrFox</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollectionWrapper;
