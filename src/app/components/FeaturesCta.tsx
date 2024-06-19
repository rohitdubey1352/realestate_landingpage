import React from "react";
import Book from "../Images/book.svg";
import Plan from "../Images/plan.svg";
import Key from "../Images/key.svg";
import Area from "../Images/area.png";
import Image from "next/image";

export default function FeaturesCta() {
  return (
    <>
      <div className="featuresCta relative p-5">
        <div className="cards grid gap-4 grid-cols-2 sm:grid-cols-4 place-items-center text-center">
          <div className="book">
            <Image src={Book} width={50} height={50} alt="bookNow" />
            <p>BOOK WITH</p>
            <h2>ONLY 20%</h2>
          </div>
          <div className="plan">
            <Image src={Plan} width={50} height={50} alt="bookNow" />
            <p>PAYMENT PLAN</p>
            <h2>EASY 70/30</h2>
          </div>
          <div className="handover">
            <Image src={Key} width={50} height={50} alt="bookNow" />
            <p>HANDOVER ON</p>
            <h2>Q2 2027</h2>
          </div>
          <div className="area">
            <Image src={Area} width={50} height={50} alt="bookNow" />
            <p>AREA STARTS FROM</p>
            <h2>700 SQMT</h2>
          </div>
        </div>
      </div>
    </>
  );
}
