import { useMemo } from "react";
import "./Header.css";

const Header = ({
  productIds,
  productDimensions,
  productIdsAndDimensions,
  rocketLaunchCursor,
  rocketLaunchCursor1,
  userCursor,
  onNavLogoClick,
  onMarketplaceContainerClick,
  onRankingsContainerClick,
  onConnectAWalletClick,
  onSignUpContainerClick,
}) => {
  const marketplaceStyle = useMemo(() => {
    return {
      cursor: rocketLaunchCursor,
    };
  }, [rocketLaunchCursor]);

  const rankingsStyle = useMemo(() => {
    return {
      cursor: rocketLaunchCursor1,
    };
  }, [rocketLaunchCursor1]);

  const signUpStyle = useMemo(() => {
    return {
      cursor: userCursor,
    };
  }, [userCursor]);

  return (
    <div className="navigation14">
      <div className="nav-logo28" onClick={onNavLogoClick}>
        <h1>NFT</h1>
      </div>
      <input placeholder="Collection/item"/>
      <div className="nav-nav-menu14">
        <div
          className="marketplace"
          onClick={onMarketplaceContainerClick}
          style={marketplaceStyle}
        >
          <img className="rocketlaunch-icon5" alt="" src={productDimensions} />
          <div className="button46">Home</div>
        </div>
        <div
          className="marketplace"
          onClick={onRankingsContainerClick}
          style={rankingsStyle}
        >
          <img className="rocketlaunch-icon5" alt="" src="/rocketlaunch1.svg" />
          <div className="button46">Service</div>
        </div>
        <div className="marketplace" onClick={onConnectAWalletClick}>
          <img className="rocketlaunch-icon5" alt="" src="/rocketlaunch1.svg" />
          <div className="button46">Contact</div>
        </div>
        <div className="marketplace" onClick={onConnectAWalletClick}>
          <img className="rocketlaunch-icon5" alt="" src="/rocketlaunch1.svg" />
          <div className="button46">Explore</div>
        </div>
        <div className="marketplace" onClick={onConnectAWalletClick}>
          <img className="rocketlaunch-icon5" alt="" src="/rocketlaunch1.svg" />
          <div className="button46">Blog</div>
        </div>
        <div
          className="sign-up"
          onClick={onSignUpContainerClick}
          style={signUpStyle}
        >
          <img className="user-icon5" alt="" src={productIdsAndDimensions} />
          <div className="button46" >Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
