import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type MainLayoutArgType = {
  children: ReactNode;
};

export const MainLayout: React.FC<MainLayoutArgType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
