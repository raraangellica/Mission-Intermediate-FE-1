import Button from "../atoms/Button";
import { Info } from "lucide-react"; // Opsional jika pakai library

function ButtonHeroSection() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="primary">Mulai</Button>

      <Button variant="secondary" icon={Info}>
        Selengkapnya
      </Button>

      <Button
        variant="outline"
        className="p-1 md:px-4 md:py-2 w-7.5 h-6 md:text-normal md:w-13 md:h-11 flex items-center justify-center"
      >
        18+
      </Button>
    </div>
  );
}

export default ButtonHeroSection;
