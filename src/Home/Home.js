import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/manishbanjare/Prime_Vedio_banner_1242x450.png"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Amazon Basics Multipurpose Copy Printer Paper, 8.5' x 11', 20lb, Pack of 3 Ream (1500 Sheets), 92 Bright, white"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/714PH0VUSIL._AC_UL254_SR254,254_.jpg"></Product>
          <Product
            id="49538094"
            title="Apple 2022 MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 256GB Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone and iPad; Space Gray"
            price={1049.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61L5QgPvgqL._AC_UL254_SR254,254_.jpg"></Product>
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Baseus Portable Charger, PD 20W Power Bank Fast Charging, 10000mAh Slim Battery Pack Charger Portable with USB C in&amp;Out for iPhone 15 14 13 12 11 Samsung S23 S22 Google LG iPad etc."
            price={19.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Q073fzxtL._AC_UL254_SR254,254_.jpg"></Product>
          <Product
            id="23445930"
            title="The Sausage Maker - North American Natural Hog Casings for Home Sausage Making, Make 25 lbs. of Standard Italian, Polish and Bratwurst at about ~1.5” Stuffed Diameter Links (1)"
            price={10.97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61KauqH0HpS._AC_UL254_SR254,254_.jpg"></Product>
          <Product
            id="3254354345"
            title="Car Tire Valve Stem Caps,Tire Valve Stem Caps Accessory,Universal Stem Covers Accessory Fit for Cadillac"
            price={6.49}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Acoiu3VQL._AC_UL254_SR254,254_.jpg"></Product>
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Handicap Placard Holder for Auto, Wisdompro Disabled Parking Permit Sign Protector for Car Sun Visor with Note Paper Slot, Pen Holder and Elastic Strap - Black"
            price={9.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81oIm0L+wzL._AC_UL254_SR254,254_.jpg"></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
