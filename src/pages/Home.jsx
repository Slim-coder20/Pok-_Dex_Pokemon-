import { useState, useEffect } from "react";
import Pokecard from "../components/Pokecard/Pokecard";
import { toast } from "react-toastify";

export default function Home() {
  // States
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  // Récupérer les 30 premiers Pokemon
  const fetchPokemons = async (add = false) => {
    setLoading(true);
    toast("Chargement...");
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=30${
        add && "&offset=" + pokemons.length
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // affichage de notification d'erreur en utilisant toast //
    if (!response.ok) {
      toast.error("Une erreur est survenu !");
      setLoading(false);
    }

    const data = await response.json();
    // Pour chaque Pokemon, récupérer les détails :
    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await response.json();
    });
    const pokemonDetails = await Promise.all(promises);
    setPokemons([...pokemons, ...pokemonDetails]); // Mettre à jour l'état
    setLoading(false);
    toast(
      add ? "Nouveaux Pokémons attrapés !" : "Premiers Pokémons attrapés !"
    );
  };

  // Appeler fetchPokemons au chargement du composant
  useEffect(() => {
    fetchPokemons();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto mt-10 md:p-0 p-5">
        {pokemons.map((pokemon, index) => (
          <Pokecard key={index} pokemon={pokemon} details={false} />
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center text-white mt-5">
          Chargement...
        </div>
      )}

      {/* Add */}
      <div className="flex justify-center my-10">
        <button
          className="bg-white hover:bg-gray-50 rounded-full text-black py-2 px-5 text-lg font-semibold shadow-lg hover:shadow-xl transition duration-150 disabled:opacity-80 disabled:cursor-wait"
          disabled={loading}
          onClick={() => fetchPokemons(true)}
        >
          Encore plus de Pokémons !
        </button>
      </div>
    </div>
  );
}
