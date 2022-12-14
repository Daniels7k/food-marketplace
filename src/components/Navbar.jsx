import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import foodYummy from "../assets/FoodYummy.png";
const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");

  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
      <Nav>
        <div className="brand">
          <img src={foodYummy} alt="foodYummy" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(true)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="#services">Nossos Serviços</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#testimonials">Testemunhas</a>
          </li>

          <li>
            <a href="#products">Produtos</a>
          </li>

          <li>
            <a href="#newsletter">NewsLetter</a>
          </li>
        </ul>
      </Nav>

      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              onClick={() => setNavbarState(false)}
              href="#home"
              className="active"
            >
              Home
            </a>
          </li>

          <li>
            <a onClick={() => setNavbarState(false)} href="#services">
              Nossos Serviços
            </a>
          </li>

          <li>
            <a onClick={() => setNavbarState(false)} href="#portfolio">
              Portfolio
            </a>
          </li>

          <li>
            <a onClick={() => setNavbarState(false)} href="#testimonials">
              Testemunhas
            </a>
          </li>

          <li>
            <a onClick={() => setNavbarState(false)} href="#products">
              Produtos
            </a>
          </li>

          <li>
            <a onClick={() => setNavbarState(false)} href="#newsletter">
              NewsLetter
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;

  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }

    .toggle {
      display: none;
    }
  }

  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
  }

  li {
    a {
      color: #fc4958;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #f9c74f;
      }
    }
    .active {
      color: #f9c74f;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;

      .toggle {
        display: block;
        z-index: 12;
      }
    }
    .links {
        display: none;
      }
  }
`;

const ResponsiveNav = styled.nav`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({state}) => state? "60%" : "0"};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;

  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
export default Navbar;
