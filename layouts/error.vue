<template>
  <v-app dark>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12>
          <h1 v-if="error.statusCode === 404" class="text-center display-2">
            {{ pageNotFound }}
          </h1>
          <h1 v-else class="text-center display-2">
            {{ otherError }}
          </h1>
          <v-btn to="/" class="mt-6 text-center m-auto" color="primary">
            トップページに
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 36px;
}
</style>
