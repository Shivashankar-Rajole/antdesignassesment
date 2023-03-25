import { useCallback } from "react";
import "./AnimakidContainer.css";

const AnimakidContainer = () => {
  const onGlobeIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  return (
    <div className="artist-info11">
      <div className="artist-info-section2">
        <div className="artist-name-button">
          <div className="artist-info12">
            <div className="artist-name7">Animakid</div>
            <div className="stats4">
              <div className="total-sale8">
                <b className="k12">250k+</b>
                <div className="total-sale9">Volume</div>
              </div>
              <div className="total-sale8">
                <b className="k12">50+</b>
                <div className="total-sale9">NFTs Sold</div>
              </div>
              <div className="total-sale8">
                <b className="k12">3000+</b>
                <div className="total-sale9">Followers</div>
              </div>
            </div>
            <div className="bio4">
              <b className="bio5">Bio</b>
              <div className="the-internets-friendliest2">
                The internet's friendliest designer kid.
              </div>
            </div>
            <div className="bio4">
              <b className="links2">Links</b>
              <div className="icons5">
                <img
                  className="globe-icon8"
                  alt=""
                  src="/globe1.svg"
                  onClick={onGlobeIconClick}
                />
                <img
                  className="globe-icon8"
                  alt=""
                  src="/discordlogo4.svg"
                  onClick={onDiscordLogoIconClick}
                />
                <img
                  className="globe-icon8"
                  alt=""
                  src="/youtubelogo1.svg"
                  onClick={onYoutubeLogoIconClick}
                />
                <img
                  className="globe-icon8"
                  alt=""
                  src="/twitterlogo1.svg"
                  onClick={onTwitterLogoIconClick}
                />
                <img
                  className="globe-icon8"
                  alt=""
                  src="/instagramlogo1.svg"
                  onClick={onInstagramLogoIconClick}
                />
              </div>
            </div>
          </div>
          <div className="ctas2">
            <div className="button78">
              <img className="copy-icon2" alt="" src="/copy1.svg" />
              <div className="button79">0xc0E3...B79C</div>
            </div>
            <div className="button80">
              <img className="copy-icon2" alt="" src="/plus.svg" />
              <div className="button79">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimakidContainer;
