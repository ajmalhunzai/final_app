import React from "react";
import {
  Conatiner,
  ContainerWarapper,
  FlexCard,
  Heading,
  Ul,
  Li,
  NavLinks,
  Sicon,
  Icon,
  SocialIcons,
  IconList,
  Copyright,
} from "./ContactElement";
import logo from "../images/logo-nav.png";
import facebook from "../images/Social/fb.svg";
import inst from "../images/Social/insta.svg";
import linkedin from "../images/Social/linkedin.svg";
import telegram from "../images/Social/telegram.svg";
import twitter from "../images/Social/twitter.svg";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
const Contact = () => {
  return (
    <Conatiner id="Contact">
      <ContainerWarapper style={{ borderBottom: "3px solid black" }}>
        <FlexCard>
          <h3>
            <img src={logo} alt={"sdjfha"} style={{ width: "150px" }} />
          </h3>
        </FlexCard>
        <FlexCard>
          <h3>Company</h3>

          <div>
            <p>
              <b>About Us FAQ</b>
            </p>
            <p>
              <b>Contact</b>
            </p>
          </div>
        </FlexCard>
        <FlexCard>
          <h3>Legal</h3>

          <div>
            <p>
              <b>
                Privacy Policy Terms <br></br>
              </b>
              <b>and Conditions</b>
            </p>
            <p>
              <b>Contact</b>
            </p>
          </div>
        </FlexCard>

        <FlexCard>
          <h3>Contact</h3>
          <Icon>
            <a herf="mailto:asimmir1998@gmail.com" target="_blank">
              <AiOutlineMail />
              asimmir1998@gmail.com
            </a>
          </Icon>
          <br /> <br />
          <Icon>
            <a
              rel="noreferrer"
              href="tel:+923554741334"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              <AiFillPhone />
              +923554741334{" "}
            </a>{" "}
          </Icon>
          <SocialIcons>
            <IconList>
              <Sicon href="" style={{ fontSize: "40px" }}>
                <CiFacebook />
              </Sicon>
            </IconList>
            <IconList>
              <Sicon href="" style={{ fontSize: "40px" }}>
                {" "}
                <CiInstagram />
              </Sicon>
            </IconList>
            <IconList>
              <Sicon href="" style={{ fontSize: "40px" }}>
                <CiLinkedin />
              </Sicon>
            </IconList>
            <IconList>
              <Sicon herf="" style={{ fontSize: "40px" }}>
                {" "}
                <TbBrandTelegram />
              </Sicon>
            </IconList>
            <IconList>
              <Sicon href="" style={{ fontSize: "40px" }}>
                <CiTwitter />
              </Sicon>
            </IconList>
          </SocialIcons>
        </FlexCard>
      </ContainerWarapper>
      <br />
      <Copyright>
        Copyright &#169; Himalayas {new Date().getFullYear()}. All Right
        Reserved.
      </Copyright>
    </Conatiner>
  );
};

export default Contact;
