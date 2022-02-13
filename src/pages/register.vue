<template>
    <section class="register-section">
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
                <h2>Crie sua conta</h2>
                <AuthInput
                    v-model="registerData.email"
                    name="email"
                    type="email"
                    max="255"
                    icon="email"
                    label="Seu e-mail"
                    rules="required|email"
                />
                <AuthInput
                    v-model="registerData.name"
                    name="name"
                    max="255"
                    icon="person"
                    label="Seu nome"
                    rules="required"
                />
                <AuthInput
                    v-model.trim="registerData.password"
                    name="password"
                    type="password"
                    max="20"
                    icon="lock"
                    label="Sua senha"
                    rules="required|min:6|max:20"
                />
                <AuthInput
                    v-model.trim="registerData.repeatedPassword"
                    name="repeatedPassword"
                    type="password"
                    max="20"
                    icon="lock"
                    label="Confirme sua senha"
                    rules="required|max:20|confirm:@password"
                    mode="aggressive"
                />
                <CustomButton description="CADASTRAR" />
                <p>
                    Já possui uma conta?
                    <NuxtLink to="/login">Faça o login</NuxtLink>
                </p>
            </form>
        </ValidationObserver>
        <div class="right-panel">
            <div class="logo">
                <NuxtLink to="/">
                    <img
                        src="~/assets/images/logo.svg"
                        alt="Logo do FoodClub"
                    />
                </NuxtLink>
            </div>
            <h1>
                Junte-se a comunidade de chefs e compartilhe seus segredos
                culinários!
            </h1>
        </div>
    </section>
</template>

<script>
import AuthInput from '~/components/ui/AuthInput/AuthInput.vue';
import CustomButton from '~/components/ui/CustomButton/CustomButton.vue';
import { extend, ValidationObserver } from "vee-validate";

export default {
    layout: 'auth',
    auth: 'guest',
    components: {
        AuthInput,
        CustomButton,
        ValidationObserver
    },
    data() {
        return {
            registerData: {
                email: '',
                name: '',
                password: '',
                repeatedPassword: ''
            }
        };
    },
    methods: {
        async submit() {
            this.$refs.form.validate().then(success => {

                if (!success) {
                    return;
                }

                this.$axios.post("/api/users/create", this.registerData)
                    .then(() => {
                        this.$router.push('/login');
                        this.$filterToast(this.$toast, "Usuário cadastrado com sucesso!");
                    }).catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            });
        }
    }
};
</script>

<style lang="scss">
.dark-mode .register-section {
    .form-panel {
        background-color: $dark-primary;
    }
}

.light-mode .register-section {
    .logo {
        filter: invert(100%);
    }

    .form-panel {
        background-color: $light-primary;
    }
}

.register-section {
    padding: 20px 0;

    .right-panel {
        max-width: 360px;
        margin-left: 60px;
    
        .logo {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 40px;
    
            img {
                width: 120px;
            }
        }
    
        h1 {
            text-align: right;
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
    
        h2 {
            text-align: center;
            margin-bottom: 30px;
        }
    
        a {
            font-weight: bold;
    
            &:hover {
                text-decoration: underline;
            }
        }
    
        p {
            margin-top: 15px;
            font-size: 1.4em;
        }
    }
}

@media (max-width: 1199.98px) {
    .register-section .right-panel {
        margin: 40px auto 0 auto;

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
