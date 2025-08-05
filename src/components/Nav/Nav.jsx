import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-center pb-10">
      <div className="font-semibold text-xl rounded-full overflow-hidden">
        {/* Links */}
        <div className="flex">
          {/* Home  */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold px-10 py-5  hover:text-black duration-150 ${
                isActive
                  ? "bg-yellow-100 text-black"
                  : "bg-yellow-500 text-white"
              }`
            }
          >
            Accueil
          </NavLink>
          {/* A propos  */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold px-10 py-5  hover:text-black duration-150 ${
                isActive
                  ? "bg-yellow-100 text-black"
                  : "bg-yellow-500 text-white"
              }`
            }
          >
            {" "}
            À Propos
          </NavLink>

          {/* Créer Pokemon  */}
          <NavLink
            to="/create-pokemon"
            className={({ isActive }) =>
              `font-semibold px-10 py-5  hover:text-black duration-150 ${
                isActive
                  ? "bg-yellow-100 text-black"
                  : "bg-yellow-500 text-white"
              }`
            }
          >
            Créer un pokémon
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
