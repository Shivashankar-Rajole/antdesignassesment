import { useMemo } from "react";
import "./ArtistCardsRowContainer.css";

const ArtistCardsRowContainer = ({
  productIds,
  productNames,
  productPrices,
  productImageIds,
  productVendors,
  productQuantities,
  productImageUrls,
  productVendors2,
  productDescriptions,
  productImageIds2,
  productCategories,
  productQuantities2,
  propBorderRadius,
  propBorderRadius1,
  propLeft,
  propBorderRadius2,
  propLeft1,
  propBorderRadius3,
  propLeft2,
  onArtistCardContainer5Click,
  onArtistCardContainer6Click,
  onArtistCardContainer7Click,
  onArtistCardContainer8Click,
}) => {
  const avatarPlaceholderIcon1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const avatarPlaceholderIcon2Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const divStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const avatarPlaceholderIcon3Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius2,
    };
  }, [propBorderRadius2]);

  const div1Style = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const avatarPlaceholderIcon4Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius3,
    };
  }, [propBorderRadius3]);

  const div2Style = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className="artist-cards-row">
      <div className="artist-card9" onClick={onArtistCardContainer5Click}>
        <div className="artist-avatar">
          <div className="avatar12">
            <div className="asset-12-212">
              <img
                className="avatar-placeholder-icon12"
                alt=""
                src={productIds}
                style={avatarPlaceholderIcon1Style}
              />
            </div>
          </div>
        </div>
        <div className="artist-info4">
          <div className="dish-studio8">{productNames}</div>
          <div className="additional-info6">
            <div className="total-sales2">Total Sales:</div>
            <div className="eth4">34.53 ETH</div>
          </div>
        </div>
        <div className="ranking-number">
          <div className="div32">{productPrices}</div>
        </div>
      </div>
      <div className="artist-card9" onClick={onArtistCardContainer6Click}>
        <div className="artist-avatar">
          <div className="avatar12">
            <div className="asset-12-212">
              <img
                className="avatar-placeholder-icon12"
                alt=""
                src={productImageIds}
                style={avatarPlaceholderIcon2Style}
              />
            </div>
          </div>
        </div>
        <div className="artist-info4">
          <div className="dish-studio8">{productVendors}</div>
          <div className="additional-info6">
            <div className="total-sales2">Total Sales:</div>
            <div className="eth4">34.53 ETH</div>
          </div>
        </div>
        <div className="ranking-number">
          <div className="div32" style={divStyle}>
            {productQuantities}
          </div>
        </div>
      </div>
      <div className="artist-card9" onClick={onArtistCardContainer7Click}>
        <div className="artist-avatar">
          <div className="avatar12">
            <div className="asset-12-212">
              <img
                className="avatar-placeholder-icon12"
                alt=""
                src={productImageUrls}
                style={avatarPlaceholderIcon3Style}
              />
            </div>
          </div>
        </div>
        <div className="artist-info4">
          <div className="dish-studio8">{productVendors2}</div>
          <div className="additional-info6">
            <div className="total-sales2">Total Sales:</div>
            <div className="eth4">34.53 ETH</div>
          </div>
        </div>
        <div className="ranking-number">
          <div className="div32" style={div1Style}>
            {productDescriptions}
          </div>
        </div>
      </div>
      <div className="artist-card9" onClick={onArtistCardContainer8Click}>
        <div className="artist-avatar">
          <div className="avatar12">
            <div className="asset-12-212">
              <img
                className="avatar-placeholder-icon12"
                alt=""
                src={productImageIds2}
                style={avatarPlaceholderIcon4Style}
              />
            </div>
          </div>
        </div>
        <div className="artist-info4">
          <div className="dish-studio8">{productCategories}</div>
          <div className="additional-info6">
            <div className="total-sales2">Total Sales:</div>
            <div className="eth4">34.53 ETH</div>
          </div>
        </div>
        <div className="ranking-number">
          <div className="div32" style={div2Style}>
            {productQuantities2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCardsRowContainer;
