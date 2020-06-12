// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.script.push({
    src:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1jH6xj4rmBzOCALb4GfVfoCoSOHmvnDA&libraries=places",
    body: false,
  });
}
