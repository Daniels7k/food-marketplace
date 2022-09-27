import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";


const Products = () => {
  const data = [
    {
      image: product1,
      name: "Hamburguer de frango",
      price: "R$ 22,40",
    },
    {
      image: product2,
      name: "Torrada",
      price: "R$ 5,50",
    },
    {
      image: product3,
      name: "Sanduíche de Ovo",
      price: "R$ 8,00",
    },

    {
      image: product4,
      name: "Bolo de Framboesa",
      price: "$12,50",
    },
  ];
  return ( 
    <Section>
      <div className="title">
        <h1>
          <span>Favorito</span> O tempo todo!
        </h1>
      </div>

      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="Product" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>Sua descrição aqui</p>
              <button>Compre agora!</button>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`
  ${TitleStyles}

  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      ${imageZoomEffect}
      h3{
        color: #fc4958;
      }

      p{
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1ch;
      }

      .image{
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img{
          height: 20rem;
          width: 15rem;
        }
      }

      button{
        border: none;
        padding: 1rem 4rem;
        color: white;
        font-size: 1.4rem;
        border-radius: 4rem;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d05);
        &:hover{
          background: linear-gradient(to left, #fc4958, #e85d05);
        }
      }
    }
  }
`;

export default Products