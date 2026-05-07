import Card from "@/components/Card";

const CardsGrid = ({ items }) => {
  //const {gridItems} = props

  return (
    <div className="grid grid-cols-1 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(({name, rating, image, id, mealType}, index) => (
        <Card key={index} name={name} rating={rating} image={image} id={id} category={mealType[0]}/>
      ))}
    </div>
  );
};

export default CardsGrid;
