import { useState, useRef, useEffect } from "react";
import ButtonHeroSection from "../molecules/ButtonBox";
import { VolumeOff, Volume2 } from "lucide-react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null); // Menyiapkan "pegangan" untuk video

  // Gunakan useEffect untuk memantau perubahan isPlaying
  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play(); // Putar video jika true
    } else {
      videoRef.current.pause(); // Berhenti jika false
    }
  }, [isPlaying]);
  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="relative flex flex-col items-center  ">
      <button onClick={handleClick} className="absolute z-20 hidden">
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video
        className="min-w-90 min-h-56 w-screen max-w-full min-w-full object-cover max-w-[1440px] max-h-[587px]"
        ref={videoRef}
        loop
        autoPlay
      >
        <source
          src="/public/videos/DutyAfterSchoolVideo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(16,18,19,0.86)] to-[rgba(24,26,28,1)]"></div>
      <div className="absolute z-20 px-5 bottom-10 min-w-[320px] max-w-[1280px] w-full md:bottom-20 md:px-20 ">
        <div className="flex flex-col md:mb-5 md:w-[668px] md:h-37">
          <h1 className="text-2xl leading-[120%] font-bold md:leading-[110%] tracking-normal md:text-5xl">
            Duty After School
          </h1>
          <p className="w-80 line-clamp-2 text-medium text-[12px] leading-[140%] tracking-[0.2px] md:text-lg md:line-clamp-none max-w-[668px] md:w-full">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        <div className="flex justify-between">
          <ButtonHeroSection />
          <button
            onClick={toggleMute}
            className=" w-10 h-full py-2 px-2 border border-white/50 bg-transparent rounded-full cursor-pointer"
          >
            {isMuted ? (
              <Volume2 className="text-white/50" />
            ) : (
              <VolumeOff className="text-white/50" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
