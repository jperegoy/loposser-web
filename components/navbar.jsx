import Link from "next/link";
import { useRouter } from "next/router";

const pages = [
  {
    label: "Portfolio",
    href: "/",
  },
  {
    label: "Resumé",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <header className="bg-white">
      <div className="container flex justify-between items-center p-8">
        <Link href="/">
          <a className="text-5xl">tylor loposser</a>
        </Link>
        <nav>
          <ul className="flex">
            {pages.map(({ label, href }) => (
              <li key={label} className="even:mx-3">
                <Link href={href}>
                  <a
                    className={
                      pathname === href ? "underline" : "text-gray-600"
                    }
                  >
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
