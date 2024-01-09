import type { NextApiRequest, NextApiResponse } from "next";

const products: Array<
  Record<"link" | "title" | "price" | "image" | "discount" | "id", string>
> = [
  {
    id: "1",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "2",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "3",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "4",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "5",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "6",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "7",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "8",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "9",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "10",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "11",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
  {
    id: "12",
    title: "Iphone 15 Pro",
    discount: "14 500 000",
    price: "14 000 000",
    image: "/iphone.webp",
    link: "/",
  },
];

export type ResponseProductsData = {
  products: typeof products;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProductsData>
) {
  res.status(200).json({ products });
}
