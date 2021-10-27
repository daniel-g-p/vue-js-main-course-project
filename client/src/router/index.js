import { createRouter, createWebHistory } from "vue-router";

import root from "./root.js";
import coaches from "./coaches.js";
import request from "./requests.js";
import error from "./error.js";

export default createRouter({
  history: createWebHistory(),
  routes: [...root, ...coaches, ...request, ...error],
});
