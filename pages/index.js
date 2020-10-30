import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeSkills from "../components/HomeSkills";
import HomeServices from "../components/HomeServices";
import HomeContact from "../components/HomeContact";
import { scrollTo } from "../helpers";
import Rellax from "rellax";

const Home = ({ data }) => {
  const bannerAnchorRef = useRef();
  const aboutAnchorRef = useRef();
  const skillsAnchorRef = useRef();
  const servicesAnchorRef = useRef();
  const contactAnchorRef = useRef();

  const [nav, setNav] = useState([]);
  const [rellax, setRellax] = useState();
  useEffect(() => {
    setRellax(
      new Rellax(".homeRellax", {
        center: true,
      })
    );
    setNav([
      {
        label: "Início",
        ref: bannerAnchorRef,
      },
      {
        label: "Sobre",
        ref: aboutAnchorRef,
      },
      {
        label: "Conhecimentos",
        ref: skillsAnchorRef,
      },
      {
        label: "Serviços",
        ref: servicesAnchorRef,
      },
      {
        label: "Contato",
        ref: contactAnchorRef,
      },
    ]);
  }, []);
  return (
    <Layout nav={nav}>
      <div id="bannerAnchor" ref={bannerAnchorRef}>
        <HomeBanner scrollToRef={aboutAnchorRef} />
      </div>
      <div
        className="homeRellax"
        data-rellax-speed="-2"
        id="aboutAnchor"
        ref={aboutAnchorRef}
      >
        <HomeAbout
          style={{
            marginTop: "calc(-1 * var(--header-height))",
          }}
          contactAnchorRef={contactAnchorRef}
        />
      </div>
      <div id="skillsAnchor" ref={skillsAnchorRef}>
        <HomeSkills
          style={{
            marginTop: 64,
          }}
        />
      </div>
      <div
        className="homeRellax"
        data-rellax-speed="2"
        id="servicesAnchor"
        ref={servicesAnchorRef}
      >
        <HomeServices
          style={{
            marginTop: 64,
          }}
          contactAnchorRef={contactAnchorRef}
        />
      </div>
      <div id="contactAnchor" ref={contactAnchorRef}>
        <HomeContact
          style={{
            marginTop: 64,
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;
