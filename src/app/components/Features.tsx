import React from "react";
import Logo from "../Images/features_logo.svg";
import Image from "next/image";
import Features_card from "./Features_card";
import Circle1 from "../Images/circle1.svg";
import Circle2 from "../Images/circle2.svg";
import Circle3 from "../Images/circle3.svg";
import Circle4 from "../Images/circle4.svg";

export default function Features() {
  return (
    <>
      <section className="features relative flex justify-center items-center flex-col py-5">
        <Image
          src={Logo}
          width={180.76}
          height={77}
          className="featuresLogo my-5"
          alt="logo"
        />
        <div className="features_content text-center">
          <h1 className="uppercase text-sky-900">Features & Amenities</h1>
          <p className="text-slate-500 text-sm my-3">
            Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront <br /> lifestyle. Its maritime-inspired
            amenities provide an unmatched seaside experience, offering a <br />{" "}
            life of tranquility and bliss.
          </p>
        </div>
        <div className="features_cards my-5 grid grid-cols-2 gap-6 sm:gap-2 md:gap-10 lg:gap-16 xl:gap-20 md:grid-cols-4 place-items-center relative text-center">
          <Features_card heading="Floating Pools" url={Circle1} />
          <Features_card heading="Spacious Cabins Like Rooms" url={Circle2} />
          <Features_card heading="Sea Facing Swimming Pools" url={Circle3} />
          <Features_card heading="Gymnasium & Fitness" url={Circle4} />
        </div>
      </section>
      <div className="terms text-right">
        <p className="text-xs text-slate-500">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>
        <div className="buttons flex justify-end gap-8 py-4">
          <button className="py-3 px-6 text-sm rounded-md border-solid border-2 bg-blue-900 text-white hover:bg-white hover:text-blue-500 hover:border-sky-500">
            EXTERIORS
          </button>
          <button className="py-3 px-6 text-sm rounded-md border-solid border-2 border-sky-700 hover:bg-blue-900 hover:text-white">
            INTERIORS
          </button>
        </div>
      </div>
    </>
  );
}
