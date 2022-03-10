const UserList = [
    {
      id: 1,
      name: "John",
      username: "Johny",
      age: 20,
      nationality: "CANADA",
      friends: [
        {
          id: 2,
          name: "Jeff",
          username: "J",
          age: 20,
          nationality: "BRAZIL",
        },
        {
          id: 5,
          name: "Kelly",
          username: "kelly2019",
          age: 5,
          nationality: "CHILE",
        },
      ],
    },
    {
      id: 2,
      name: "Jeff",
      username: "J",
      age: 20,
      nationality: "BRAZIL",
    },
    {
      id: 3,
      name: "Sarah",
      username: "Zaza",
      age: 25,
      nationality: "INDIA",
      friends: [
        {
          id: 2,
          name: "Jeff",
          username: "J",
          age: 20,
          nationality: "BRAZIL",
        },
      ],
    },
    {
      id: 4,
      name: "Rafael",
      username: "rafa",
      age: 60,
      nationality: "GERMANY",
    },
    {
      id: 5,
      name: "Chrystabella",
      username: "Bella",
      age: 5,
      nationality: "CHILE",
    },
  ];
  
  const MovieList = [
    {
      id: 1,
      name: "Parasite",
      yearOfPublication: 2019,
      isInTheaters: true,
    },
    {
      id: 2,
      name: "Interstellar",
      yearOfPublication: 2007,
      isInTheaters: true,
    },
    {
      id: 3,
      name: "Inglorious Basterds",
      yearOfPublication: 2009,
      isInTheaters: true,
    },
    {
      id: 4,
      name: "Let's go to the Future",
      yearOfPublication: 2035,
      isInTheaters: false,
    },
  ];
  
  module.exports = { UserList, MovieList };