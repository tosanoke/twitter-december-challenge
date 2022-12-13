import { HEADER } from "../../constants/header";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <nav className="w-3/4 container mx-auto p-6 flex flex-row justify-between gap-12">
    <p className="text-black font-extrabold text-3xl not-italic leading-10 tracking-widest">
      ARTSY.
    </p>
    <div className="flex justify-center items-center">
      <ul className="flex flex-row gap-12">
        {HEADER.map((item, index) => (
          <li
            key={index}
            className="text-2xl font-medium leading-8 hover:underline"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex items-center gap-4">
      <SearchIcon />
      <ShoppingCartIcon />
      <NotificationsNoneIcon />
    </div>
  </nav>
  )
}

export default Header