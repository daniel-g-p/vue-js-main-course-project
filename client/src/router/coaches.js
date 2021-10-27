import CoachList from "../pages/CoachList.vue";
import CoachDetails from "../pages/CoachDetails.vue";
import CoachRegistration from "../pages/CoachRegistration.vue";
import CoachContact from "../components/CoachContact.vue";

export default [
  {
    name: "coach-list",
    path: "/coaches",
    component: CoachList,
  },
  {
    name: "coach-registration",
    path: "/coaches/register",
    component: CoachRegistration,
  },
  {
    name: "coach-details",
    path: "/coaches/:coachId",
    component: CoachDetails,
    props: true,
    children: [
      {
        name: "coach-contact",
        path: "contact",
        component: CoachContact,
        props: true,
      },
    ],
  },
];
