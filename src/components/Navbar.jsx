import React from "react";
import styled from "styled-components";

import foodYummy from "../assets/FoodYummy.png";
const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        <img src={foodYummy} alt="foodYummy" />
      </div>
      <ul className="links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>

        <li>
          <a href="#services">
            Nossos Serviços
          </a>
        </li>

        <li>
          <a href="#portfolio">
            Portfolio
          </a>
        </li>

        <li>
          <a href="#testimonials">
            Testemunhas
          </a>
        </li>

        <li>
          <a href="#products">
            Produtos
          </a>
        </li>

        <li>
          <a href="#newsletter">
            NewsLetter
          </a>
        </li>

      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  
  .brand {
    img{
      margin-top: 1rem;
      cursor: pointer;
    }

    .toggle {
      display: none;
    }
  }

  .links{
    display: flex;
    list-style-type: none;
    gap: 2rem
  }

  li{
    a{
      color: #fc4958;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      &:hover{
        color: #f9c74f;
      }
    }
    .active{
      color: #f9c74f; 
    }
  }
`;

export default Navbar;
