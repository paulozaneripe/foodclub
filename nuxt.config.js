import dotenv from 'dotenv';
dotenv.config();

export default {
    srcDir: './src',
    loading: false,
    head: {
        title: 'FoodClub',
        htmlAttrs: {
            lang: 'pt-br'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A website that uses a11y practices to help you share your favorite food recipes' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { id: 'faviconTag', rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
        ]
    },
    css: [
        '@/assets/styles/global.scss'
    ],
    plugins: [
        { src: '~/plugins/persistedState.client.js', ssr: true },
        { src: '~/plugins/filterToast.js', ssr: true },
        '~/plugins/vueMask.js',
        '~/plugins/clickaway',
        '~/plugins/veeValidate.js'
    ],
    components: false,
    buildModules: [
        '@nuxtjs/color-mode'
    ],
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        "vue-toastification/nuxt"
    ],
    colorMode: {
        preference: 'light',
        fallback: 'light'
    },
    styleResources: {
        scss: [
            '~/assets/styles/variables.scss'
        ]
    },
    googleFonts: {
        families: {
            Roboto: true
        }
    },
    build: {
        maxChunkSize: 300000,
        splitChunks: {
            layouts: true
        },
        loaders: {
            scss: {
                implementation: require('sass'),
            },
        },
        transpile: ['vee-validate']
    },
    toast: {
        timeout: 4000,
        maxToasts: 3,
        pauseOnHover: false,
        cssFile: "~/assets/styles/toast.scss"
    },
    serverMiddleware: [
        '~/api'
    ],
    axios: {
        baseURL: process.env.BASE_URL
    },
    router: {
        middleware: ['auth']
    },
    auth: {
        localStorage: false,
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/users/login', method: 'post', propertyName: 'token' },
                    user: { url: '/api/users', method: 'get', propertyName: false },
                    logout: false
                }
            }
        },
        redirect: {
            login: '/login',
            logout: '/login',
            callback: '/',
            home: '/'
        }
    }
};
