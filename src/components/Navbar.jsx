import items from "@/lib/navItems";
import Image from "next/image";
import Link from "next/link";
//aca le podemos poner el nombre que queramos porque el export fue defaul,sino se usa el nombre que llevaba

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-5 py-1.5 bg-[#222] text-white">
        <Link href="/">
          <Image
            src="/assets/imagenes/logo.png"
            width="180"
            height="180"
            alt="Logo Foodlab"
            className="h-auto w-auto"
          />
        </Link>
        <ul className="flex gap-6 list-none">
          {items.map((item, index) => (
            <li
              className="transition-all duration-300 hover:text-[#ff7b54] hover:scale-110 hover:cursor-pointer"
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Search recipes..."
          className="px-4 py-2 rounded-lg border-none outline-none bg-gray-200 text-black text-sm"
        />
      </nav>
    </header>
  );
};

export default Navbar;
