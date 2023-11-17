import { useState, useCallback } from "react";
import DemetazonMenu from "./demetazon-menu";
import PortalPopup from "./portal-popup";
import SearchNfts from "./search-nfts";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Header = () => {
  const [isDemetazonMenuPopupOpen, setDemetazonMenuPopupOpen] = useState(false);
  const [isSearchNftsOpen, setSearchNftsOpen] = useState(false);

  const { open } = useWeb3Modal()

  const openDemetazonMenuPopup = useCallback(() => {
    setDemetazonMenuPopupOpen(true);
  }, []);

  const closeDemetazonMenuPopup = useCallback(() => {
    setDemetazonMenuPopupOpen(false);
  }, []);

  const openSearchNfts = useCallback(() => {
    setSearchNftsOpen(true);
  }, []);

  const closeSearchNfts = useCallback(() => {
    setSearchNftsOpen(false);
  }, []);

  return (
    <>
      <div className="my-0 mx-[!important] fixed top-[3px] left-[0px] w-[1353px] h-20 flex flex-row items-center justify-start gap-[50px] z-[6] text-left text-6xl text-white font-inknut-antiqua lg:gap-[0px] md:gap-[65px]">
        <div className="relative w-[243px] h-[61px]">
          <img
            className="absolute top-[10.5px] left-[5px] rounded-31xl w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/frame-264@2x.png"
          />
          <div className="absolute top-[0px] left-[65px] font-black inline-block w-[178px] h-14">
            Demetazon
          </div>
        </div>
        <div className="relative w-[986px] h-10">
          <div className="absolute top-[0px] left-[120px] w-[745px] h-10 md:hidden">
            <div className="absolute top-[0px] left-[311px] rounded-3xs bg-whitesmoke-200 w-[376px] h-10 overflow-hidden">
              <input
                className="[border:none] inline-block font-inika text-lg bg-[transparent] absolute top-[6px] left-[56px] leading-[132.91%] font-bold text-white text-left w-80 h-7"
                placeholder="Search NFT’s"
                type="text"
              />
              <img
                className="absolute top-[4px] left-[11px] rounded-3xs w-[30px] h-[30px] overflow-hidden object-cover"
                alt=""
                src="/frame-267@2x.png"
              />
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4px] left-[220px] text-xl font-bold font-inika text-white text-left inline-block w-[71px] h-9"
              onClick={() => open()}
            >
              Login
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4px] left-[0px] text-xl font-bold font-inika text-white text-left inline-block w-[200px] h-9">
              Top trending NFT’s
            </button>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[114px] h-10 hidden md:flex">
            <img
              className="absolute top-[0px] left-[74px] rounded-3xs w-10 h-10 overflow-hidden object-cover cursor-pointer"
              alt=""
              src="/frame-265@2x.png"
              onClick={openDemetazonMenuPopup}
            />
            <img
              className="absolute top-[0px] left-[0px] rounded-3xs w-10 h-10 overflow-hidden object-cover cursor-pointer"
              alt=""
              src="/frame-2681@2x.png"
              onClick={openSearchNfts}
            />
          </div>
        </div>
      </div>
      {isDemetazonMenuPopupOpen && (
        <PortalPopup
          placement="Top center"
          onOutsideClick={closeDemetazonMenuPopup}
        >
          <DemetazonMenu onClose={closeDemetazonMenuPopup} />
        </PortalPopup>
      )}
      {isSearchNftsOpen && (
        <PortalPopup placement="Top center" onOutsideClick={closeSearchNfts}>
          <SearchNfts onClose={closeSearchNfts} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
