import React from "react";
import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

import logo from "../assets/FoodYummy.png";

const Footer = () => {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum?
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>

        <div className="about container">
          <div className="title">
            <h3>Sobre nós</h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            esse facere accusamus id omnis totam praesentium delectus fugit
            laborum dolor quaerat unde, tempora ratione error distinctio nostrum
            laudantium eveniet reiciendis?
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Entre em contato</h3>
          </div>
          <p>55 61 9 9999-9999</p>
          <p>email@email.com</p>
          <p>@insta</p>
          <p>451 norte, São Paulo, Brasil</p>
        </div>
      </Section>
      <LowerFooter>CopyRight © Empresa 2022</LowerFooter>
    </div>
  );
};

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;

    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }

      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }

  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;

    .container{
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) { 
    h2 {
      span {
        display: block;
      }
    }
  }
`;

export default Footer;
