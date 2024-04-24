<script setup lang="ts">
import { computed } from "vue";
import { RouterView } from "vue-router";

const style = computed(() => ({
  "background-image":
    'url("https://elyn.s3.eu-west-3.amazonaws.com/merchant_data/thebradery/background_v2.jpg")',
}));
</script>

<template>
  <div
    class="flex justify-center items-center w-screen h-screen bg-fixed bg-center bg-no-repeat bg-cover"
    :style="style"
  >
    <RouterView />
  </div>
</template>
