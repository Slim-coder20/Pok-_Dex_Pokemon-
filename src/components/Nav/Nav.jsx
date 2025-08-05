import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-center pb-10">
      <div className="font-semibold text-xl rounded-full overflow-hidden">
        {/* Links */}
        <div className="flex">
          <Link
            to="/"
            className="font-semibold px-10 py-5 bg-yellow-100 text-black hover:bg-orange-400 hover:text-black duration-150"
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className="font-semibold px-10 py-5 bg-yellow-100 text-black  hover:bg-orange-400 hover:text-black duration-150"
          >
            {" "}
            À Propos
          </Link>
          <Link
            to="/create-pokemon"
            className="font-semibold px-10 py-5 bg-yellow-100 text-black hover:bg-orange-400 hover:text-black duration-150"
          >
            Créer un pokémon
          </Link>
        </div>
      </div>
    </nav>
  );
}
