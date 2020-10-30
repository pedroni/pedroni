import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Scrollspy from "react-scrollspy";
import { scrollTo } from "../helpers";

export const Header = ({ nav }) => {
  const router = useRouter();

  const [small, setSmall] = useState(false);

  const [activeLink, setActiveLink] = useState("");

  const handleScroll = useCallback((ev) => {
    if (window.scrollY > 120) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader className={small ? "small" : undefined}>
      <div>
        <Link href="/">
          <StyledHeaderLogo>
            <img src="/img/isotipo.svg" alt="" />
          </StyledHeaderLogo>
        </Link>
        <StyledHeaderNav>
          <Scrollspy
            items={nav.map(({ ref }) => ref.current.id)}
            className="pages"
            currentClassName="active"
            offset={-100}
          >
            {nav.map((link) => (
              <li
                key={link.label}
                onClick={(ev) => {
                  ev.preventDefault()
                  scrollTo(link.ref);
                }}
              >
                <a href={`#${link.ref.current.id}`}>{link.label}</a>
              </li>
            ))}
          </Scrollspy>
          <ul className="social">
            <li>
              <a target="blank" href="http://github.com/pedroni">
                <img width="19" height="19" src="/icon/github.svg" alt="" />
              </a>
            </li>
            
            <li>
              <a
                target="blank"
                href="https://www.linkedin.com/in/lucas-pedroni-422460164/"
              >
                <img width="17" height="17" src="/icon/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a target="blank" href="mailto:hello@lucaspedroni.com.br">
                <img width="19" height="14" src="/icon/mail.svg" alt="" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://wa.me/5554984256224">
                <img width="19" height="19" src="/icon/whatsapp.svg" alt="" />
              </a>
            </li>
          </ul>
        </StyledHeaderNav>
      </div>
    </StyledHeader>
  );
};

const StyledHeaderLogo = styled.a`
  display: block;
  width: calc(var(--header-height) * 0.8);
  height: 100%;
  transition: 0.3s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

const StyledHeader = styled.header`
  background-image: linear-gradient(180deg, black, transparent);
  z-index: 100;
  height: var(--header-height);
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transition: 0.3s;
  &.small {
    height: calc(var(--header-height) * 0.8);
    background-color: black;
    box-shadow: 0 5px 30px black;
    ${StyledHeaderLogo} {
      width: calc(var(--header-height) * 0.6);
    }
  }

  & > div {
    width: var(--container-width);
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledHeaderNav = styled.nav`
  height: 100%;
  border-bottom: 1px solid rgba(112, 112, 112, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  ul.pages {
    display: flex;
    height: 100%;
    align-items: center;
    list-style: none;
    li {
      height: 100%;
      display: flex;
    }
    li:first-child a {
      margin-left: 0;
    }
    li {
      a {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        margin-left: 23px;
        margin-right: 23px;
        padding: 0 2px;
        transition: 0.3s;
        height: 100%;
        width: auto;
        display: inline-flex;
        place-items: center;
        place-content: center;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          transition: 0.3s;
          width: 0px;
          height: 1px;
          background-color: transparent;
        }
        &:hover {
          color: white;
          &::before {
            background-color: white;
            width: 100%;
          }
        }
      }
      &.active {
        a {
          color: var(--color-primary-light);
          font-weight: 600;
          &::before {
            width: 100%;
            background-color: var(--color-primary-light);
            height: 2px;
          }
        }
      }
    }

    @media(max-width: 1280px) {
      display:none;
    }
  }
  ul.social {
    list-style: none;
    display: flex;
    align-items: center;
    a {
      width: 36px;
      height: 36px;
      display: inline-flex;
      place-items: center;
      place-content: center;
      border-radius: 50%;

      margin-top: 3px;
      transition: 0.3s;
      &:hover {
        background-color: black;
        filter: brightness(1.2);
      }
    }
  }
`;

export default Header;
