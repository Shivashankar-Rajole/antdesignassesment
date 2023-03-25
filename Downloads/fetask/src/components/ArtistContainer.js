import "./ArtistContainer.css";

const ArtistContainer = ({
  transactionId,
  transactionName,
  transactionAmount,
  transactionStatus,
  onArtistCardContainer3Click,
}) => {
  return (
    <div className="artist-card39" onClick={onArtistCardContainer3Click}>
      <div className="artist-avatar5">
        <div className="avatar50">
          <div className="asset-12-250">
            <img
              className="avatar-placeholder-icon50"
              alt=""
              src={transactionId}
            />
          </div>
        </div>
      </div>
      <div className="artist-info13">
        <div className="dish-studio37">{transactionName}</div>
        <div className="additional-info24">
          <div className="total-sales8">Total Sales:</div>
          <div className="eth41">{transactionAmount}</div>
        </div>
      </div>
      <div className="ranking-number27">
        <div className="div63">{transactionStatus}</div>
      </div>
    </div>
  );
};

export default ArtistContainer;
