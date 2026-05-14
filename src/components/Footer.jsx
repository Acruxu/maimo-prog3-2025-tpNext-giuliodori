import { socials, footerLinks } from "@/lib/footerItems";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] px-8 py-10 text-white md:px-20">
      <section className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex gap-5">
          {socials.map((social, index) => (
            <Link
              href={social.link}
              key={index}
              className="
                transition-all
                duration-300
                hover:scale-110
                hover:opacity-80
              "
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
        <Link href="/">
          <Image
            src="/assets/imagenes/logo.png"
            alt="FoodLab"
            width={180}
            height={180}
          />
        </Link>
      </section>

      <div className="my-8 h-px w-full bg-zinc-600"></div>

      <section className="flex flex-wrap justify-center gap-3 text-sm">
        {footerLinks.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <Link
              href={item.link}
              className="
                transition-colors
                duration-300
                hover:text-[#ff7b54]
              "
            >
              {item.name}
            </Link>

            {index !== footerLinks.length - 1 && (
              <span className="text-zinc-500">|</span>
            )}
          </div>
        ))}
      </section>

      <section className="mt-6 text-center text-sm text-zinc-400">
        <p>
          © 2026 FoodLab. All rights reserved. This site may earn affiliate
          commissions from purchases made through links.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
