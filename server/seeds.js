import Chance from "chance";
const chance = new Chance();

import { connectToDatabase } from "./utilities/database.js";

import Coach from "./models/Coach.js";
import Request from "./models/Request.js";

const coachIds = [];

const seedCoaches = async (numberOfCoaches) => {
  await Coach.deleteAll();
  const possibleFields = ["gym", "triathlon", "basketball", "swimming"];
  for (let i = 0; i < numberOfCoaches; i++) {
    const coach = new Coach(
      chance.first(),
      chance.last(),
      chance.email(),
      chance.sentence(),
      chance.integer({ min: 10, max: 50 }),
      possibleFields.filter(() => Math.random() > 0.5)
    );
    const { insertedId } = await coach.create();
    coachIds.push(insertedId.toString());
  }
  console.log("Coaches seeded.");
};

const seedRequests = async (numberOfRequests) => {
  await Request.deleteAll();
  for (let coachId of coachIds) {
    for (let i = 0; i < numberOfRequests; i++) {
      const request = new Request(
        coachId,
        chance.first(),
        chance.last(),
        chance.email(),
        chance.sentence()
      );
      await request.create();
    }
  }
  console.log("Requests seeded");
};

const seed = async () => {
  try {
    await connectToDatabase();
    await seedCoaches(5);
    await seedRequests(3);
    console.log("Database seeded.");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

seed();
