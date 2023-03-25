import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArtistContainer from "./ArtistContainer";
import ContainerHeadlineButton from "./ContainerHeadlineButton";
import "./TopRatedArtistsContainer.css";

const TopRatedArtistsContainer = () => {
  const navigate = useNavigate();

  const onArtistCardContainer3Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer4Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer5Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer6Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onArtistCardContainer7Click = useCallback(() => {
    navigate("/artist-page-mobile");
  }, [navigate]);

  const onSectionHeadlineButton1Click = useCallback(() => {
    navigate("/rankings-mobile");
  }, [navigate]);

  return (
    <div className="top-rated-artists1">
      <div className="section-headline-button5">
        <div className="section-headline11">
          <div className="heading3">
            <div className="top-creators4">Top creators</div>
          </div>
          <div className="subhead11">
            <div className="checkout-top-rated1">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
        </div>
      </div>
      <div className="artist-cards-row1">
        <ArtistContainer
          transactionId="/avatar-placeholder30@2x.png"
          transactionName="Keepitreal"
          transactionAmount="34.53 ETH"
          transactionStatus="1"
          onArtistCardContainer3Click={onArtistCardContainer3Click}
        />
        <ArtistContainer
          transactionId="/avatar-placeholder31@2x.png"
          transactionName="DigiLab"
          transactionAmount="32.13 ETH"
          transactionStatus="2"
          onArtistCardContainer3Click={onArtistCardContainer4Click}
        />
        <ArtistContainer
          transactionId="/avatar-placeholder32@2x.png"
          transactionName="GravityOne"
          transactionAmount="28.93 ETH"
          transactionStatus="3"
          onArtistCardContainer3Click={onArtistCardContainer5Click}
        />
        <ArtistContainer
          transactionId="/avatar-placeholder33@2x.png"
          transactionName="Juanie"
          transactionAmount="25.30 ETH"
          transactionStatus="4"
          onArtistCardContainer3Click={onArtistCardContainer6Click}
        />
        <ArtistContainer
          transactionId="/avatar-placeholder34@2x.png"
          transactionName="BlueWhale"
          transactionAmount="22.22 ETH"
          transactionStatus="5"
          onArtistCardContainer3Click={onArtistCardContainer7Click}
        />
      </div>
      <ContainerHeadlineButton
        rankingIds="/rocketlaunch2.svg"
        rankingActionText="View Rankings"
        onSectionHeadlineButton1Click={onSectionHeadlineButton1Click}
      />
    </div>
  );
};

export default TopRatedArtistsContainer;
