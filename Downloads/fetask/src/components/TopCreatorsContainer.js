import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArtistCardsRowContainer from "./ArtistCardsRowContainer";
import "./TopCreatorsContainer.css";

const TopCreatorsContainer = () => {
  const navigate = useNavigate();

  const onArtistCardContainer5Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer6Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer7Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer8Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer9Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer10Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer11Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer12Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer13Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer14Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer15Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onArtistCardContainer16Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/rankings-desktop");
  }, [navigate]);

  return (
    <div className="top-rated-artists">
      <div className="section-headline-button">
        <div className="section-headline6">
          <div className="heading1">
            <div className="top-creators3">Top creators</div>
          </div>
          <div className="subhead9">
            <div className="checkout-top-rated">
              Checkout Top Rated Creators on the NFT Marketplace
            </div>
          </div>
        </div>
        <div className="button50" onClick={onButtonContainer1Click}>
          <img className="rocketlaunch-icon8" alt="" src="/rocketlaunch2.svg" />
          <div className="button51">View Rankings</div>
        </div>
      </div>
      <div className="artist-cards-grid">
        <ArtistCardsRowContainer
          productIds="/avatar-placeholder5@2x.png"
          productNames="Keepitreal"
          productPrices="1"
          productImageIds="/avatar-placeholder6@2x.png"
          productVendors="DigiLab"
          productQuantities="2"
          productImageUrls="/avatar-placeholder7@2x.png"
          productVendors2="GravityOne"
          productDescriptions="3"
          productImageIds2="/avatar-placeholder8@2x.png"
          productCategories="Juanie"
          productQuantities2="4"
          onArtistCardContainer5Click={onArtistCardContainer5Click}
          onArtistCardContainer6Click={onArtistCardContainer6Click}
          onArtistCardContainer7Click={onArtistCardContainer7Click}
          onArtistCardContainer8Click={onArtistCardContainer8Click}
        />
        <ArtistCardsRowContainer
          productIds="/avatar-placeholder9@2x.png"
          productNames="BlueWhale"
          productPrices="5"
          productImageIds="/avatar-placeholder10@2x.png"
          productVendors="mr fox"
          productQuantities="6"
          productImageUrls="/avatar-placeholder11@2x.png"
          productVendors2="Shroomie"
          productDescriptions="7"
          productImageIds2="/avatar-placeholder12@2x.png"
          productCategories="robotica"
          productQuantities2="8"
          propBorderRadius="100px"
          propBorderRadius1="100px"
          propLeft="calc(50% - 5px)"
          propBorderRadius2="120px"
          propLeft1="calc(50% - 5px)"
          propBorderRadius3="120px"
          propLeft2="calc(50% - 5px)"
          onArtistCardContainer5Click={onArtistCardContainer9Click}
          onArtistCardContainer6Click={onArtistCardContainer10Click}
          onArtistCardContainer7Click={onArtistCardContainer11Click}
          onArtistCardContainer8Click={onArtistCardContainer12Click}
        />
        <ArtistCardsRowContainer
          productIds="/avatar-placeholder13@2x.png"
          productNames="RustyRobot"
          productPrices="9"
          productImageIds="/avatar-placeholder14@2x.png"
          productVendors="animakid"
          productQuantities="10"
          productImageUrls="/avatar-placeholder15@2x.png"
          productVendors2="Dotgu"
          productDescriptions="11"
          productImageIds2="/avatar-placeholder16@2x.png"
          productCategories="Ghiblier"
          productQuantities2="12"
          propBorderRadius="120px"
          propBorderRadius1="120px"
          propLeft="calc(50% - 10px)"
          propBorderRadius2="120px"
          propLeft1="calc(50% - 10px)"
          propBorderRadius3="120px"
          propLeft2="calc(50% - 10px)"
          onArtistCardContainer5Click={onArtistCardContainer13Click}
          onArtistCardContainer6Click={onArtistCardContainer14Click}
          onArtistCardContainer7Click={onArtistCardContainer15Click}
          onArtistCardContainer8Click={onArtistCardContainer16Click}
        />
      </div>
    </div>
  );
};

export default TopCreatorsContainer;
