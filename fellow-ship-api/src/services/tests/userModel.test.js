const User = require('../../models/User')
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://root:root@fellowshipcluster.emacn.mongodb.net/userModelTesting";

describe("Testing the User mongo model.", () => {
  beforeAll(async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true })
    await User.deleteMany({});
  })

  afterEach(async () => {
    await User.deleteMany({});
  })

  afterAll(async () => {
    await mongoose.connection.close();
  })

  it("has a module.", () => {
    expect(User).toBeDefined();
  })

  describe("get a user", () => {
    it("gets a user.", async () => {
      let newUser = new User({
        "email": "ned.stark@winter-is-comming.com",
        "password": "nedStarkShortNeck",
        "username": "NedStark",
        "lastname": "Stark",
        "firstname": "Eddard",
        "dateOfBirth": "10/02/1995",
        "gender": "1",
        "picture": "",
        "description": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives."
      })
      await newUser.save();

      const foundUser = await User.findOne({ email: "ned.stark@winter-is-comming.com" });
      const expected = "ned.stark@winter-is-comming.com";
      const actual = foundUser.email;

      expect(actual).toEqual(expected);
    })
  })

  describe("save a user", () => {
    it("saves a user.", async () => {
      let newUser = new User({
        "email": "ned.stark@winter-is-comming.com",
        "password": "nedStarkShortNeck",
        "username": "NedStark",
        "lastname": "Stark",
        "firstname": "Eddard",
        "dateOfBirth": "10/02/1995",
        "gender": "1",
        "picture": "",
        "description": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives."
      })
      const savedUser = await newUser.save();
      const expected = "ned.stark@winter-is-comming.com";
      const actual = savedUser.email;

      expect(actual).toEqual(expected);
    })
  })

  describe("update a user", () => {
    it("updates a user.", async () => {
      let newUser = new User({
        "email": "ned.stark@winter-is-comming.com",
        "password": "nedStarkShortNeck",
        "username": "NedStark",
        "lastname": "Stark",
        "firstname": "Eddard",
        "dateOfBirth": "10/02/1995",
        "gender": "1",
        "picture": "",
        "description": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives."
      })
      await newUser.save();

      newUser.email = "eddard.stark@winter-is-comming.com"
      const updatedUser = await newUser.save;
      const expected = "eddard.stark@winter-is-comming.com";
      const actual = updatedUser.email;

      expect(actual).toEqual(expected);
    })
  })
})
