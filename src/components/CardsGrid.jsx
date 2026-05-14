import Card from "@/components/Card";

const CardsGrid = ({ items }) => {
  //const {gridItems} = props

  return (
    <section className="bg-white bg-white py-[80px] px-[40px]">
      <div className="flex flex-col mb-[60px] ">
        <h2 className="tracking-[3px] text-[28px] text-zinc-800 font-semibold ">
          LAST RECIPES
        </h2>
        <div className="w-[80px] h-[3px] bg-[#ff7b54] mt-[10px] "></div>
      </div>

      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map(
          (
            {
              name,
              rating,
              image,
              id,
              mealType,
              difficulty,
              cuisine,
              cookTimeMinutes,
              category,
            },
            index,
          ) => (
            <Card
              key={index}
              name={name}
              rating={rating}
              image={image}
              id={id}
              category={mealType[0]}
              difficulty={difficulty}
              cuisine={cuisine}
              cookTimeMinutes={cookTimeMinutes}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default CardsGrid;
