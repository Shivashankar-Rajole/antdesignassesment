import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerItems from "../components/ContainerItems";
import ContainerFooter from "../components/ContainerFooter";
import "./RankingsTablet.css";

const RankingsTablet = () => {
  const navigate = useNavigate();

  const onTableItemsContainer1Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer3Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer5Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer7Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer9Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer11Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer13Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer15Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer17Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer19Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer21Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer23Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer25Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer27Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer29Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer31Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer33Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer35Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer37Click = useCallback(() => {
    navigate("/artist-page-tablet");
  }, [navigate]);

  const onTableItemsContainer39Click = useCallback(() => {
    navigate("/artist-page-tablet");
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
    navigate("/marketplace-tablet");
  }, [navigate]);

  const onConnectAWalletClick = useCallback(() => {
    navigate("/connect-wallet-tablet");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onNavLogo1Click = useCallback(() => {
    navigate("/homepage-tablet");
  }, [navigate]);

  return (
    <div className="rankings-tablet">
      <div className="navigation1">
        <div className="nav-logo2" onClick={onNavLogo1Click}>
          <div className="nav-logo3">
            <img className="logo-icon1" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu1">
          <img className="burger-menu" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="headline-subhead3">
        <div className="headline-subhead4">
          <div className="headline1">
            <div className="top-creators1">Top Creators</div>
          </div>
          <div className="subhead1">
            <div className="check-out-top1">
              Check out top ranking NFT artists on the NFT Marketplace.
            </div>
          </div>
        </div>
      </div>
      <div className="tab-bar1">
        <div className="tabs1">
          <div className="tab4">
            <div className="created4">Today</div>
            <div className="wrapper1">
              <div className="div4">302</div>
            </div>
          </div>
          <div className="tab5">
            <div className="created4">This Week</div>
            <div className="wrapper2">
              <div className="div4">67</div>
            </div>
          </div>
          <div className="tab5">
            <div className="created4">This Month</div>
            <div className="wrapper2">
              <div className="div4">67</div>
            </div>
          </div>
          <div className="tab5">
            <div className="created4">All Time</div>
            <div className="wrapper2">
              <div className="div4">67</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rankings">
        <div className="table-header">
          <div className="table-headers">
            <div className="rank-artist">
              <div className="div8">#</div>
              <div className="artist">Artist</div>
            </div>
            <div className="stats-header">
              <div className="change">
                <div className="check-out-top1">Change</div>
              </div>
              <div className="change">
                <div className="check-out-top1">Volume</div>
              </div>
            </div>
          </div>
        </div>
        <ContainerItems
          authorName="1"
          authorId="/avatar-placeholder24@2x.png"
          authorImageId="Marcus Saris"
          onTableItemsContainer1Click={onTableItemsContainer1Click}
        />
        <ContainerItems
          authorName="2"
          authorId="/avatar-placeholder26@2x.png"
          authorImageId="Alfonso Bator"
          propLeft="calc(50% - 6px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer3Click}
        />
        <ContainerItems
          authorName="3"
          authorId="/avatar-placeholder20@2x.png"
          authorImageId="Nolan Mango"
          propLeft="calc(50% - 6px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer5Click}
        />
        <ContainerItems
          authorName="4"
          authorId="/avatar-placeholder23@2x.png"
          authorImageId="Nolan Mango"
          propLeft="calc(50% - 6px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer7Click}
        />
        <ContainerItems
          authorName="5"
          authorId="/avatar-placeholder21@2x.png"
          authorImageId="Miracle Gouse"
          propLeft="calc(50% - 6px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer9Click}
        />
        <ContainerItems
          authorName="6"
          authorId="/avatar-placeholder2@2x.png"
          authorImageId="Alena Septimus"
          propLeft="calc(50% - 6px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer11Click}
        />
        <ContainerItems
          authorName="7"
          authorId="/avatar-placeholder3@2x.png"
          authorImageId="Desirae Lipshutz"
          propLeft="calc(50% - 6px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer13Click}
        />
        <ContainerItems
          authorName="8"
          authorId="/avatar-placeholder22@2x.png"
          authorImageId="Paityn Kenter"
          propLeft="calc(50% - 6px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer15Click}
        />
        <ContainerItems
          authorName="9"
          authorId="/avatar-placeholder25@2x.png"
          authorImageId="Alena Vaccaro"
          propLeft="calc(50% - 6px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer17Click}
        />
        <ContainerItems
          authorName="10"
          authorId="/avatar-placeholder18@2x.png"
          authorImageId="Randy Carder"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer19Click}
        />
        <ContainerItems
          authorName="11"
          authorId="/avatar-placeholder27@2x.png"
          authorImageId="Hanna Culhane"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer21Click}
        />
        <ContainerItems
          authorName="12"
          authorId="/avatar-placeholder4@2x.png"
          authorImageId="Jocelyn Workman"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer23Click}
        />
        <ContainerItems
          authorName="13"
          authorId="/avatar-placeholder28@2x.png"
          authorImageId="Desirae Septimus"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer25Click}
        />
        <ContainerItems
          authorName="14"
          authorId="/avatar-placeholder1@2x.png"
          authorImageId="Ahmad Franci"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer27Click}
        />
        <ContainerItems
          authorName="15"
          authorId="/avatar-placeholder19@2x.png"
          authorImageId="Maria Bergson"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer29Click}
        />
        <ContainerItems
          authorName="16"
          authorId="/avatar-placeholder17@2x.png"
          authorImageId="Ahmad Geidt"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer31Click}
        />
        <ContainerItems
          authorName="17"
          authorId="/avatar-placeholder29@2x.png"
          authorImageId="Skylar Mango"
          propLeft="calc(50% - 11px)"
          propBorderRadius="120px"
          onTableItemsContainer1Click={onTableItemsContainer33Click}
        />
        <ContainerItems
          authorName="18"
          authorId="/avatar-placeholder26@2x.png"
          authorImageId="Rayna Geidt"
          propLeft="calc(50% - 11px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer35Click}
        />
        <ContainerItems
          authorName="19"
          authorId="/avatar-placeholder24@2x.png"
          authorImageId="Marley Rosser"
          propLeft="calc(50% - 11px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer37Click}
        />
        <ContainerItems
          authorName="20"
          authorId="/avatar-placeholder21@2x.png"
          authorImageId="Tatiana Philips"
          propLeft="calc(50% - 11px)"
          propBorderRadius="100px"
          onTableItemsContainer1Click={onTableItemsContainer39Click}
        />
      </div>
      <ContainerFooter
        productIds="/logo.svg"
        productDimensions="/discordlogo1.svg"
        productIdsAndDimensions="/youtubelogo1.svg"
        onDiscordLogoIconClick={onDiscordLogoIconClick}
        onYoutubeLogoIconClick={onYoutubeLogoIconClick}
        onTwitterLogoIconClick={onTwitterLogoIconClick}
        onInstagramLogoIconClick={onInstagramLogoIconClick}
        onMarketplaceTextClick={onMarketplaceTextClick}
        onConnectAWalletClick={onConnectAWalletClick}
        onButtonContainerClick={onButtonContainerClick}
      />
    </div>
  );
};

export default RankingsTablet;
