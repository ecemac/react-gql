import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      species
      type
      gender
      episode {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
          type
        }
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return {
    error,
    loading,
    data,
  };
};
