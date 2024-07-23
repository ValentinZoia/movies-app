import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo-2.webp";


interface NavBarProps {}

export const NavBar: FC<NavBarProps> = () => {
  const [search, setSearch] = useState("");
  

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search.trim())
    if (search.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(search)}`
      console.log(search)
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 px-12">
      <div className="w-20 logo-container">
        <Link to="/">
          <img className="w-20 h-20" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="items-center mx-4 search-container">
        <form onSubmit={handleSearch} className="">
          <div className="items-center search">
            <input placeholder="Search..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit">Go</button>
          </div>
        </form>
      </div>
      <div className="flex gap-4 buttons-container" translate="no">
        <Link className="button" to="/watched">
          Watched
        </Link>
        <Link className="button" to="/watchlist">
          Watchlist
        </Link>
      </div>
    </nav>
  );
};
