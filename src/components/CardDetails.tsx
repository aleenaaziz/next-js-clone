import Image from "next/image"  
import Card from "./Card";


  export const CardDetails = () => {
    const data = [
      {
        id: 1,
        img: "/images/1.png",
        title: "HAVIT HV-G92 Gamepad",
        price: "$120",
        rate: "/images/star.png",
      },
      {
        id: 2,
        img: "/images/2.png",
        title: "AK-900 Wired Keyboard",
        price: "$960",
        rate: "/images/star.png",
      },
      {
        id: 3,
        img: "/images/3.png",
        title: "IPS LCD Gaming Monitor",
        price: "$370",
        rate: "/images/star.png",
      },
      {
        id: 4,
        img: "/images/4.png",
        title: "S-Series Comfort Chair",
        price: "$375",
        rate: "/images/star.png",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
    );
  };