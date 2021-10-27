import PageNotFound from "../pages/PageNotFound.vue";

export default [
  {
    name: "not-found",
    path: "/:notFound(.*)",
    component: PageNotFound,
  },
];
