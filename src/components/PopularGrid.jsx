import PopularCard from "@/components/PopularCard";

const PopularGrid = ({ popuInfo, popuInfoApi }) => {
  return (
    <section className="bg-neutral-100 py-[80px] px-[40px] text-black">
      <div className="flex flex-col items-center  ">
        <h2 className="tracking-[3px] text-[28px]  ">
          POPULAR RECIPE COLLECTIONS
        </h2>
        <div className="w-[80px] h-[3px] bg-[#c0392b] mx-auto mt-[15px] mb-[60px]"></div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-6">
        {popuInfo.map(({ description }, index) => {
          if (!popuInfoApi[index]) return null;

          return (
            <PopularCard
              key={index}
              description={description}
              image={popuInfoApi[index].image}
              name={popuInfoApi[index].name}
              id={popuInfoApi[index].id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularGrid;
