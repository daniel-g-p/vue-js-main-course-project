import { ObjectId } from "mongodb";

import { getDatabase } from "../utilities/database.js";

export default class Coach {
  constructor(firstName, lastName, email, bio, hourlyRate, fields) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.bio = bio;
    this.hourlyRate = hourlyRate;
    this.fields = fields;
    this._created = new Date().getTime();
  }
  async create() {
    const collection = getDatabase().collection("coaches");
    return await collection.insertOne(this);
  }
  static async getAll(fields = []) {
    const collection = getDatabase().collection("coaches");
    const options = { projection: {} };
    for (let field of fields) {
      options.projection[field] = 1;
    }
    return await collection.find({}, options).toArray();
  }
  static async getById(coachId, fields = []) {
    const collection = getDatabase().collection("coaches");
    const options = { projection: {} };
    for (let field of fields) {
      options.projection[field] = 1;
    }
    return await collection
      .find({ _id: new ObjectId(coachId) }, options)
      .next();
  }
  static async deleteAll() {
    const collection = getDatabase().collection("coaches");
    return await collection.deleteMany({});
  }
}
