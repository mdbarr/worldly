<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      Worldly
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => { return { }; },
};
</script>
