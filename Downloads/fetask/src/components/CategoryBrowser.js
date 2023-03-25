import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCardsRowContainer from "./CategoryCardsRowContainer";
import "./CategoryBrowser.css";

const CategoryBrowser = () => {
  const navigate = useNavigate();

  const onCategoryCardContainerClick = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer1Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer2Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer3Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer4Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer5Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer6Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  const onCategoryCardContainer7Click = useCallback(() => {
    navigate("/marketplace-mobile");
  }, [navigate]);

  return (
    <div className="browse-categories4">
      <div className="section-headline12">
        <div className="browse-categories5">Browse Categories</div>
      </div>
      <div className="category-cards-grid2">
        <CategoryCardsRowContainer
          categoryId="/image-placeholder70@2x.png"
          iconId="/paintbrush1.svg"
          categoryName="Art"
          categoryImageId="/image-placeholder71@2x.png"
          categoryIconUrl="/swatches1.svg"
          categoryType="Collectibles"
          onCategoryCardContainerClick={onCategoryCardContainerClick}
          onCategoryCardContainer1Click={onCategoryCardContainer1Click}
        />
        <CategoryCardsRowContainer
          categoryId="/image-placeholder72@2x.png"
          iconId="/musicnotes1.svg"
          categoryName="Music"
          categoryImageId="/image-placeholder73@2x.png"
          categoryIconUrl="/camera1.svg"
          categoryType="Photography"
          propHeight="209px"
          onCategoryCardContainerClick={onCategoryCardContainer2Click}
          onCategoryCardContainer1Click={onCategoryCardContainer3Click}
        />
        <CategoryCardsRowContainer
          categoryId="/image-placeholder74@2x.png"
          iconId="/videocamera1.svg"
          categoryName="Video"
          categoryImageId="/image-placeholder75@2x.png"
          categoryIconUrl="/magicwand1.svg"
          categoryType="Utility"
          propHeight="209px"
          onCategoryCardContainerClick={onCategoryCardContainer4Click}
          onCategoryCardContainer1Click={onCategoryCardContainer5Click}
        />
        <CategoryCardsRowContainer
          categoryId="/image-placeholder76@2x.png"
          iconId="/basketball1.svg"
          categoryName="Sport"
          categoryImageId="/image-placeholder77@2x.png"
          categoryIconUrl="/planet1.svg"
          categoryType="Virtual Worlds"
          propHeight="231px"
          onCategoryCardContainerClick={onCategoryCardContainer6Click}
          onCategoryCardContainer1Click={onCategoryCardContainer7Click}
        />
      </div>
    </div>
  );
};

export default CategoryBrowser;
