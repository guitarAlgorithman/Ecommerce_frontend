import React from "react";
import Image from "react-bootstrap/Image";
import "./CSS/footer.css";

export const Footer = () => {
  return (
    <div className="containerB">
      <div className="content m-2">
        <footer className="row">
          <div className="sozial col-xs-6 col-sm-6 col-sm-push-6">
            <ul className="row">
              <li className="col-sm-2">
                <a href="#">
                  <Image
                    className="logo"
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
                  ></Image>
                </a>
              </li>
              <li className="col-sm-2">
                <a href="#">
                  <Image
                    className="logo"
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
                  ></Image>
                </a>
              </li>
              <li className="col-sm-2">
                <a href="#">
                  <Image
                    className="logo"
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
                  ></Image>
                </a>
              </li>
              <li className="col-sm-2">
                <a href="#">
                  <Image
                    className="logo"
                    src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png"
                  ></Image>
                </a>
              </li>
            </ul>
          </div>

          <div className="copyright col-xs-12 col-sm-3 col-sm-pull-6">
            <p> &copy; Curso Full Stack UDD 2022-2023 </p>
          </div>

          <div className="impressum col-xs-12 col-sm-3 col-sm-pull-6">
            <p> Teléfono +56 XXXX XXXX </p>
            <p> Dirección: Calle 1 XXXXX Chile </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
