import Image from "next/image";
import React from "react";

interface FeaturesCardProps {
  url: string;
  heading: string;
}

const Features_card: React.FC<FeaturesCardProps> = (props) => {
  return (
    <>
      <div className="card relative flex flex-col items-center my-5">
        <Image
          src={props.url}
          width={200}
          height={200}
          className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 -mb-20"
          alt="features_img"
        />
        <div className="box flex items-end pb-2 justify-center relative w-48 sm:w-52 md:w-56 h-40 rounded-lg shadow-2xl">
          <h4 className="text-sky-800 font-bold w-3/5 mx-auto">
            {props.heading}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Features_card;
