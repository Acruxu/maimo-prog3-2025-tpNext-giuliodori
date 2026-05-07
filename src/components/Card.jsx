'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ name, rating, image, id, category }) => {
  const [likes, setLikes] = useState(0);

  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        p-4
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.01]
        hover:border
        hover:border-green-500
        hover:shadow-2xl
      "
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          25vw"
          className="rounded-xl object-cover"
        />
      </div>

      <span
        className="
          mt-3
          inline-block
          rounded-full
          bg-green-500
          px-3
          py-1
          text-xs
          font-semibold
          text-white
        "
      >
        {category}
      </span>

      <h3 className="mt-3 text-lg font-semibold text-zinc-800">
        {name}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
          ⭐ {rating}
        </span>

        <span className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
          Likes: {likes}
        </span>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => setLikes(likes + 1)}
          className="
            rounded-lg
            bg-zinc-900
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:scale-105
            hover:bg-black
          "
        >
          Like
        </button>

        <Link
          href={`/recipe/${id}`}
          className="
            rounded-lg
           bg-green-500
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-orange-600
          "
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Card;