import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TableContainer from "../components/TableContainer";
import FooterContainer from "../components/FooterContainer";
import "./RankingsDesktop.css";

const RankingsDesktop = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-desktop");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account-desktop");
  }, [navigate]);

  const onTableItemsContainer1Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer3Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer5Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer7Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer9Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer11Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer13Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer15Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer17Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer19Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer21Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer23Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer25Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer27Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer29Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer31Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer33Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer35Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer37Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onTableItemsContainer39Click = useCallback(() => {
    navigate("/artist-page-desktop");
  }, [navigate]);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://twitter.com/animaapp?lang=en");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/?hl=en");
  }, []);

  const onMarketplaceTextClick = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onConnectAWallet1Click = useCallback(() => {
    navigate("/connect-wallet-desktop");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="rankings-desktop">
      <Header
        productIds="/logo.svg"
        productDimensions="/rocketlaunch1.svg"
        productIdsAndDimensions="/user.svg"
        rocketLaunchCursor="pointer"
        rocketLaunchCursor1="unset"
        userCursor="pointer"
        onNavLogoClick={onNavLogoClick}
        onMarketplaceContainerClick={onMarketplaceContainerClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onSignUpContainerClick={onSignUpContainerClick}
      />
      <div className="headline-subhead5">
        <div className="headline-subhead6">
          <div className="headline2">
            <div className="top-creators2">Top Creators</div>
          </div>
          <div className="subhead2">
            <div className="check-out-top2">
              Check out top ranking NFT artists on the NFT Marketplace.
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-wrapper">
        <div className="tabs2">
          <div className="tab8">
            <div className="created8">Today</div>
            <div className="wrapper5">
              <div className="div9">302</div>
            </div>
          </div>
          <div className="tab9">
            <div className="created8">This Week</div>
            <div className="wrapper6">
              <div className="div9">67</div>
            </div>
          </div>
          <div className="tab9">
            <div className="created8">This Month</div>
            <div className="wrapper6">
              <div className="div9">67</div>
            </div>
          </div>
          <div className="tab9">
            <div className="created8">All Time</div>
            <div className="wrapper6">
              <div className="div9">67</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rankings1">
        <div className="table-header1">
          <div className="table-headers1">
            <div className="rank-artist1">
              <div className="div13">#</div>
              <div className="artist1">Artist</div>
            </div>
            <div className="stats-header1">
              <div className="nfts-sold">
                <div className="change3">Change</div>
              </div>
              <div className="nfts-sold">
                <div className="change3">NFTs Sold</div>
              </div>
              <div className="nfts-sold">
                <div className="change3">Volume</div>
              </div>
            </div>
          </div>
        </div>
        <TableContainer
          nameText="1"
          profileImageId="/avatar-placeholder30@2x.png"
          profileName="Jaydon Ekstrom Bothman"
          onTableItemsContainer1Click={onTableItemsContainer1Click}
        />
        <TableContainer
          nameText="2"
          profileImageId="/avatar-placeholder31@2x.png"
          profileName="Ruben Carder"
          propLeft="calc(50% - 5px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer3Click}
        />
        <TableContainer
          nameText="3"
          profileImageId="/avatar-placeholder32@2x.png"
          profileName="Alfredo Septimus"
          propLeft="calc(50% - 5px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer5Click}
        />
        <TableContainer
          nameText="4"
          profileImageId="/avatar-placeholder33@2x.png"
          profileName="Davis Franci"
          propLeft="calc(50% - 5px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer7Click}
        />
        <TableContainer
          nameText="5"
          profileImageId="/avatar-placeholder34@2x.png"
          profileName="Livia Rosser"
          propLeft="calc(50% - 5px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer9Click}
        />
        <TableContainer
          nameText="6"
          profileImageId="/avatar-placeholder35@2x.png"
          profileName="Kianna Donin"
          propLeft="calc(50% - 5px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer11Click}
        />
        <TableContainer
          nameText="7"
          profileImageId="/avatar-placeholder36@2x.png"
          profileName="Phillip Lipshutz"
          propLeft="calc(50% - 5px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer13Click}
        />
        <TableContainer
          nameText="8"
          profileImageId="/avatar-placeholder37@2x.png"
          profileName="Maria Rosser"
          propLeft="calc(50% - 5px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer15Click}
        />
        <TableContainer
          nameText="9"
          profileImageId="/avatar-placeholder38@2x.png"
          profileName="Kianna Stanton"
          propLeft="calc(50% - 5px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer17Click}
        />
        <TableContainer
          nameText="10"
          profileImageId="/avatar-placeholder39@2x.png"
          profileName="Angel Lubin"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer19Click}
        />
        <TableContainer
          nameText="11"
          profileImageId="/avatar-placeholder40@2x.png"
          profileName="Allison Torff"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer21Click}
        />
        <TableContainer
          nameText="12"
          profileImageId="/avatar-placeholder41@2x.png"
          profileName="Davis Workman"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer23Click}
        />
        <TableContainer
          nameText="13"
          profileImageId="/avatar-placeholder42@2x.png"
          profileName="Lindsey Lipshutz"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer25Click}
        />
        <TableContainer
          nameText="14"
          profileImageId="/avatar-placeholder43@2x.png"
          profileName="Randy Carder"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer27Click}
        />
        <TableContainer
          nameText="15"
          profileImageId="/avatar-placeholder44@2x.png"
          profileName="Lydia Culhane"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer29Click}
        />
        <TableContainer
          nameText="16"
          profileImageId="/avatar-placeholder45@2x.png"
          profileName="Rayna Bator"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer31Click}
        />
        <TableContainer
          nameText="17"
          profileImageId="/avatar-placeholder46@2x.png"
          profileName="Jocelyn Westervelt"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer33Click}
        />
        <TableContainer
          nameText="18"
          profileImageId="/avatar-placeholder30@2x.png"
          profileName="Marilyn Torff"
          propLeft="calc(50% - 10px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer35Click}
        />
        <TableContainer
          nameText="19"
          profileImageId="/avatar-placeholder39@2x.png"
          profileName="Skylar Levin"
          propLeft="calc(50% - 10px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer37Click}
        />
        <TableContainer
          nameText="20"
          profileImageId="/avatar-placeholder32@2x.png"
          profileName="Terry Dorwart"
          propLeft="calc(50% - 10px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer39Click}
        />
      </div>
      <FooterContainer
        productIds="/logo3.svg"
        productDimensions="/discordlogo2.svg"
        productIdsAndDimensions="/youtubelogo.svg"
        productIdsAndDimensionsTe="/twitterlogo2.svg"
        propBorderTop="2px solid var(--background)"
        propCursor="pointer"
        propCursor1="unset"
        propCursor2="pointer"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onConnectAWallet1Click={onConnectAWallet1Click}
        onButtonContainer5Click={onButtonContainerClick}
      />
    </div>
  );
};

export default RankingsDesktop;
