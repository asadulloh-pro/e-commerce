import { Favorite } from "@/assets/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";

type CardsArgType = Record<
  "link" | "title" | "price" | "image" | "discount",
  string
>;

const Cards: FC<CardsArgType> = ({ link, title, price, image, discount }) => {
  return (
    <Link href={link} className="max-w-[14rem]  block">
      <Image
        src={image}
        alt="Product image"
        width={100}
        height={45}
        className="w-full h-auto max-h-[15rem]"
      />
      <div className="mt-[0.88rem]">
        <span className="text-[1.25rem] font-[700] text-black block">
          {price} UZS
        </span>
        <del className="text-[1rem] text-gray-400 mt-[0.31rem]">
          {discount} UZS
        </del>
        <p className="text-[1rem] text-black mt-[0.62rem]">{title}</p>
      </div>
      <div className="flex gap-[0.75rem] mt-[0.62rem]">
        <Button>В корзину</Button>
        <Button>
          <Favorite />
        </Button>
      </div>
    </Link>
  );
};

export default memo(Cards);
