import Link from "next/link";
import { ActiveLink } from '../active-link/ActiveLink';

export const Nabvar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        <Link href={'/'}>
          <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        <ActiveLink path={"/about"} text={"About"} />
        <ActiveLink path={"/contact"} text={"Contact"} />
        <ActiveLink path={"/pricing"} text={"Pricing"} />

    </nav>
  )
}
