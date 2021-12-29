<template>
    <section class="login-section">
        <div class="left-panel">
            <div id="logo">
                <NuxtLink to="/">
                    <img
                        src="~/assets/images/foodclublogo.svg"
                        alt="Logo do FoodClub"
                    />
                </NuxtLink>
            </div>
            <h1>
                Faça seu login e desfrute das mais
                deliciosas receitas!
            </h1>
        </div>
        <div class="form-panel">
            <form method="POST" @submit.prevent="submit()">
                <h2>Login</h2>
                <AuthInput 
                    v-model="email" 
                    name="email"
                    type="email" 
                    label="email" 
                    placeholder="E-mail" 
                    icon="email"
                />
                <AuthInput 
                    v-model="password" 
                    name="password"
                    type="password" 
                    label="senha" 
                    placeholder="Senha" 
                    icon="lock"
                />
                <NuxtLink class="forgot-password" to="/forgot-password">Esqueceu sua senha?</NuxtLink>
                <button type="submit" class="login">ENTRAR</button>
                <p>Não possui uma conta? <NuxtLink to="/register">Cadastre-se</NuxtLink></p>
            </form>
        </div>
    </section>
</template>

<script src="./login.js" />
<style lang="scss" src="./login.scss" />
