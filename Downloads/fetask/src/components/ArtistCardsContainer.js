import "./ArtistCardsContainer.css";

const ArtistCardsContainer = ({
  transactionId,
  companyName,
  transactionAmount,
  transactionType,
  transactionId1,
  companyName1,
  transactionAmount1,
  transactionType1,
  onArtistCardContainer4Click,
  onArtistCardContainer5Click,
}) => {
  return (
    <div className="artist-cards-row2">
      <div className="artist-card41" onClick={onArtistCardContainer4Click}>
        <div className="artist-avatar6">
          <div className="avatar53">
            <div className="avatar-1">
              <img
                className="avatar-placeholder-icon53"
                alt=""
                src={transactionId}
              />
            </div>
          </div>
        </div>
        <div className="artist-info15">
          <div className="dish-studio39">{companyName}</div>
          <div className="additional-info26">
            <div className="total-sales9">Total Sales:</div>
            <div className="eth43">{transactionAmount}</div>
          </div>
        </div>
        <div className="ranking-number28">
          <div className="div64">{transactionType}</div>
        </div>
      </div>
      <div className="artist-card41" onClick={onArtistCardContainer5Click}>
        <div className="artist-avatar6">
          <div className="avatar53">
            <div className="avatar-1">
              <img
                className="avatar-placeholder-icon53"
                alt=""
                src={transactionId1}
              />
            </div>
          </div>
        </div>
        <div className="artist-info15">
          <div className="dish-studio39">{companyName1}</div>
          <div className="additional-info26">
            <div className="total-sales9">Total Sales:</div>
            <div className="eth43">{transactionAmount1}</div>
          </div>
        </div>
        <div className="ranking-number28">
          <div className="div64">{transactionType1}</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCardsContainer;
