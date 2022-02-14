<template>
    <section class="login-section">
        <div class="left-panel">
            <div class="logo">
                <NuxtLink to="/">
                    <img
                        src="~/assets/images/logo.svg"
                        alt="Logo do FoodClub"
                    />
                </NuxtLink>
            </div>
            <h1>Faça seu login e desfrute das mais deliciosas receitas!</h1>
        </div>

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
                <AuthInput
                    v-model="loginData.email"
                    name="email"
                    type="email"
                    max="255"
                    icon="email"
                    label="E-mail"
                    rules="required|email"
                />
                <AuthInput
                    v-model.trim="loginData.password"
                    name="password"
                    type="password"
                    max="20"
                    icon="lock"
                    label="Senha"
                    rules="required"
                />
                <NuxtLink class="forgot-password" to="/forgot-password">
                    Esqueceu sua senha?
                </NuxtLink>
                <CustomButton description="ENTRAR" />
                <p>
                    Não possui uma conta?
                    <NuxtLink to="/register">Cadastre-se</NuxtLink>
                </p>
            </form>
        </ValidationObserver>
    </section>
</template>

<script>
import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import CustomButton from '~/components/ui/CustomButton/CustomButton.vue';
import { ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    auth: 'guest',
    components: {
        AuthInput,
        CustomButton,
        ValidationObserver
    },
    head() {
        return {
            title: 'FoodClub - Login',
        };
    },
    data() {
        return {
            loginData: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        async submit() {
            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

                this.$auth.loginWith('local', { data: this.loginData })
                    .then(() => {
                        this.$filterToast(this.$toast, "Usuário logado com sucesso!");
                    }).catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            });
        }
    }
};

</script>

<style lang="scss">
.dark-mode .login-section {
    .form-panel {
        background-color: $dark-primary;
    }
}

.light-mode .login-section {
    .logo {
        filter: invert(100%);
    }

    .form-panel {
        background-color: $light-primary;
    }
}

.login-section {
    padding: 20px 0;

    .left-panel {
        max-width: 360px;
        margin-right: 60px;
    
        .logo {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 40px;
    
            img {
                width: 120px;
            }
        }
    
        h1 {
            text-align: left;
        }
    }

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
    
        a {
            font-weight: bold;
    
            &:hover {
                text-decoration: underline;
            }

            &.forgot-password {
                display: block;
                margin-bottom: 20px;
                font-size: 1.4em;
            }
        }
    
        p {
            font-size: 1.4em;
            margin-top: 20px;
        }
    }
}

@media (max-width: 1199.98px) {
    .login-section .left-panel {
        margin: 0 auto 40px auto;

        h1 {
            text-align: center;
            font-size: 2em;
        }

        .logo {
            justify-content: center;
            margin: 0 auto 20px auto;
        }
    }
}
</style>
