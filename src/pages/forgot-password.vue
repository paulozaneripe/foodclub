<template>
    <section class="forgot-password-section">
        <ValidationObserver
            tag="div"
            class="form-panel"
            ref="form"
            v-slot="{ handleSubmit }"
        >
            <form
                method="POST"
                @submit.prevent="handleSubmit(submit())"
                novalidate
            >
                <h2>Esqueceu sua senha?</h2>
                <AuthInput
                    v-model="login.email"
                    name="email"
                    type="email"
                    max="255"
                    icon="email"
                    label="E-mail"
                    rules="required|email"
                />
                <button type="submit">ENVIAR E-MAIL DE RECUPERAÇÃO</button>
                <NuxtLink to="/login">Voltar ao Login</NuxtLink>
            </form>
        </ValidationObserver>
    </section>
</template>

<script>
import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import { ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    auth: 'guest',
    components: {
        AuthInput,
        ValidationObserver
    },
    head() {
        return {
            title: 'FoodClub - Esqueceu sua senha?',
        };
    },
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        async submit() {
            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

            });
        }
    }
};
</script>

<style lang="scss">
.dark-mode .forgot-password-section {
    .form-panel {
        background-color: $dark-primary;
    }

    button {
        background-color: $red;

        &:hover {
            background-color: darken($red, 5%);
        } 
    }
}

.light-mode .forgot-password-section {

    .form-panel {
        background-color: $light-primary;
    }

    button {
        background-color: black;

        &:hover {
            background-color: lighten(black, 8%);
        }
    }
}

.forgot-password-section {
    padding: 20px 0;

    .form-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);
        max-width: 420px;
        width: 100%;

        form {
            width: 100%;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
    
        a {
            display: block;
            font-size: 1.4em;
            text-align: center;
            font-weight: bold;
    
            &:hover {
                text-decoration: underline;
            }
        }
    
        button {
            width: 100%;
            height: 58px;
            border-radius: 10px;
            font-weight: bold;
            font-size: 1.4em;
            cursor: pointer;
            color: white;
            transition: background-color 350ms;
            margin-bottom: 20px;

            &:disabled {
                color: darken(white, 20%);
            }
        }
    }
}
</style>
