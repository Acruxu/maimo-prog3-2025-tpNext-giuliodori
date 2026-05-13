import Image from "next/image";
import Link from "next/link";

const RecipeDetail = ({ name,mealType,cuisine,difficulty, rating, cookTimeMinutes, ingredients, instructions, image}) => {
  return (
    <main className="bg-zinc-100 px-6 py-14 md:px-20">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

        
        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
        <Image
            src={image}
            alt={`${name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

       
        <div>

         
          <Link
            href="/"
            className="
              mb-5
              inline-block
              rounded-lg
              bg-zinc-800
              px-4
              py-2
              text-sm
              text-white
              transition
              hover:bg-green-500
            "
          >
            ← Back to recipes
          </Link>

        
          <div className="mb-6 rounded-2xl bg-white p-6 shadow-lg">
            <h1 className="text-4xl font-bold text-zinc-800">
              {name}
            </h1>

            <span className="mt-4 inline-block rounded-full bg-green-500 px-4 py-1 text-sm font-semibold text-white">
              {mealType?.[0]}
            </span>

           
            <div className="mt-5 grid grid-cols-2 gap-3">

              <div className="rounded-lg bg-zinc-100 p-3 text-center text-sm">
                Cuisine: {cuisine}
              </div>

              <div className="rounded-lg bg-zinc-100 p-3 text-center text-sm">
                Difficulty: {difficulty}
              </div>

              <div className="rounded-lg bg-zinc-100 p-3 text-center text-sm">
                ⭐ Rating: {rating}
              </div>

              <div className="rounded-lg bg-zinc-100 p-3 text-center text-sm">
                {cookTimeMinutes} min
              </div>

            </div>
          </div>

         
          <div className="rounded-2xl bg-white p-6 shadow-lg">

           
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-zinc-800">
                Ingredients
              </h2>

              <ul className="space-y-2 text-zinc-700">
                {ingredients?.map((ingredient, index) => (
                  <li key={index}>
                    • {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-zinc-800">
                Instructions
              </h2>

              <ol className="space-y-3 text-zinc-700">
                {instructions?.map((instruction, index) => (
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

export default RecipeDetail