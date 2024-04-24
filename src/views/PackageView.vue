<template>
  <div class="flex flex-row h-[75%] w-[90%] bg-white rounded-xl">
    <div class="flex flex-col w-[70%] overflow-auto">
      <p
        class="py-10 px-20 text-left text-xl text-gray-800 font-bold mx-0 shrink-0"
      >
        Contenu du colis
      </p>
      <div
        v-for="item in itemsData"
        class="bg-white border-solid border-2 border-gray-400 flex rounded-xl ml-[50px] p-3 mb-[20px] mr-[20px]"
      >
        <img
          class="h-48 w-full object-cover md:w-48 md:flex-shrink-0"
          src="https://randomuser.me/api/portraits/women/57.jpg"
        />
        <div class="ml-10">
          <div>
            <b>{{ item.label }}</b>
          </div>
          <hr class="bg-gray-200 border-none h-[0.5px] mt-[12px] mb-[12px]" />
          <div>
            Quantité: <b>{{ item.quantity }}</b>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-[30%] gap-3 p-5 bg-gray-100 rounded-b-none rounded-r-xl"
    >
      <div class="bg-white rounded-xl p-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-[6px]">
            <h2 class="font-bold">Informations colis</h2>
          </div>
          <span
            class="bg-black text-xs text-white font-bold py-[2px] px-1 rounded whitespace-nowrap"
          >
            #{{ packageData?.code }}
          </span>
        </div>
        <hr class="bg-gray-700 border-none h-[0.5px] mt-[12px] mb-[12px]" />
        <div class="flex items-center gap-[6px]">
          <h3>
            Date de la commande : <b>{{ packageData?.delivery_date }}</b>
          </h3>
        </div>
        <hr class="bg-gray-200 border-none h-[0.5px] mt-[12px] mb-[12px]" />
        <div class="flex items-center gap-[6px]">
          <h3>
            Poids : <b>{{ packageData?.weight.toFixed(3) }} kg</b>
          </h3>
        </div>
        <hr class="bg-gray-200 border-none h-[0.5px] mt-[12px] mb-[12px]" />
        <div class="flex items-center gap-[6px]">
          <h3>
            Status : <b>{{ packageData?.status }}</b>
          </h3>
        </div>
      </div>
      <div class="bg-white rounded-xl p-3 flex flex-col gap-3">
        <button
          type="button"
          class="rounded-full bg-black text-white p-2 w-full"
        >
          <span class="flex gap-2 items-center justify-center px-2">
            <div class="flex items-center gap-2">
              <span class="text-base font-bold">Valider le colis</span>
            </div></span
          >
        </button>
        <button
          type="button"
          class="rounded-full border-2 border-black bg-white p-2 w-full"
        >
          <span class="flex gap-2 items-center justify-center px-2">
            <div class="flex items-center gap-2">
              <span class="text-base font-bold">Annuler</span>
            </div></span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const packageData = ref();
const itemsData = ref();

onMounted(async () => {
  const packageResponse = await axios.get(
    `http://127.0.0.1:8000/package/${route.params.code}/`,
    {
      auth: {
        username: "logistician1@test.com",
        password: "adminadmin",
      },
    }
  );
  packageData.value = packageResponse.data;

  const itemsResponse = await axios.get(
    `http://127.0.0.1:8000/items/${route.params.code}/`,
    {
      auth: {
        username: "logistician1@test.com",
        password: "adminadmin",
      },
    }
  );
  itemsData.value = itemsResponse.data;
});
</script>
