<template>
    <section class="login-section">
        <div class="left-panel">
            <div class="logo">
                <NuxtLink to="/">
                    <img
                        src="~/assets/images/foodclublogo.svg"
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
                    v-model="email"
                    name="email"
                    type="email"
                    max="255"
                    icon="email"
                    label="E-mail"
                    rules="required|email"
                />
                <AuthInput
                    v-model.trim="password"
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
                <button type="submit">ENTRAR</button>
                <p>
                    Não possui uma conta?
                    <NuxtLink to="/register">Cadastre-se</NuxtLink>
                </p>
            </form>
        </ValidationObserver>
    </section>
</template>

<script src="./login.js" />
<style lang="scss" src="./login.scss" />
