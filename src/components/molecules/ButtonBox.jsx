import Button from "../atoms/Button";
import { Info } from "lucide-react"; // Opsional jika pakai library

function ButtonHeroSection() {
  return (
    <div className="flex items-center gap-4">
      {/* Tombol Mulai */}
      <Button variant="primary">Mulai</Button>

      {/* Tombol Selengkapnya dengan Ikon */}
      <Button variant="secondary" icon={Info}>
        Selengkapnya
      </Button>

      {/* Label Rating (Dibuat sebagai Button tanpa fungsi hover) */}
      <Button
        variant="outline"
        className="px-4 py-2 w-7.5 h-6 md:w-13 md:h-11 flex items-center justify-center"
      >
        18+
      </Button>
    </div>
  );
}

export default ButtonHeroSection;
