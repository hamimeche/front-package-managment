<script lang="ts" setup>
import { ref, computed } from 'vue';
import { usePackagesStore } from '@/stores';
import { useRouter } from 'vue-router';

const router = useRouter();
const packagesStore = usePackagesStore();

const hasError = computed(() => packagesStore.error);
const hasPackageCode = computed(() => packagesStore.package.code);

if (!hasPackageCode.value) {
  router.push("/select");
}

async function onSubmit() {
    await packagesStore.update(packagesStore.package.code, 'In Shipping')
}
</script>

<template>
  <div class="flex flex-row h-[75%] w-[90%] bg-white rounded-xl">
    <div class="flex flex-col w-[70%] overflow-auto">
      <p class="py-10 px-20 text-left text-xl text-gray-800 font-bold mx-0 shrink-0">
        Contenu du colis
      </p>
      <div v-for="item in packagesStore.package.items" :key="item.id" class="px-20 text-left mx-0 shrink-0">
        {{ item.label }} : {{ item.quantity }}
      </div>
    </div>

    <div class="flex flex-col w-[30%] gap-3 p-5 bg-gray-100 rounded-b-none rounded-r-xl">
      <div class="bg-white rounded-xl h-48 p-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-[6px]">
            <h2 class="font-bold">Informations colis</h2>
          </div>
          <span
            class="bg-black text-xs text-white font-bold py-[2px] px-1 rounded whitespace-nowrap"
          >
            {{ packagesStore.package.code }}
          </span>
        </div>
        <hr class="bg-gray-700 border-none h-[0.5px] mt-[12px]" />
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-[6px]">
            {{ Math.round(packagesStore.package.weight * 100) / 100 }} kg
          </div>
          <div class="flex items-center gap-[6px]">
            {{ packagesStore.package.delivery_date }}
          </div>
          <div class="flex items-center gap-[6px]">
            {{ packagesStore.package.status }}
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl p-3 flex flex-col gap-3">
        <button type="button" class="rounded-full bg-black text-white p-2 w-full">
          <span class="flex gap-2 items-center justify-center px-2">
            <div class="flex items-center gap-2">
              <span class="text-base font-bold" @click="onSubmit">Valider le colis</span>
            </div></span
          >
        </button>
        <div v-if="hasError" class="flex gap-2">
          Erreur de validation
        </div>
        <button type="button" class="rounded-full border-2 border-black bg-white p-2 w-full">
          <span class="flex gap-2 items-center justify-center px-2">
            <div class="flex items-center gap-2">
              <span class="text-base font-bold" @click="router.push('/select')">Annuler</span>
            </div></span
          >
        </button>
      </div>
    </div>
  </div>
</template>
