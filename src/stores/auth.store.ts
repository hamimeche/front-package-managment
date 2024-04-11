import { defineStore } from 'pinia';
import { fetchWrapper, router } from '@/helpers';

interface User {
    id: number;
    username: string;
    token: string;
}

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
        returnUrl: null as string | null,
        loading: false,
        error: false,
    }),
    actions: {
        async login(username: string, password: string) {
            this.loading = true;
            try {
                this.user = await fetchWrapper.post<User>(`${baseUrl}/authentication/login/`, { username, password });
            } catch(e) {
                this.error = true;
            }
            this.loading = false;
            localStorage.setItem('user', JSON.stringify(this.user));
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});