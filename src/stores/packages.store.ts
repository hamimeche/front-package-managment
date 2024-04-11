import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const usePackagesStore = defineStore({
    id: 'packages',
    state: () => ({
        package: {},
        loading: false,
        error: false,
    }),
    actions: {
        async get(id) {
            this.error = false;
            this.loading = true;
            const url = `${baseUrl}/packages/${id}/`
            try {
                this.package = await fetchWrapper.get(url)
            } catch (e) {
                this.error = true;
                this.package = {};
            }
            this.loading = false;
        },
        async update(id, status) {
            this.error = false;
            this.loading = true;
            const url = `${baseUrl}/packages/${id}/`
            try {
                this.package = await fetchWrapper.patch(url, {id, status})
            } catch (e) {
                this.error = true;
                this.package = {};
            }
            this.loading = false;
        },
    }
});
