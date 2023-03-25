import { useMemo } from "react";
import "./ContainerItems.css";

const ContainerItems = ({
  authorName,
  authorId,
  authorImageId,
  propLeft,
  propBorderRadius,
  onTableItemsContainer1Click,
}) => {
  const div3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const avatarPlaceholderIcon6Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="table-items40" onClick={onTableItemsContainer1Click}>
      <div className="table-items41">
        <div className="rank-artist26">
          <div className="ranking-number24">
            <div className="div57" style={div3Style}>
              {authorName}
            </div>
          </div>
          <div className="artist-card33">
            <div className="avatar39">
              <div className="asset-12-239">
                <img
                  className="avatar-placeholder-icon39"
                  alt=""
                  src={authorId}
                  style={avatarPlaceholderIcon6Style}
                />
              </div>
            </div>
            <div className="dish-studio32">{authorImageId}</div>
          </div>
        </div>
        <div className="stats2">
          <div className="change4">
            <div className="div58">+1.41%</div>
          </div>
          <div className="volume26">
            <div className="div58">12.4 ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerItems;
