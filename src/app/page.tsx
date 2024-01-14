import Cards from "@/components/shared/cards/cards.component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResponseProductsData } from "@/pages/api/products";
import Image from "next/image";

async function getData(): Promise<ResponseProductsData> {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="min-h-screen grid gap-[2.5rem]">
      <Carousel className="container mx-auto">
        <CarouselContent>
          {data.products.map((elem) => (
            <CarouselItem key={elem.id}>
              <Image src="/banner.webp" alt="banner" className="w-full min-h-[300px]" width={100} height={300}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="container mx-auto">
        <CarouselContent>
          {data.products.map((elem) => (
            <CarouselItem className={`basis-1/5`} key={elem.id}>
              <Cards
                title={elem.title}
                price={elem.price}
                link={elem.link}
                discount={elem.discount}
                image={elem.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="container mx-auto">
        <CarouselContent>
          {data.products.map((elem) => (
            <CarouselItem className={`basis-1/5`} key={elem.id}>
              <Cards
                title={elem.title}
                price={elem.price}
                link={elem.link}
                discount={elem.discount}
                image={elem.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel className="container mx-auto">
        <CarouselContent>
          {data.products.map((elem) => (
            <CarouselItem className={`basis-1/5`} key={elem.id}>
              <Cards
                title={elem.title}
                price={elem.price}
                link={elem.link}
                discount={elem.discount}
                image={elem.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
