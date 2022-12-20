import React from "react";
import style from "./nav.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className={style.Upper1}>
        <div className={style.sideDiv}>
          <h3>NEW TO YOOX</h3>
          <hr />
          <div>
            <p>Shopping Guide</p>
            <p>iPhone/iPad/Android</p>
            <p>Browser all Designers</p>
            <p>Browser all Categories</p>
            <p>Gift delivery</p>
          </div>
        </div>
        <div className={style.sideDiv}>
          <h3>HELP</h3>
          <hr />
          <div>
            <p>Shopping times and costs</p>
            <p>Payment and web security</p>
            <p>Product Quality</p>
            <p>Track your order</p>
            <p>Return and refunds</p>
            <p>FAQs</p>
            <p>Size Guide</p>
          </div>
        </div>
        <div className={style.newsDiv}>
          <div>
            <HiOutlineMail className={style.emailIcon} />
            <h3>Smart Point</h3>
            <p>
              Sign up for the newsletter and discover the latest arrivals and
              promotions
            </p>
            <input type="text" placeholder="INSERT YOUR E-MAIL ADDRESS" />
            <div className={style.radioDiv}>
              <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row" justify="center">
                  <Radio colorScheme="gray" value="1">
                    Woman
                  </Radio>
                  <Radio colorScheme="gray" value="2">
                    Man
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
            <div className={style.checkDiv}>
              <input type="checkbox" />
              <i>
                I consent to receive YOOX newsletters via email. For further
                information, please consult the Privacy Policy.
              </i>
            </div>
            <Button colorScheme="blackAlpha" variant="solid">
              <NavLink to="/register">SIGN UP</NavLink>
            </Button>
          </div>
        </div>
        <div className={style.sideDiv}>
          <h3>MYOOX</h3>
          <hr />
          <div>
            <p>Login</p>
            <p>My orders</p>
            <p>My Details</p>
            <p>Dreambox</p>
            <p>Premiere</p>
          </div>
        </div>
        <div className={style.sideDiv}>
          <h3>ABOUT US</h3>
          <hr />
          <div>
            <p>Company Info</p>
            <p>Press</p>
            <p>Affiliation</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
      <div className={style.mid2}>
        <div className={style.socialDiv}>
          <h3>CONNECT WITH US</h3>

          <FaFacebookF className={style.fb} />
          <FaTwitter className={style.twit} />
          <FaInstagram className={style.insta} />
          <FaYoutube className={style.yt} />
          <FaPinterestP className={style.pinr} />
        </div>
        <div className={style.socialDiv1}>
          <FcSmartphoneTablet />
          <a href="https://www.yoox.com/in/project/mobile_apps?">
            <h3>DOWNLOAD THE APP FOR iOS/ANDROID</h3>
          </a>
        </div>
      </div>
      <div className={style.lower3}>
        <h6>
          POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX
          NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE #
          401/I/526
        </h6>
        <p>LEGAL AREA / PRIVACY POLICY</p>
      </div>
    </div>
  );
};

export default Footer;
