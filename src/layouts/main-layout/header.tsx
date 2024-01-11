import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container mx-auto flex items-center justify-between py-[1rem]">
        <Link href="/" className="text-[2rem] font-[700]">
          E-COMMERCE
        </Link>

        <div>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
