<template>
  <section class="container">
    <h1 class="text-center my-8">AI先生</h1>
    <div class="">
      <p class="text-center my-8">先生と相談することができます</p>
    </div>

    <v-card width="600px" class="mx-auto mt-5 py-10 px-10">
      <form @submit.prevent="upload">
        <p>
          <v-text-field type="text" v-model="content" name="content" />
        </p>
        <div class="m-auto my-5 text-center">
          <button type="submit" class="m-auto my-5" name="text">
            送信する
          </button>
        </div>
      </form>
    </v-card>

    <div class="text-center mt-5">
      <p>{{ generatedText }}</p>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
const text = ref("");
async function upload() {
  await useFetch("http://127.0.0.1:8000/generate", {
    method: "POST",
    text: text.value,
  }).then((result) => {
    console.log("Added item!!");
  });
}
</script>
