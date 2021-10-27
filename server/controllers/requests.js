import { requestSchema } from "../utilities/validation.js";

export default {
  async getRequests(req, res, next) {
    res.send("Get requests");
  },
  async sendRequest(req, res, next) {
    const { coachId } = req.params;
    const { valid, data, message, status } = requestSchema(req.body);
    return res
      .status(status)
      .json(valid ? { valid, data } : { valid, message });
  },
};
