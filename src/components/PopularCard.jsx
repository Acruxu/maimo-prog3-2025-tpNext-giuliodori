import Image from "next/image";
import Link from "next/link";

const PopularCard = ({ name, description, id, image }) => {
  return (
    <article
      className="
        overflow-hidden
        rounded-[10px]
        bg-white
        shadow-[0_4px_10px_rgba(0,0,0,0.1)]
        p-[20px]
        transition-transform
        duration-300
        hover:-translate-y-[5px]
      "
    >
      <Link href={`/recipe/${id}`} className="block">
        <div className="relative w-full h-[200px] mb-[15px]">
          <Image
            src={image}
            alt={`${name}`}
            fill
            className="object-cover rounded-[10px]"
          />
        </div>

        <div className="pb-5">
          <h3 className="text-[20px] font-bold text-zinc-800 mb-[10px] mt-6">
            {name}
          </h3>

          <p className="text-[16px] leading-[1.6] text-zinc-600">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PopularCard;
