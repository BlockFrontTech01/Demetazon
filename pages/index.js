import { useEffect } from "react";
import Header from "../components/header";

const Demetazon = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative bg-black w-full h-[3646px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-left text-11xl text-white font-inika md:h-[7000px]">
      <div className="absolute my-0 mx-[!important] top-[1538px] left-[-267px] rounded-[50%] bg-darkslategray [filter:blur(100px)] w-[572px] h-[530px] z-[0]" />
      <div className="my-0 mx-[!important] absolute top-[733px] left-[0px] flex flex-row items-center justify-start gap-[777px] z-[1] lg:gap-[666px] md:gap-[60px]">
        <div className="relative w-px h-[38px]" />
        <img
          className="relative w-[416px] h-[423.1px] [&.animate]:animate-[1s_linear_0s_infinite_normal_forwards_pulsate] opacity-[1]"
          alt=""
          src="/ellipse-3.svg"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1974px] left-[-92px] flex flex-row items-center justify-start gap-[777px] z-[2] lg:gap-[666px] md:gap-[60px]">
        <div className="relative w-px h-[38px]" />
        <img
          className="relative w-[416px] h-[423.1px]"
          alt=""
          src="/ellipse-3.svg"
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[2095px] left-[1px] w-[1507px] flex flex-row items-start justify-center gap-[23px] z-[3] text-xs text-gray-300 lg:w-[1200px] md:flex-col md:items-center md:justify-center md:pl-0 md:pt-[2100px] md:pr-[783px] md:box-border">
        <div className="relative w-[403px] h-[275px]">
          <div className="absolute top-[0px] left-[0px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#ff80fa,_#bcb7b3)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[70px] text-mini text-black inline-block w-[39px] h-[22px]">
                SciFi
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">3.2 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">165ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[109px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-11@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[208px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#ff80fa,_#bcb7b3)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[16px] left-[33px] text-mini text-black inline-block w-[110px] h-[22px]">
                Symbiotis Aura
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">5.1 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">111ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[143px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-111@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[390px] h-[275px]">
          <div className="absolute top-[0px] left-[-8px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#ff80fa,_#bcb7b3)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[40px] text-mini text-black inline-block w-[99px] h-[22px]">
                Robot Enemy
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">2.7 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">155 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[143px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-112@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[200px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#ff80fa,_#bcb7b3)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[52px] text-mini text-black inline-block w-[75px] h-[22px]">
                Boy Suttel
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">3.5 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">105 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[127px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-113@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[190px] h-[275px]">
          <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#ff80fa,_#bcb7b3)] w-[190px] h-[78px] overflow-hidden">
            <div className="absolute top-[16px] left-[71px] text-mini text-black inline-block w-[47px] h-[22px]">
              Mole
            </div>
            <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
              <p className="m-0">Floor</p>
              <p className="m-0 text-black">2.7 ETH</p>
            </div>
            <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
              <p className="m-0">Total Volume</p>
              <p className="m-0 text-black">112 ETH</p>
            </div>
            <img
              className="absolute top-[19px] left-[110px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
            alt=""
            src="/image-114@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2616px] left-[5px] w-[1507px] flex flex-row items-start justify-center gap-[23px] z-[4] text-xs text-gray-200 lg:w-[1200px] md:flex-col md:items-center md:justify-center md:pl-0 md:pt-[2700px] md:pr-[789px] md:box-border">
        <div className="relative w-[403px] h-[275px]">
          <div className="absolute top-[0px] left-[0px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_#620000,_#fc0e0e)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[18px] text-mini text-white inline-block w-[143px] h-[22px]">
                sircurtry markings
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-white">2.2 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-white">85 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[151px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-115@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[208px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#620000,_#fc0e0e)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[43px] text-mini text-white inline-block w-[82px] h-[22px]">
                Beat Sabar
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-white">0.7 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-white">31ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[125px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-116@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[390px] h-[275px]">
          <div className="absolute top-[0px] left-[-8px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#620000,_#fc0e0e)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[33px] text-mini text-white inline-block w-[114px] h-[22px]">
                Star Command
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-white">1.9 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-white">105 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[143px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-117@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[200px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#620000,_#fc0e0e)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[17px] left-[43px] text-mini text-white inline-block w-[90px] h-[22px]">
                Board Night
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-white">0.8 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-white">46 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[133px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-118@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[190px] h-[275px]">
          <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(89.94deg,_#620000,_#fc0e0e)] w-[190px] h-[78px] overflow-hidden">
            <div className="absolute top-[16px] left-[59px] text-mini text-white inline-block w-[66px] h-[22px]">
              Abstract
            </div>
            <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
              <p className="m-0">Floor</p>
              <p className="m-0 text-white">3,5 ETH</p>
            </div>
            <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
              <p className="m-0">Total Volume</p>
              <p className="m-0 text-white">140 ETH</p>
            </div>
            <img
              className="absolute top-[19px] left-[121px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
            alt=""
            src="/image-119@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[26px] left-[-2px] w-[870px] flex flex-row items-end justify-start gap-[624px] z-[5] md:gap-[100px]">
        <div className="relative w-[17px] h-[30px]" />
        <img
          className="relative w-[416px] h-[357.8px] [&.animate]:animate-[20s_linear_0s_infinite_normal_forwards_rotate-center] opacity-[1]"
          alt=""
          src="/ellipse-2.svg"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1075px] left-[0px] flex flex-row items-center justify-start gap-[357px] z-[7] lg:gap-[0px] md:pl-0 md:pr-0 md:box-border">
        <div className="relative w-px h-[33px] z-[0]" />
        <img
          className="relative w-[416px] h-[423.1px] z-[1] md:w-[416px]"
          alt=""
          src="/ellipse-4.svg"
        />
        <div className="my-0 mx-[!important] absolute top-[-135px] left-[0px] w-[1508px] flex flex-row items-end justify-center gap-[150px] z-[2] lg:w-[1200px] md:w-[425px] md:flex-col md:gap-[7px] md:pl-[7px] md:pt-[1100px] md:box-border">
          <div className="relative w-[403px] h-[407px]">
            <div className="absolute top-[-11px] left-[0px] rounded-3xs bg-gray-100 w-[198px] h-11">
              <b className="absolute top-[1px] left-[19px] inline-block w-[163px] h-[21px]">
                Top NFT’s
              </b>
            </div>
            <div className="absolute top-[44px] left-[0px] w-[403px] h-[363px] text-mini text-black">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
                <img
                  className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                  alt=""
                  src="/frame-277@2x.png"
                />
                <div className="absolute top-[20px] left-[69px] text-lgi inline-block w-[133px] h-[29px]">
                  The Captainz
                </div>
                <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                  Floor
                </div>
                <div className="absolute top-[38px] left-[252px] inline-block w-16 h-[18px]">
                  4.60 ETH
                </div>
                <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  401 ETH
                </div>
                <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  Volume
                </div>
                <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              </div>
              <div className="absolute top-[74px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
                <img
                  className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                  alt=""
                  src="/image-4@2x.png"
                />
                <div className="absolute top-[10px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                  Bored Ape Yatch Club
                </div>
                <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                  Floor
                </div>
                <div className="absolute top-[38px] left-[248px] inline-block w-[67px] h-[18px]">
                  30.27 ETH
                </div>
                <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  598 ETH
                </div>
                <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  Volume
                </div>
                <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
                <img
                  className="absolute top-[28px] left-[167px] w-[15px] h-[15px] overflow-hidden object-cover"
                  alt=""
                  src="/frame-268@2x.png"
                />
              </div>
              <img
                className="absolute top-[26px] left-[190px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
              <div className="absolute top-[148px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
                <img
                  className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                  alt=""
                  src="/frame-2771@2x.png"
                />
                <div className="absolute top-[23px] left-[62px] text-lgi inline-block w-[151px] h-[29px]">
                  Pudgy Penguins
                </div>
                <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                  Floor
                </div>
                <div className="absolute top-[38px] left-[254px] inline-block w-[67px] h-[18px]">
                  5.69 ETH
                </div>
                <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  355 ETH
                </div>
                <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  Volume
                </div>
                <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
                <img
                  className="absolute top-[30px] left-[205px] w-[15px] h-[15px] overflow-hidden object-cover"
                  alt=""
                  src="/frame-268@2x.png"
                />
              </div>
              <div className="absolute top-[222px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
                <img
                  className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                  alt=""
                  src="/frame-2772@2x.png"
                />
                <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[131px] h-[29px]">
                  Project AEON
                </div>
                <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                  Floor
                </div>
                <div className="absolute top-[38px] left-[260px] inline-block w-[67px] h-[18px]">
                  0.13 ETH
                </div>
                <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  328 ETH
                </div>
                <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  Volume
                </div>
                <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
                <img
                  className="absolute top-[25px] left-[190px] w-[15px] h-[15px] overflow-hidden object-cover"
                  alt=""
                  src="/frame-268@2x.png"
                />
              </div>
              <div className="absolute top-[296px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
                <img
                  className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                  alt=""
                  src="/image-5@2x.png"
                />
                <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                  DeGods
                </div>
                <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                  Floor
                </div>
                <div className="absolute top-[38px] left-[260px] inline-block w-16 h-[18px]">
                  3.33 ETH
                </div>
                <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                  317 ETH
                </div>
                <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                  Volume
                </div>
                <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
                <img
                  className="absolute top-[26px] left-[137px] w-[15px] h-[15px] overflow-hidden object-cover"
                  alt=""
                  src="/frame-268@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="relative w-[403px] h-[363px] text-mini text-black">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="absolute top-[9px] left-[69px] text-lgi inline-block w-[105px] h-[29px]">
                Mutant Ape Yatch Club
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-16 h-[18px]">
                5.74 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                283 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
            </div>
            <div className="absolute top-[74px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                alt=""
                src="/image-7@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                Humanoid
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-16 h-[18px]">
                2.18 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                271 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[27px] left-[167px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[28px] left-[175px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
            <div className="absolute top-[148px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                alt=""
                src="/image-8@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-32 h-[29px]">
                Crypto Punks
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-16 h-[18px]">
                2,32 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                250 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[28px] left-[183px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <div className="absolute top-[222px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                alt=""
                src="/image-9@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                Async Art
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-16 h-[18px]">
                0,01 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                200 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[26px] left-[159px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <div className="absolute top-[296px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 object-cover"
                alt=""
                src="/image-10@2x.png"
              />
              <div className="absolute top-[19px] left-[64px] text-lgi inline-block w-[70px] h-[29px]">
                Azuki
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
                6.2ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                149 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[26px] left-[126px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[121.8px] left-[0px] w-[314.8px] h-[653.9px] [&.animate]:animate-[10s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1] z-[8] md:w-[300px] md:h-[800px]"
        alt=""
        src="/ellipse-1.svg"
        data-animate-on-scroll
      />
      <div className="my-0 mx-[!important] absolute top-[447px] left-[0px] w-[1508px] flex flex-row items-end justify-center gap-[150px] z-[9] lg:w-[1200px] md:w-[425px] md:flex-col md:gap-[7px] md:pl-[7px] md:pt-[600px] md:box-border">
        <div className="relative w-[403px] h-[407px]">
          <div className="absolute top-[-11px] left-[0px] rounded-3xs bg-gray-100 w-[198px] h-11">
            <b className="absolute top-[1px] left-[19px] inline-block w-[163px] h-[21px]">
              Trending
            </b>
          </div>
          <div className="absolute top-[44px] left-[0px] w-[403px] h-[363px] text-mini text-black">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-2773@2x.png"
              />
              <div className="absolute top-[20px] left-[69px] text-lgi inline-block w-[105px] h-[29px]">
                Silhouette
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
                1.1 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                35 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
            </div>
            <div className="absolute top-[74px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-2774@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                Dark Vador
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
                2.4 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                15 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[28px] left-[167px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <div className="absolute top-[148px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-2775@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                Chibi Boy
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
                4.1 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                65 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[28px] left-[152px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <div className="absolute top-[222px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-2776@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                Cyber Punk
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
                2.3 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                66 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[25px] left-[167px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <div className="absolute top-[296px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
              <img
                className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
                alt=""
                src="/frame-2777@2x.png"
              />
              <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
                Cat Woman
              </div>
              <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
                Floor
              </div>
              <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
                0.8 ETH
              </div>
              <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
                30 ETH
              </div>
              <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
                Volume
              </div>
              <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
              <img
                className="absolute top-[26px] left-[167px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="relative w-[403px] h-[363px] text-mini text-black">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
            <img
              className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
              alt=""
              src="/frame-2778@2x.png"
            />
            <div className="absolute top-[9px] left-[69px] text-lgi inline-block w-[105px] h-[29px]">
              Samurai Robot
            </div>
            <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
              Floor
            </div>
            <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
              2.0 ETH
            </div>
            <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
              45 ETH
            </div>
            <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
              Volume
            </div>
            <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
          </div>
          <div className="absolute top-[74px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
            <img
              className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
              alt=""
              src="/frame-2779@2x.png"
            />
            <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
              Humanoid
            </div>
            <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
              Floor
            </div>
            <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
              1.6 ETH
            </div>
            <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
              33 ETH
            </div>
            <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
              Volume
            </div>
            <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
            <img
              className="absolute top-[27px] left-[167px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <div className="absolute top-[148px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
            <img
              className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
              alt=""
              src="/frame-27710@2x.png"
            />
            <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
              Astronaut
            </div>
            <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
              Floor
            </div>
            <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
              2.8 ETH
            </div>
            <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
              25 ETH
            </div>
            <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
              Volume
            </div>
            <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
            <img
              className="absolute top-[28px] left-[159px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <div className="absolute top-[222px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
            <img
              className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
              alt=""
              src="/frame-27711@2x.png"
            />
            <div className="absolute top-[20px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
              Gremlin
            </div>
            <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
              Floor
            </div>
            <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
              0.7 ETH
            </div>
            <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
              21 ETH
            </div>
            <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
              Volume
            </div>
            <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
            <img
              className="absolute top-[25px] left-[147px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <div className="absolute top-[296px] left-[0px] rounded-3xs bg-gray-200 w-[396px] h-[67px] overflow-hidden">
            <img
              className="absolute top-[13px] left-[9px] rounded-3xs w-10 h-10 overflow-hidden object-cover"
              alt=""
              src="/frame-27712@2x.png"
            />
            <div className="absolute top-[9px] left-[62px] text-lgi inline-block w-[105px] h-[29px]">
              Princess Zeida
            </div>
            <div className="absolute top-[10px] left-[268px] inline-block w-[45px] h-[18px]">
              Floor
            </div>
            <div className="absolute top-[38px] left-[260px] inline-block w-[53px] h-[18px]">
              1.1 ETH
            </div>
            <div className="absolute top-[38px] left-[327px] text-center inline-block w-[53px] h-[18px]">
              35 ETH
            </div>
            <div className="absolute top-[10px] left-[327px] text-center inline-block w-[61px] h-[18px]">
              Volume
            </div>
            <div className="absolute top-[-0.5px] left-[323px] box-border w-px h-[68px] border-r-[1px] border-solid border-black" />
            <img
              className="absolute top-[40px] left-[115px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1428px] left-[1px] w-[905px] flex flex-row items-start justify-end gap-[348px] z-[10] text-black lg:gap-[200px] lg:pr-40 lg:box-border md:flex-col md:gap-[0px] md:pl-[60px] md:pt-[1490px] md:pr-0 md:box-border">
        <div className="relative w-[26px] h-[22px]" />
        <div className="relative rounded-3xs [background:linear-gradient(92.12deg,_#fff,_#e9cc8a)] w-[309px] h-11">
          <b className="absolute top-[1px] left-[19px] inline-block w-[290px] h-[21px]">
            Notable Collections
          </b>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1930px] left-[1px] w-[929px] flex flex-row items-start justify-end gap-[348px] z-[11] text-black lg:gap-[0px] lg:pr-[150px] lg:box-border md:flex-col md:pl-[15px] md:pt-[2150px] md:pr-0 md:box-border">
        <div className="relative w-[26px] h-[22px]" />
        <div className="relative rounded-3xs [background:linear-gradient(90.79deg,_#f3b3c3,_#bcb7b3)] w-[379px] h-11">
          <b className="absolute top-[1px] left-[19px] inline-block w-[360px] h-[21px]">
            Top Collector Buys Today
          </b>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2487px] left-[0px] w-[877px] flex flex-row items-start justify-end gap-[348px] z-[12] lg:gap-[0px] lg:pr-[130px] lg:box-border md:flex-col md:pl-[50px] md:pt-[2700px] md:pr-0 md:box-border">
        <div className="relative w-[26px] h-[22px]" />
        <div className="relative rounded-3xs [background:linear-gradient(90.79deg,_#620000,_#fc0e0e)] w-80 h-11">
          <b className="absolute top-[1px] left-[19px] inline-block w-[360px] h-[21px]">
            Trending in gaming
          </b>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3175px] left-[0px] w-[881px] flex flex-row items-start justify-end gap-[348px] z-[13] lg:gap-[0px] lg:pr-[150px] lg:box-border md:flex-col md:pl-[70px] md:pt-[3300px] md:box-border">
        <div className="relative w-[26px] h-[22px] z-[0]" />
        <div className="relative rounded-3xs bg-black shadow-[0px_0px_0px_2px_rgba(255,_255,_255,_0.5)] w-[272px] h-11 overflow-hidden shrink-0 z-[1]">
          <input
            className="[border:none] inline-block font-inika text-[16px] bg-[transparent] absolute top-[9px] left-[10px] font-bold text-white text-left w-[262px] h-[25px]"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[105px] left-[14px] flex flex-row items-center justify-start z-[2] md:flex-col md:pt-[3300px] md:box-border">
          <div className="relative w-[7px] h-[22px]" />
          <div className="rounded-3xs bg-gray-200 overflow-hidden flex flex-col items-start justify-start gap-[20px] md:gap-[20px] md:items-start md:justify-end md:pt-0 md:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1538px] left-[1px] w-[1507px] flex flex-row items-start justify-center gap-[23px] z-[14] text-xs text-gray-300 lg:w-[1200px] md:flex-col md:items-center md:justify-center md:pl-0 md:pt-[1500px] md:pr-[777px] md:box-border">
        <div className="relative w-[403px] h-[275px]">
          <div className="absolute top-[0px] left-[0px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#fff,_#e9cc8a)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[16px] left-[54px] text-mini text-black inline-block w-[81px] h-[22px]">
                BigFoot
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">0.8 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">132 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[111px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-1110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[208px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#fff,_#e9cc8a)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[16px] left-[33px] text-mini text-black inline-block w-[99px] h-[22px]">
                Rainbow Core
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">2.1 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">76 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[143px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-1111@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[390px] h-[275px]">
          <div className="absolute top-[0px] left-[-8px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#fff,_#e9cc8a)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[16px] left-[54px] text-mini text-black inline-block w-[81px] h-[22px]">
                Waist Up
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">0.7 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">32 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[120px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-1112@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[200px] w-[190px] h-[275px]">
            <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#fff,_#e9cc8a)] w-[190px] h-[78px] overflow-hidden">
              <div className="absolute top-[16px] left-[64px] text-mini text-black inline-block w-[47px] h-[22px]">
                Fluffy
              </div>
              <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
                <p className="m-0">Floor</p>
                <p className="m-0 text-black">0.9 ETH</p>
              </div>
              <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
                <p className="m-0">Total Volume</p>
                <p className="m-0 text-black">55 ETH</p>
              </div>
              <img
                className="absolute top-[20px] left-[111px] w-[15px] h-[15px] overflow-hidden object-cover"
                alt=""
                src="/frame-268@2x.png"
              />
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
              alt=""
              src="/image-1113@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[190px] h-[275px]">
          <div className="absolute top-[204px] left-[0px] rounded-3xs [background:linear-gradient(122.38deg,_#fff,_#e9cc8a)] w-[190px] h-[78px] overflow-hidden">
            <div className="absolute top-[16px] left-[71px] text-mini text-black inline-block w-[47px] h-[22px]">
              Lugy
            </div>
            <div className="absolute top-[39px] left-[11px] inline-block w-[79px] h-8">
              <p className="m-0">Floor</p>
              <p className="m-0 text-black">0.7 ETH</p>
            </div>
            <div className="absolute top-[39px] left-[111px] inline-block w-[79px] h-8">
              <p className="m-0">Total Volume</p>
              <p className="m-0 text-black">32 ETH</p>
            </div>
            <img
              className="absolute top-[20px] left-[111px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none w-[190px] h-[218px] object-cover"
            alt=""
            src="/image-1114@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[148px] left-[-2px] w-[1508px] flex flex-row items-start justify-center gap-[39px] z-[15] text-mini lg:w-[1200px] md:flex-col md:pl-[7px] md:box-border">
        <div className="relative w-[419px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-2671@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <b className="absolute top-[170px] left-[9px] inline-block w-[117px] h-[22px]">
              MultiVerse
            </b>
            <div className="absolute top-[193px] left-[9px] text-xs inline-block w-[83px] h-[22px]">
              Floor: 0.9 ETH
            </div>
            <img
              className="absolute top-[174px] left-[92px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[229px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-2682@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <b className="absolute top-[170px] left-[9px] inline-block w-[117px] h-[22px]">
              Minimalist
            </b>
            <div className="absolute top-[193px] left-[9px] text-xs inline-block w-[83px] h-[22px]">
              Floor: 4 ETH
            </div>
            <img
              className="absolute top-[174px] left-[92px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[419px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-269@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <b className="absolute top-[170px] left-[9px] inline-block w-[143px] h-[22px]">
              Anthropomorphic
            </b>
            <div className="absolute top-[193px] left-[9px] text-xs inline-block w-[83px] h-[22px]">
              Floor: 0,6 ETH
            </div>
            <img
              className="absolute top-[174px] left-[140px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[229px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-270@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <b className="absolute top-[170px] left-[9px] inline-block w-[67px] h-[22px]">
              Chibi Boy
            </b>
            <div className="absolute top-[193px] left-[9px] text-xs inline-block w-[83px] h-[22px]">
              Floor: 1.6 ETH
            </div>
            <img
              className="absolute top-[174px] left-[80px] w-[15px] h-[15px] overflow-hidden object-cover"
              alt=""
              src="/frame-268@2x.png"
            />
          </div>
        </div>
        <div className="relative rounded-3xs w-[190px] h-[215px] overflow-hidden shrink-0 bg-[url('/frame-271@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <b className="absolute top-[170px] left-[9px] inline-block w-[105px] h-[22px]">
            Wet Blending
          </b>
          <div className="absolute top-[193px] left-[9px] text-xs inline-block w-[83px] h-[22px]">
            Floor: 3,3 ETH
          </div>
          <img
            className="absolute top-[174px] left-[114px] w-[15px] h-[15px] overflow-hidden object-cover"
            alt=""
            src="/frame-268@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3018px] left-[0px] w-[852px] flex flex-row items-end justify-end gap-[657px] z-[16] text-center text-xl lg:gap-[0px] lg:pr-[170px] lg:box-border md:flex-col md:pt-[3300px] md:pr-[555px] md:box-border">
        <div className="relative w-[13px] h-[26px]" />
        <b className="relative inline-block w-[190px] h-[123px] shrink-0">
          Keep up with our weekly news and updates on your favourite NFT’s
        </b>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3599px] left-[5px] flex flex-row items-center justify-start gap-[7px] z-[17] text-center text-[14px] lg:pb-0 lg:box-border md:pt-[3300px] md:box-border">
        <img
          className="relative rounded-[40px] w-5 h-5 object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
        <Header />
      </div>
    </div>
  );
};

export default Demetazon;
