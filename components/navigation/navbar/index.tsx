import Link from "next/link";
import Image from "next/image";
import { Theme } from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 ">
      <Link href="/" className="items-center flex gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <p className="flex-between gap-5">
        <Theme />
      </p>
    </nav>
  );
};

export default Navbar;
