export default defineNuxtConfig({
    devtools: { enabled: true },

    nitro: {
        experimental: {
            websocket: true,
        }
    },

    modules: ["@vueuse/nuxt"]
})