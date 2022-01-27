export default {
    srcDir: './src',
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
            { rel: 'icon', type: 'image/png', href: '/favicon.png?v2' }
        ]
    },
    css: [
        '@/assets/styles/global.scss'
    ],
    plugins: [
        { src: '~/plugins/persistedState.client.js', mode: 'client'},
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
        '@nuxtjs/auth'
    ],
    colorMode: {
        preference: 'system',
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
    serverMiddleware: [
        '~/api'
    ]
};
