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
                    v-model="email"
                    name="email"
                    type="email"
                    max="255"
                    icon="email"
                    label="Seu e-mail"
                    rules="required|email"
                />
                <AuthInput
                    v-model="name"
                    name="name"
                    max="255"
                    icon="person"
                    label="Seu nome"
                    rules="required|alpha_dash"
                />
                <AuthInput
                    v-model.trim="password"
                    name="password"
                    type="password"
                    max="20"
                    icon="lock"
                    label="Sua senha"
                    rules="required|min:6|max:20"
                />
                <AuthInput
                    v-model.trim="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    max="20"
                    icon="lock"
                    label="Confirme sua senha"
                    rules="required|max:20|confirm:@password"
                    mode="aggressive"
                />
                <button type="submit">CADASTRAR</button>
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
                        src="~/assets/images/foodclublogo.svg"
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

<script src="./register.js" />
<style lang="scss" src="./register.scss" />
