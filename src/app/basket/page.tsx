import CardsComponent from "@/components/shared/cards/cards.component";
import { ResponseProductsData } from "@/app/api/products";

async function getData(): Promise<ResponseProductsData> {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Basket() {
  const data = await getData();
  return (
    <div>
      <h1 className="text-[5rem] text-black">Basket</h1>
      <div className="flex flex-wrap gap-[3rem]">
        {data.products.map((elem) => (
          <CardsComponent
            key={elem.id}
            title={elem.title}
            price={elem.price}
            link={elem.link}
            discount={elem.discount}
            image={elem.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Basket;
