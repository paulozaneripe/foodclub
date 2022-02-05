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
            { rel: 'icon', type: 'image/png', href: '/favicon.png' }
        ]
    },
    css: [
        '@/assets/styles/global.scss'
    ],
    plugins: [
        { src: '~/plugins/persistedState.client.js', mode: 'client' },
        { src: '~plugins/filterToast.js', mode: 'client'},
        '~plugins/vueMask.js',
        '~plugins/veeValidate.js'
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
        fallback: 'dark'
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
        timeout: 5000,
        maxToasts: 3,
        pauseOnHover: false,
        cssFile: "~/assets/styles/toast.scss"
    },
    serverMiddleware: [
        '~/api'
    ],
    auth: {
        localStorage: false,
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/users/login', method: 'post', propertyName: 'token' },
                    logout: { url: '/api/users/logout', method: 'post' },
                    user: { url: '/api/users', method: 'get', propertyName: false }
                }
            }
        },
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/',
            home: '/'
        }
    }
};
