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

<script src="./forgotPassword.js" />
<style lang="scss" src="./forgotPassword.scss" />
