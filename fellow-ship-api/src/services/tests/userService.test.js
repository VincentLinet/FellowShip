const mockingoose = require('mockingoose');
const { createUserService } = require("../userService");
const User = require('../../models/User')

describe("createUser test", () => {
  it("creates a user.", async () => {
    let userToCreate = {
      "email": "ned.stark@winter-is-comming.com",
      "password": "nedStarkShortNeck",
      "username": "NedStark",
      "lastname": "Stark",
      "firstname": "Eddard",
      "dateOfBirth": "10/02/1995",
      "gender": "1",
      "picture": "",
      "description": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives."
    };

    mockingoose(User).toReturn(userToCreate, 'save');

    const result = await createUserService(userToCreate);
    expect(JSON.parse(JSON.stringify(result))).toMatchObject({
      _id: '507f191e810c19729de860ea',
    });
  //
  //
  //
  //
  //
  //
  //   const spy = jest.fn();
  //   let newUser = {};
  //
  //   const MockModel = async function (data) {
  //     const salt = await bcrypt.genSalt(10);
  //     const hashedPwd = await bcrypt.hash(params.password, salt);
  //     newUser = {
  //       email: data.email,
  //       password: hashedPwd,
  //       username: data.username,
  //       lastname: data.lastname,
  //       firstname: data.firstname,
  //       dateOfBirth: data.dateOfBirth,
  //       gender: data.gender,
  //       picture: data.picture,
  //       description: data.description
  //     };
  //
  //     return {
  //       ...data,
  //       spy
  //     }
  //   };
  //   const userService = UserService(MockModel);
  //
  //
  //   let newwUser = new User({
  //     "email": "ned.stark@winter-is-comming.com",
  //     "password": "nedStarkShortNeck",
  //     "username": "NedStark",
  //     "lastname": "Stark",
  //     "firstname": "Eddard",
  //     "dateOfBirth": "10/02/1995",
  //     "gender": "1",
  //     "picture": "",
  //     "description": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives."
  //   })
  //   const savedUser = await newUser.save();
  //   const expected = "ned.stark@winter-is-comming.com";
  //   const actual = savedUser.email;
  //
  //   expect(actual).toEqual(expected);
  })
})


// // const { returnUser } = require("../userService");
// //
// // test('the fetch fails with an error', async () => {
// //   const user = await returnUser()
// //   expect(user).toBe('');
// // });
// //
// const mongoDB = require('../database/database');
// const axios = require("axios");
// const request = require("request");
// const User = require('../../models/User') // Link to your user model
//
// describe('insert', () => {
//   let connection;
//   let db;
//
//   beforeAll(async () => {
//     mongoDB.mongoConnect('userTesting').catch(error => console.error(error));
//   });
//
//   afterEach(async () => {
//     // await mongoDB.removeAllCollections()
//   })
//
//   it('Should save user to database', async done => {
//     const axiosConfig = {
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//       }
//     };
//     const newUser = {
//       "email": "neddy.stark@gmail.com",
//       "password": "nedStarkShortNeck",
//       "username": "NedStark",
//       "lastname": "Stark",
//       "firstname": "Eddard",
//       "dateOfBirth": "10/02/1995",
//       "gender": "1",
//       "picture": "",
//       "description": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives."
//     }
//
//     const res = await request.post('http://localhost:9000/api/user/register')
//       .send(newUser)
//
//     console.log(res.data);
//
//     const user = await User.findOne({ email: 'neddy.stark@gmail.com' })
//     console.log(user);
//
//     expect(user.name).toBeTruthy()
//     expect(user.email).toBeTruthy()
//
//     expect(res.body.name).toBeTruthy()
//     expect(res.body.email).toBeTruthy()
//
//     //
//     // // Searches the user in the database
//     // const user = await User.findOne({ email: 'testing@gmail.com' })
//     //
//     done()
//   })
// });
