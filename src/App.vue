<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();

const style = computed(() => ({
  'background-image':
    'url("https://elyn.s3.eu-west-3.amazonaws.com/merchant_data/thebradery/background_v2.jpg")'
}))
</script>

<template>
  <div
    class="flex justify-center items-center w-screen h-screen bg-fixed bg-center bg-no-repeat bg-cover"
    :style="style"
  >
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-nav">
            <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
            <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
        </div>
    </nav>
    <RouterView />
  </div>
</template>
