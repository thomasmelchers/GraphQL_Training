import React, { useState } from "react";
import { useQuery, useMutation, gql, useLazyQuery } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      nationality
      username
      age
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const QUERY_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input){
      name
      id
    }
  }
`;

function DisplayData() {
  const [movieSearch, setMovieSearch] = useState("");

  // CREATION OF USER
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  // QUERY TO FETCH DATA
  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);

  // QUERY TO FETCH DATA WHEN WE NEED IT
  const [fetchMovie, { data: movieSearchedData, error: movieSearchedError }] =
    useLazyQuery(QUERY_MOVIE_BY_NAME);

  // MUTATION CREATION OF USER
  const [createUser] = useMutation(CREATE_USER_MUTATION);

  if (loading) {
    return <h1>Data is loading</h1>;
  }

  return (
    <div>
      {/* ADDING SOME USERS */}
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="nationality"
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: {
                  name,
                  username,
                  age: Number(age),
                  nationality,
                },
              },
            });
            refetch()
          }}
        >
          Create User
        </button>
      </div>

      {/* DISPLAY ALL THE USERS */}
      {data &&
        data.users.map((user) => {
          return (
            <div>
              {" "}
              <h2>Name: {user.name}</h2>
              <h2>Username: {user.username}</h2>
              <h2>Nationality: {user.nationality}</h2>
              <h2>Age: {user.age}</h2>
            </div>
          );
        })}

      {/* DISPLAY ALL THE MOVIES */}

      {movieData &&
        movieData.movies.map((movie) => {
          return (
            <div>
              <h3>Movie: {movie.name}</h3>
            </div>
          );
        })}

      <div>
        <input
          type="text"
          placeholder="Interstellar..."
          onChange={(event) => {
            setMovieSearch(event.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearch,
              },
            });
          }}
        >
          {" "}
          Fetch Data
        </button>

        <div>
          {movieSearchedError && <div>There is no movie with this title</div>}
          {movieSearchedData && (
            <div>
              <h3>Movie Name: {movieSearchedData.movie.name}</h3>
              <h3>
                year of publication: {movieSearchedData.movie.yearOfPublication}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
