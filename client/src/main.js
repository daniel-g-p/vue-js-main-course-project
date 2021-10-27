import { createApp } from "vue";

import App from "./App.vue";

import BaseCard from "./base/BaseCard.vue";
import BaseCheckbox from "./base/BaseCheckbox.vue";
import BaseButton from "./base/BaseButton.vue";
import BaseTag from "./base/BaseTag.vue";
import BaseTextbox from "./base/BaseTextbox.vue";

import store from "./store/index.js";
import router from "./router/index.js";

const app = createApp(App);

app.component("BaseCard", BaseCard);
app.component("BaseCheckbox", BaseCheckbox);
app.component("BaseButton", BaseButton);
app.component("BaseTag", BaseTag);
app.component("BaseTextbox", BaseTextbox);

app.use(store);
app.use(router);

app.mount("#app");
