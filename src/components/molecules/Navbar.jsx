import Link from "../atoms/Link";
import React, { useState } from "react";
import { User, Star, LogOut, ChevronUp } from "lucide-react";
import Logosm from "../../assets/Logosm.png";
import LogoForm from "../../assets/LogoForm.png";
import Vector from "../../assets/Vector.png";

export const Navbar = () => {
  return (
    <div className="flex items-center min-w-67 max-w-[130em] gap-3 md:h-11 md:gap-20 ml-5 md:ml-20">
      <img src={Logosm} alt="logo chill" className="md:hidden" />
      <img
        src={LogoForm}
        alt="Logo Chill"
        className="hidden md:block w-26 h-5"
      />
      <nav className="flex  gap-3 font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-lg md:gap-20">
        <Link href="#">Series</Link>
        <Link href="#">Film</Link>
        <Link href="#">Daftar Saya</Link>
      </nav>
    </div>
  );
};

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 flex items-center ">
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 focus:outline-none group"
        >
          <div className="w-5 h-5 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-600">
            <img
              src="/public/images/DefaultProfile.png"
              alt="Profile Default"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronUp
            className={`text-white w-4 h-4 md:w-5 md:h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-30 md:w-39 bg-[rgba(24,26,28,1)] rounded-lg shadow-2xl overflow-hidden border border-gray-800 z-50">
            <div className="flex flex-col py-2 font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-sm">
              {/* Profil Saya */}
              <button className="flex items-center justify-start pl-4 py-4 group transition-colors group">
                <User className="w-3 h-3 md:w-4 md:h-4 text-white mr-4 group-hover:text-[rgba(50,84,255,1)]" />
                <span className="text-white font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-sm group-hover:text-[rgba(50,84,255,1)]">
                  Profil Saya
                </span>
              </button>

              {/* Ubah Premium */}
              <button className="flex items-center pl-4 py-4 transition-colors group">
                <Star className="w-3.5 h-3 md:w-5 md:h-5 text-white mr-4 fill-white group-hover:text-[rgba(50,84,255,1)]" />
                <span className="text-white font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-sm group-hover:text-[rgba(50,84,255,1)]">
                  Ubah Premium
                </span>
              </button>

              {/* Keluar */}
              <button
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  globalThis.location.href = "/login";
                  alert("Berhasil Keluar");
                }}
                className="flex items-center pl-4 py-4 transition-colors group"
              >
                <LogOut className="w-3 h-3 md:4.5 md:4.5 text-white mr-4 group-hover:text-[rgba(50,84,255,1)]" />
                <span className="text-white font-medium text-[10px] line-height-[140%] tracking-[0.2px] md:text-sm group-hover:text-[rgba(50,84,255,1)]">
                  Keluar
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
