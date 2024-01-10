import Cards from "@/components/shared/cards/cards.component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResponseProductsData } from "@/pages/api/products";

async function getData(): Promise<ResponseProductsData> {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  // eslint-disable-next-line no-console
  console.log(data)
  return (
    <main className="min-h-screen container mx-auto grid gap-[2.5rem]">
      <Carousel>
        <Carousel>
          <CarouselContent>
            {data.products.map((elem) => (
              <CarouselItem className={`basis-1/3`} key={elem.id}>
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
        </Carousel>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
     
    </main>
  );
}
