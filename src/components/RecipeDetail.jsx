import Image from "next/image";
import Link from "next/link";

const RecipeDetail = ({
  name,
  mealType,
  cuisine,
  difficulty,
  rating,
  cookTimeMinutes,
  ingredients,
  instructions,
  image,
}) => {
  return (
    <main className="bg-[#f5f5f5] px-[80px] py-[60px]">
      <section className="max-w-[1200px] mx-auto grid gap-[50px] lg:grid-cols-2">
        <div className="relative w-full h-full min-h-[500px]">
          <Image
            src={image}
            alt={`${name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded-[12px]"
          />
        </div>

        <div>
          <Link
            href="/"
            className="
               inline-block
              mb-[20px]
              px-[16px]
              py-[10px]
              bg-[#2b2b2b]
              text-white
              text-[14px]
              rounded-[8px]
              transition-all
              duration-300
              hover:bg-[#2ecc71]
            "
          >
            ← Back to recipes
          </Link>

          <div
            className=" bg-white
              p-[25px]
              rounded-[12px]
              shadow-[0_6px_18px_rgba(0,0,0,0.1)]
              mb-[25px]"
          >
            <h1 className="text-4xl font-bold text-zinc-800">{name}</h1>

            <span
              className=" inline-block
                mt-[10px]
                px-[12px]
                py-[5px]
                bg-[#2ecc71]
                text-white
                text-[12px]
                rounded-full"
            >
              {mealType[0]}
            </span>

            <div className="grid grid-cols-2 gap-[10px] mt-[15px]">
              <div className="bg-[#f4f4f4] p-[12px] rounded-[8px] text-center text-[14px] text-[#333]">
                Cuisine: {cuisine}
              </div>

              <div className="bg-[#f4f4f4] p-[12px] rounded-[8px] text-center text-[14px] text-[#333]">
                Difficulty: {difficulty}
              </div>

              <div className="bg-[#f4f4f4] p-[12px] rounded-[8px] text-center text-[14px] text-[#333]">
                ⭐ Rating: {rating}
              </div>

              <div className="bg-[#f4f4f4] p-[12px] rounded-[8px] text-center text-[14px] text-[#333]">
                {cookTimeMinutes} min
              </div>
            </div>
          </div>

          <div
            className=" bg-white
              p-[25px]
              rounded-[12px]
              shadow-[0_6px_18px_rgba(0,0,0,0.1)]"
          >
            <section className="mb-[20px]">
              <h2 className="mb-4 text-2xl font-bold text-zinc-800">
                Ingredients
              </h2>

              <ul className="flex flex-wrap gap-[10px] text-[14px] text-[#333]">
                {ingredients.map((ingredient, index) => (
                  <li
                    className="
                   bg-[#f4f4f4]
                   border
                   border-[#eee]
                    px-[12px]
                    py-[6px]
                    rounded-[8px]
                     "
                    key={index}
                  >
                    • {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-zinc-800">
                Instructions
              </h2>

              <ol className="space-y-[10px] text-[14px] text-[#333] leading-[1.6]">
                {instructions.map((instruction, index) => (
                  <li key={index}>
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipeDetail;
