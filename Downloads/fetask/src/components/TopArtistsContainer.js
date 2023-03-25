import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArtistCardsContainer from "./ArtistCardsContainer";
import "./TopArtistsContainer.css";

const TopArtistsContainer = () => {
  const navigate = useNavigate();

  const onArtistCardContainer4Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer5Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer6Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer7Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer8Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onArtistCardContainer9Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/rankings-tablet");
  }, [navigate]);

  return (
    <div className="top-rated-artists2">
      <div className="section-headline-button7">
        <div className="section-headline15">
          <div className="heading5">
            <div className="top-creators5">Top creators</div>
          </div>
          <div className="subhead13">
            <div className="checkout-top-rated2">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
        </div>
        <div className="button88" onClick={onButtonContainer1Click}>
          <img
            className="rocketlaunch-icon11"
            alt=""
            src="/rocketlaunch2.svg"
          />
          <div className="button89">View Rankings</div>
        </div>
      </div>
      <div className="artist-cards-grid1">
        <ArtistCardsContainer
          transactionId="/avatar-placeholder30@2x.png"
          companyName="Keepitreal"
          transactionAmount="34.53 ETH"
          transactionType="1"
          transactionId1="/avatar-placeholder31@2x.png"
          companyName1="DigiLab"
          transactionAmount1="32.13 ETH"
          transactionType1="2"
          onArtistCardContainer4Click={onArtistCardContainer4Click}
          onArtistCardContainer5Click={onArtistCardContainer5Click}
        />
        <ArtistCardsContainer
          transactionId="/avatar-placeholder32@2x.png"
          companyName="GravityOne"
          transactionAmount="28.93 ETH"
          transactionType="3"
          transactionId1="/avatar-placeholder33@2x.png"
          companyName1="Juanie"
          transactionAmount1="25.30 ETH"
          transactionType1="4"
          onArtistCardContainer4Click={onArtistCardContainer6Click}
          onArtistCardContainer5Click={onArtistCardContainer7Click}
        />
        <ArtistCardsContainer
          transactionId="/avatar-placeholder34@2x.png"
          companyName="BlueWhale"
          transactionAmount="22.22 ETH"
          transactionType="5"
          transactionId1="/avatar-placeholder35@2x.png"
          companyName1="Mr Fox"
          transactionAmount1="19.28 ETH"
          transactionType1="6"
          onArtistCardContainer4Click={onArtistCardContainer8Click}
          onArtistCardContainer5Click={onArtistCardContainer9Click}
        />
      </div>
    </div>
  );
};

export default TopArtistsContainer;
