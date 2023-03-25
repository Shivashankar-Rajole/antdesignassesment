import { useMemo } from "react";
import "./CategoryCardsRowContainer.css";

const CategoryCardsRowContainer = ({
  categoryId,
  iconId,
  categoryName,
  categoryImageId,
  categoryIconUrl,
  categoryType,
  propHeight,
  onCategoryCardContainerClick,
  onCategoryCardContainer1Click,
}) => {
  const categoryCardsRowStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="category-cards-row4" style={categoryCardsRowStyle}>
      <div className="category-card16" onClick={onCategoryCardContainerClick}>
        <div className="photo-icon19">
          <div className="image-placeholder16">
            <img className="image-placeholder-icon39" alt="" src={categoryId} />
          </div>
          <div className="category-icon16">
            <img className="paintbrush-icon2" alt="" src={iconId} />
          </div>
        </div>
        <div className="category-name24">
          <div className="category-name25">{categoryName}</div>
        </div>
      </div>
      <div className="category-card16" onClick={onCategoryCardContainer1Click}>
        <div className="photo-icon19">
          <div className="image-placeholder16">
            <img
              className="image-placeholder-icon39"
              alt=""
              src={categoryImageId}
            />
          </div>
          <div className="category-icon16">
            <img className="paintbrush-icon2" alt="" src={categoryIconUrl} />
          </div>
        </div>
        <div className="category-name24">
          <div className="category-name25">{categoryType}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardsRowContainer;
