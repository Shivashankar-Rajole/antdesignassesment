import { useMemo } from "react";
import "./TableContainer.css";

const TableContainer = ({
  nameText,
  profileImageId,
  profileName,
  propLeft,
  propBorderRadius,
  onTableItemsContainer1Click,
}) => {
  const div4Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const avatarPlaceholderIcon7Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className="table-items42" onClick={onTableItemsContainer1Click}>
      <div className="table-items43">
        <div className="rank-artist27">
          <div className="ranking-number25">
            <div className="div59" style={div4Style}>
              {nameText}
            </div>
          </div>
          <div className="artist-card34">
            <div className="artist-avatar4">
              <div className="avatar40">
                <div className="asset-12-240">
                  <img
                    className="avatar-placeholder-icon40"
                    alt=""
                    src={profileImageId}
                    style={avatarPlaceholderIcon7Style}
                  />
                </div>
              </div>
            </div>
            <div className="artist-info8">
              <div className="dish-studio33">{profileName}</div>
              <div className="additional-info16">
                <div className="total-sales6">Total Sales:</div>
                <div className="eth32">34.53 ETH</div>
              </div>
            </div>
            <div className="ranking-number26">
              <div className="div59">1</div>
            </div>
          </div>
        </div>
        <div className="stats3">
          <div className="change5">
            <div className="div61">+1.41%</div>
          </div>
          <div className="nfts-sold2">
            <div className="div61">602</div>
          </div>
          <div className="nfts-sold2">
            <div className="div61">12.4 ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
