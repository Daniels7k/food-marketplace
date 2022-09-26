import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";

import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";

const Services = () => {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">O que fazemos?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod quo
          voluptates aut ad ea a possimus quisquam magnam totam, commodi magni
          corporis eius, error corrupti ipsam esse sunt iure.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services1} alt="services1" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            <span>Rem repudiandae</span>, tenetur totam dignissimos pariatur
            perspiciatis iure nisi, a dicta maiores culpa nemo modi unde,
            eligendi praesentium. Fugit quas voluptas facere!
          </p>
          <button>Saiba mais</button>
        </div>

        <div className="service">
          <img src={Services2} alt="services2" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            <span>Rem repudiandae</span>, tenetur totam dignissimos pariatur
            perspiciatis iure nisi, a dicta maiores culpa nemo modi unde,
            eligendi praesentium. Fugit quas voluptas facere!
          </p>
          <button>Saiba mais</button>
        </div>

        <div className="service">
          <img src={Services3} alt="services3" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            <span>Rem repudiandae</span>, tenetur totam dignissimos pariatur
            perspiciatis iure nisi, a dicta maiores culpa nemo modi unde,
            eligendi praesentium. Fugit quas voluptas facere!
          </p>
          <button>Saiba mais</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles}
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    
    .service{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;

      img{
        height: 2.8rem;
      }

      p{
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1;
        
        span{
          color: #fc4958;
        }
      }

      button{
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
          background-color: #f9c74f
        }
      }
    }
  }
`;

export default Services;
