const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // resolver for users query
    users: () => {
      return UserList;
    },

    // using argument to grab a single user
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // Movies
    movies: () => {
      return MovieList;
    },

    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      // catching the data to add
      const user = args.input;
      // adding the new data
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      //Grab the user by id
      const id = args.input.id;
      const newUsername = args.input.newUsername;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },

    deleteUser: (parent, args) => {
        //Grab the User by Id
        const id = args.id
        console.log(id)
        _.remove(UserList, (user) => user.id === Number(id));
        return null
    }
  },
};

module.exports = { resolvers };
