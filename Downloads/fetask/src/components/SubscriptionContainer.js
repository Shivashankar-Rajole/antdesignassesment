import { useCallback } from "react";
import "./SubscriptionContainer.css";

const SubscriptionContainer = () => {
  const onButtonContainer4Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="subscribe-widget4">
     
    </div>
  );
};

export default SubscriptionContainer;
