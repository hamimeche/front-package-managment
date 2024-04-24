<template>
  <div class="flex w-full h-full items-center justify-center">
    <div class="flex flex-col gap-3 bg-white rounded-xl p-4 items-center">
      <h2 class="text-xl font-bold text-center">Gestion de mes colis</h2>

      <div class="flex gap-2">
        <label for="username" class="text-base w-40">Logisticien</label>
        <input
          v-model="username"
          id="username"
          type="text"
          class="w-full p-2 border text-base h-[35px] shadow-sm pl-4 rounded-full bg-gray-200"
        />
      </div>

      <div class="flex gap-2">
        <label for="password" class="text-base w-40">Mot de passe</label>
        <input
          v-model="password"
          id="password"
          type="password"
          class="w-full p-2 border text-base h-[35px] shadow-sm pl-4 rounded-full bg-gray-200"
        />
      </div>
      <button
        @click="submitLogin"
        type="button"
        class="rounded-full bg-black text-white p-2 w-full"
      >
        <span class="flex gap-2 items-center justify-center px-2">
          <div class="flex items-center gap-2">
            <span class="text-base font-bold">Valider</span>
          </div></span
        >
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref<string>("logistician1@test.com");
const password = ref<string>("adminadmin");

const submitLogin = () => {
  axios
    .get("http://127.0.0.1:8000/list-package/", {
      auth: {
        username: username.value,
        password: password.value,
      },
    })
    .then(() => {
      router.push({ name: "SelectView" });
    });
};
</script>
