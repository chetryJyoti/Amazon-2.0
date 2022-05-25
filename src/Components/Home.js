import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/Under-499/Under_499_Tallhero_3000x1200._CB636754718_.jpg"
          alt="home_images"
        ></img>

        <div className="home_row">
          <Product
            id="1"
            title="Lava Agni 5G |64 MP AI Quad Camera| (8GB RAM/128 GB ROM)| 5000 mAh Battery "
            price={10.2}
            img="https://m.media-amazon.com/images/I/61VmVHQxxxL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="OnePlus Nord CE 2 5G (Bahamas Blue, 6GB RAM, 128GB Storage) "
            price={23.3}
            img="https://m.media-amazon.com/images/I/51BJYsMmF8L._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="realme narzo 50 (Speed Black, 4GB RAM+64GB Storage) Helio G96 Processor "
            price={23.3}
            img="https://m.media-amazon.com/images/I/71UcgVe9x1L._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="OPPO A15s (Fancy White, 4GB, 128GB Storage) AI Triple Camera  "
            price={10.3}
            img="https://m.media-amazon.com/images/I/71TdXNLT1FL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="
            Apple iPhone 13 (128GB) - Blue "
            price={100.3}
            img="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Apple iPhone XR (128GB) - (Product) RED"
            price={50}
            img="https://m.media-amazon.com/images/I/51YXG1bDM5L._SL1024_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
