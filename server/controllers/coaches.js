import Coach from "../models/Coach.js";

export default {
  async registerCoach(req, res, next) {
    res.send("Register coach");
  },
  async getCoaches(req, res, next) {
    const coaches = await Coach.getAll();
    return res.status(200).json(coaches);
  },
  async getCoachDetails(req, res, next) {
    const { coachId } = req.params;
    const coach = await Coach.getById(coachId);
    return coach
      ? res.status(200).json({ coach })
      : res.status(204).json({ message: "Coach not found" });
  },
};
