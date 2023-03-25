import { useCallback } from "react";
import "./WalletContainer.css";

const WalletContainer = () => {
  const onMetamaskContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onWalletConnectContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onCoinBaseContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="connect-wallet-section2">
      <img
        className="image-placeholder-icon35"
        alt=""
        src="/image-placeholder38@2x.png"
      />
      <div className="connect-a-wallet5">
        <div className="headline-subhead29">
          <div className="headline-subhead30">
            <div className="connect-wallet2">Connect Wallet</div>
            <div className="choose-a-wallet2">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </div>
          </div>
        </div>
        <div className="wallet-options2">
          <div className="metamask8" onClick={onMetamaskContainerClick}>
            <img className="metamask-icon2" alt="" src="/metamask1.svg" />
            <div className="metamask9">Metamask</div>
          </div>
          <div className="metamask8" onClick={onWalletConnectContainerClick}>
            <img className="metamask-icon2" alt="" src="/walletconnect1.svg" />
            <div className="metamask9">Wallet Connect</div>
          </div>
          <div className="metamask8" onClick={onCoinBaseContainerClick}>
            <img className="metamask-icon2" alt="" src="/coinbase1.svg" />
            <div className="metamask9">Coinbase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletContainer;
