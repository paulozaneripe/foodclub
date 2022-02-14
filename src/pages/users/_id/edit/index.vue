<template>
    <section>
        <Container class="user-edit">
            <ValidationObserver tag="div" ref="form" v-slot="{ handleSubmit }">
                <form
                    method="POST"
                    @submit.prevent="handleSubmit(submit)"
                    enctype="multipart/form-data"
                    novalidate
                >
                    <div class="user-image">
                        <img
                            id="avatar"
                            :src="avatar_url ? avatar_url : require('~/assets/images/avatar.png')"
                            :alt="'Avatar do usuário ' + $auth.user.name"
                        />
                        <span
                            id="change-photo"
                            class="material-icons"
                            aria-label="Alterar avatar de usuário"
                        >
                            party_mode
                            <input
                                class="icon"
                                type="file"
                                name="avatar"
                                accept="image/*"
                                title="Alterar avatar de usuário"
                                @change="handleFileInput($event)"
                            />
                        </span>
                    </div>
                    <CustomInput
                        v-model="email"
                        name="email"
                        max="255"
                        label="E-mail"
                        placeholder="E-mail do usuário"
                        readonly
                    />
                    <CustomInput
                        v-model="name"
                        name="name"
                        max="255"
                        label="Nome"
                        placeholder="Digite seu nome..."
                        rules="required"
                    />
                    <CustomTextArea
                        v-model="about"
                        name="about"
                        max="420"
                        label="Sobre"
                        placeholder="Digite algo sobre você..."
                        rules="min:40|max:410"
                    />
                    <h4>Alterar senha</h4>
                    <CustomInput
                        v-model.trim="oldPassword"
                        name="oldPassword"
                        type="password"
                        max="20"
                        label="Senha atual"
                        rules="min:6|max:20"
                    />
                    <CustomInput
                        v-model.trim="password"
                        name="password"
                        type="password"
                        max="20"
                        label="Nova senha"
                        rules="min:6|max:20"
                    />
                    <CustomInput
                        v-model.trim="repeatedPassword"
                        name="repeatedPassword"
                        type="password"
                        max="20"
                        label="Confirme sua nova senha"
                        rules="max:20|confirm:@password"
                        mode="aggressive"
                    />
                    <CustomButton
                        description="SALVAR ALTERAÇÕES"
                        color="save"
                    />
                </form>
            </ValidationObserver>
        </Container>
    </section>
</template>

<script>
import Container from '~/components/ui/Container/Container.vue';
import { ValidationObserver } from 'vee-validate';
import CustomButton from '~/components/ui/CustomButton/CustomButton.vue';
import CustomInput from '~/components/ui/CustomInput/CustomInput.vue';
import CustomTextArea from '~/components/ui/CustomTextArea/CustomTextArea.vue';

export default {
    layout: 'default',
    auth: true,
    middleware: 'checkUser',
    components: {
        Container,
        ValidationObserver,
        CustomButton,
        CustomInput,
        CustomTextArea,
    },
    head() {
        return {
            title: 'FoodClub - Editar conta',
        };
    },
    data() {
        return {
            email: '',
            avatar: '',
            name: '',
            about: '',
            oldPassword: '',
            password: '',
            repeatedPassword: '',
        };
    },
    created() {
        this.avatar_url = this.$auth.user.avatar_url;
        this.email = this.$auth.user.email;
        this.name = this.$auth.user.name;
        this.about = this.$auth.user.about;
    },
    methods: {
        handleFileInput(e) {
            const imageTag = document.getElementById('avatar');
            const avatarImage = e.target.files[0];

            if (avatarImage) {
                imageTag.src = URL.createObjectURL(avatarImage);
                this.avatar = avatarImage;
            }
        },
        async submit() {
            this.$refs.form.validate().then((success) => {
                if (!success) return;

                const formData = new FormData();
                if (this.avatar)
                    formData.append('avatar', this.avatar, this.avatar.name);
                formData.append('name', this.name);
                formData.append('about', this.about);
                formData.append('oldPassword', this.oldPassword);
                formData.append('password', this.password);
                formData.append('repeatedPassword', this.repeatedPassword);

                this.$axios
                    .put(`/api/users/${this.$route.params.id}/edit`, formData, {
                        headers: {
                            'Content-Type':
                                'multipart/form-data; boundary=${form._boundary}',
                        },
                    })
                    .then(async () => {
                        await this.$auth.fetchUser();
                        this.$router.push(`/users/${this.$route.params.id}`);
                        this.$filterToast(
                            this.$toast,
                            'Seus dados foram alterados com sucesso!'
                        );
                    })
                    .catch((error) => {
                        this.$filterToast(this.$toast, error);
                    });
            });
        },
    },
};
</script>

<style lang="scss">
.dark-mode .user-is-tabbing #change-photo:focus-within {
    outline: 2px solid $red;
}

.light-mode .user-is-tabbing #change-photo:focus-within {
    outline: 2px solid black;
}

.user-edit {
    .user-image {
        position: relative;
        text-align: center;
        margin: 0 auto 25px auto;

        img {
            display: block;
            object-fit: cover;
            max-width: 220px;
            width: 100%;
            height: 220px;
            min-height: 100%;
            margin: auto;
            border-radius: 50%;
            box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.2);
            outline: none;
        }

        #change-photo {
            position: absolute;
            display: block;
            overflow: hidden;
            left: 0;
            right: 0;
            bottom: -15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 45px;
            height: 45px;
            background-color: $blue;
            color: white;
            border-radius: 50%;
            transform: rotate(360deg);
            cursor: pointer;
            transition: background-color 0.4s, transform 0.4s;

            &:hover {
                transform: rotate(180deg);
                background-color: darken($blue, 5%);
            }

            input {
                position: absolute;
                overflow: hidden;
                opacity: 0;
                font-size: 0;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
    }

    h3,
    h4,
    p {
        text-align: center;
    }

    h3 {
        margin-bottom: 25px;
    }

    h4 {
        font-size: 2.6em;
        margin: 35px;
    }

    p {
        font-size: 1.6em;
    }

    button:last-of-type {
        margin-top: 25px;
    }
}
</style>
