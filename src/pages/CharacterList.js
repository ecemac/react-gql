import React from "react";
import { useCharacters } from "../hooks/useCharactes";
import CharacterCard from "../components/CharacterCard";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  return (
    <div>
      {loading && <h1>LOADING</h1>}
      <div className="flex flex-wrap justify-between">
        {!loading &&
          data?.characters.results.map((d) => (
            <CharacterCard key={d.id} character={d} />
          ))}
      </div>

      {error && <h1>Something went wrong</h1>}
    </div>
  );
}
