import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex items-center justify-between py-[1rem]">
        <Link href="/" className="text-[2rem] font-[700]">
          E-COMMERCE
        </Link>

        <div className="flex justify-end items-center gap-[1rem]">
          <Button>Telegram</Button>
          <Button>Instagram</Button>
          <Button>Youtbe</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
