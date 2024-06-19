import Image from "next/image";
import Box from "../Images/Box.png";
import Blur from "../Images/Blue.png";

export default function Hero() {
  return (
    <>
      <section className="hero relative my-5 py-5 flex flex-col items-center justify-between sm:flex-row">
        <div className="hero_content">
          <h2 className="uppercase text-white">
            Harbour Lights <br />
            de <span className="text-sky-400/100">GRESOGONO</span>
          </h2>
          <h4 className="text-white font-bold text-2xl my-3">
            1, 2 & 3 Bedrooms Seaside Apartments <br /> in Dubai Maritime City
          </h4>

          <div className="box py-4 flex items-start flex-col text-white">
            <div className="cta relative my-3">
              <Image src={Box} width={304} height={37} alt="background" />
              <p className="absolute top-2 left-3">
                Rental Returns of <b>UPTO 11%**</b>
              </p>
            </div>
            <div className="cta relative my-3">
              <Image src={Box} width={304} height={37} alt="background" />
              <p className="absolute top-2 left-3">
                Capital Appreciation of <b>UPTO 32%**</b>
              </p>
            </div>
          </div>
        </div>
        <div className="blurBox relative">
          <Image
            src={Blur}
            className="relative w-full"
            width={300}
            height={300}
            alt="img"
          />
          <div className="blurContent relative h-80 flex justify-around items-start flex-col text-white px-5 pt-6 pb-2">
            <h5 className="uppercase">pricing starts from</h5>
            <h1 className="uppercase bottom-5">$ 425,000</h1>
            <h3 className="capitalize pb-4">AED 1.3 million</h3>
            <button className="text-sm bg-sky-500/100 w-60 py-4 px-9 me-3 mb-5 rounded-md font-semibold ">
              GET A PRESENTATION
            </button>
            <span className="absolute bg-slate-800 bottom-14 left-0"></span>
            <h6 className="capitalize tracking-wider w-64 font-normal text-xs">
              Get an Expert’s Presentation of Real <br /> Estate in Dubai for
              Life and investment
            </h6>
          </div>
        </div>
      </section>
    </>
  );
}
