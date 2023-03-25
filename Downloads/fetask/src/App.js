import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageDesktop from "./pages/HomepageDesktop";
import RankingsDesktop from "./pages/RankingsDesktop";
import MarketplaceDesktop from "./pages/MarketplaceDesktop";
import ConnectWalletDesktop from "./pages/ConnectWalletDesktop";
import NFTPageDesktop from "./pages/NFTPageDesktop";
import ArtistPageDesktop from "./pages/ArtistPageDesktop";
import CreateAccountDesktop from "./pages/CreateAccountDesktop";
import HomepageTablet from "./pages/HomepageTablet";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      
      case "/rankings-desktop":
        title = "";
        metaDescription = "";
        break;
      
      case "/marketplace-desktop":
        title = "";
        metaDescription = "";
        break;
     
      case "/connect-wallet-desktop":
        title = "";
        metaDescription = "";
        break;
      
      case "/nft-page-desktop":
        title = "";
        metaDescription = "";
        break;
     
      case "/artist-page-desktop":
        title = "";
        metaDescription = "";
        break;
     
      case "/create-account-desktop":
        title = "";
        metaDescription = "";
        break;
     
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageDesktop />} />
    
      <Route path="/rankings-desktop" element={<RankingsDesktop />} />
   
     
   
      <Route
        path="/connect-wallet-desktop"
        element={<ConnectWalletDesktop />}
      />
  
      <Route path="/nft-page-desktop" element={<NFTPageDesktop />} />
   
    
     
      <Route
        path="/create-account-desktop"
        element={<CreateAccountDesktop />}
      />
     
    </Routes>
  );
}
export default App;
