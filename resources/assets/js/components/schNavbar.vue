<template lang="html">
    <div>
        <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Schoolify</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat><router-link to="/quiz">Quiz</router-link></v-btn>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
        </v-toolbar>

        <v-footer
  height="auto"
  color="primary"
  inset
  absolute
>
  <v-layout
    justify-center
    row
    wrap
  >
    <v-btn
      v-for="link in links"
      :key="link"
      color="black"
      flat
      round
    >
      {{ link }}
    </v-btn>
    <v-flex
      primary
      lighten-2
      py-3
      text-xs-center
      white--text
      xs12
    >
      &copy;2018 — <strong>Vuetify</strong>
    </v-flex>
  </v-layout>
</v-footer>
    </div>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })
  }
</script>

<style lang="css">

.theme--light.v-footer, .theme--light.v-toolbar{
    background: #f58b8b;
}
</style>
