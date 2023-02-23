import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export default function CharacterDetail() {
  const { id } = useParams();
  console.log(id);
  const { error, loading, data } = useCharacter(id);

  console.log(data);
  return (
    <div className="p-10">
      {loading && <h1>LOADING</h1>}
      {error && <h1>Something went wrong</h1>}
      {!loading && data && (
        <div className="flex flex-col justify-center items-center">
          <img
            src={data.character.image}
            alt="character"
            width={500}
            height={500}
            className="max-w-full"
          />
          <h1>{data.character.name}</h1>
          <div>
            <span>Status:</span>
            <span>{data.character.status}</span>
          </div>
        </div>
      )}
    </div>
  );
}
