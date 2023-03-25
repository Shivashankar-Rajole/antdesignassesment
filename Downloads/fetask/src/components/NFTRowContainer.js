import "./NFTRowContainer.css";

const NFTRowContainer = ({
  bookCoverImageUrl,
  bookTitle,
  bookISBN,
  bookAuthor,
  onNFTCardContainerClick,
}) => {
  return (
    <div className="nft-cards-row5">
      <div className="nft-card8" onClick={onNFTCardContainerClick}>
        <div className="image8">
          <img
            className="image-placeholder-icon41"
            alt=""
            src={bookCoverImageUrl}
          />
        </div>
        <div className="nft-info15">
          <div className="artist-info14">
            <div className="nft-name8">{bookTitle}</div>
            <div className="artist-avatar-name8">
              <div className="avatar51">
                <div className="asset-12-251">
                  <img
                    className="avatar-placeholder-icon51"
                    alt=""
                    src={bookISBN}
                  />
                </div>
              </div>
              <div className="artist-name9">
                <div className="nft-artist8">{bookAuthor}</div>
              </div>
            </div>
          </div>
          <div className="additional-info25">
            <div className="price19">
              <div className="price20">Price</div>
              <div className="eth42">1.63 ETH</div>
            </div>
            <div className="highest-bid16">
              <div className="price20">Highest Bid</div>
              <div className="eth42">0.33 wETH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTRowContainer;
