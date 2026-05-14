import Image from "next/image";
import Link from "next/link";

const Card = ({
  name,
  rating,
  image,
  id,
  difficulty,
  cuisine,
  cookTimeMinutes,
  category,
}) => {
  return (
    <article
      className="
        overflow-hidden
        rounded-[14px]
      bg-white
        p-[18px]
        shadow-[0_6px_18px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-[10px]
        hover:scale-[1.01]
        hover:border
        hover:border-[#2ecc71]
        hover:shadow-[0_18px_35px_rgba(0,0,0,0.15)]
      "
    >
      <div className="relative w-full h-[190px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes=" (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            25vw"
          className="object-cover rounded-[10px]"
        />
      </div>

      <span
        className="
          inline-block
          bg-[#2ecc71]
          text-white
          text-[12px]
          font-semibold
          px-[10px]
          py-[4px]
          rounded-full
          mt-[10px]
          mb-[8px]
        "
      >
        {category}
      </span>

      <h3 className="text-[18px] text-[#222] mt-[12px] mb-[5px] font-semibold">
        {name}
      </h3>

      <div className="flex flex-wrap gap-[8px] mt-[15px]">
        <span className="bg-[#f4f4f4] border border-[#eee] text-[#444] text-[12px] px-[10px] py-[6px] rounded-[6px]">
          {`Difficulty: ${difficulty}`}
        </span>
        <span className="bg-[#f4f4f4] border border-[#eee] text-[#444] text-[12px] px-[10px] py-[6px] rounded-[6px]">
          {`Cuisine: ${cuisine}`}
        </span>
        <span className="bg-[#f4f4f4] border border-[#eee] text-[#444] text-[12px] px-[10px] py-[6px] rounded-[6px]">
          ⭐ {rating}
        </span>
        <span className="bg-[#f4f4f4] border border-[#eee] text-[#444] text-[12px] px-[10px] py-[6px] rounded-[6px]">
          {`Cook time: ${cookTimeMinutes}`}
        </span>
      </div>

      <div className="mt-[18px]">
        <Link
          href={`/recipe/${id}`}
          className="
            inline-block
            bg-[#2b2b2b]
            text-white
            text-[13px]
            font-medium
            px-[14px]
            py-[10px]
            rounded-[8px]
            transition-all
            duration-300
            hover:bg-black
            hover:scale-[1.05]
          "
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Card;
