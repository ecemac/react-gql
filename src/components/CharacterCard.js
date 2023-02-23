import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link
      to={`character/${character.id}`}
      className="text-center mb-10 p-5 border border-gray-200 rounded-lg"
    >
      <img src={character.image} alt="character" className="rounded-lg mb-5" />
      <h2>{character.name}</h2>
    </Link>
  );
}
