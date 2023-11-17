import { useCallback, useEffect } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const DemetazonMenu = ({ onClose }) => {
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

  const { open } = useWeb3Modal()

  const onDeveloperClick = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div
      className="rounded-[5px] bg-gray-300 w-[550px] h-[351px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full max-h-full [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0] [&.animate]:md:animate-[1s_ease_0s_1_normal_forwards_fade-in] md:opacity-[0]"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[91px] left-[164px] text-mid font-bold font-inika text-white text-center inline-block"
        onClick={() => open()}
      >
        Login with Wallet
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[139px] left-[182px] text-mid font-bold font-inika text-white text-center inline-block">
        Top Trending
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[187px] left-[195px] text-mid font-bold font-inika text-white text-center inline-block"
        onClick={onDeveloperClick}
      >
        Developer
      </button>
      <img
        className="absolute top-[27px] left-[349px] rounded-3xs w-12 h-12 overflow-hidden object-cover cursor-pointer"
        alt=""
        src="/frame-260@2x.png"
        onClick={onClose}
      />
    </div>
  );
};

export default DemetazonMenu;
