function Homework06() {
    interface Car {
        brand: string;
        price:number;
        isDiesel:boolean;
    }

    const Car = ({brand, price, isDiesel}: Car) => {
        return (
            <div className="cars-info">
                <div className="cars-brand">
                    <h2>{brand}</h2>
                </div>
                <div className="cars-price-info">
                    <p>{price}</p>
                </div>
                <div className="fuel-info">
                    <p>{isDiesel ? "Yes" : "No"}</p>
                </div>
            </div>
        );
    };

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];
  return;
}

export default Homework06;
