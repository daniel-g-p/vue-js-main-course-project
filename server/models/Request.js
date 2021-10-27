import { getDatabase } from "../utilities/database.js";

export default class Request {
  constructor(coachId, firstName, lastName, email, message) {
    this.coachId = coachId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.message = message;
    this._created = new Date();
  }
  async create() {
    const collection = getDatabase().collection("requests");
    return await collection.insertOne(this);
  }
  static async deleteAll() {
    const collection = getDatabase().collection("requests");
    return await collection.deleteMany({});
  }
}
