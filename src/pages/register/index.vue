<template>
    <section class="register-section">
        <div class="form-panel">
            <form method="POST" @submit.prevent="submit()">
                <h2>Crie sua conta</h2>
                <AuthInput 
                    v-model="email"
                    name="email" 
                    type="email" 
                    label="email" 
                    placeholder="Seu e-mail" 
                    icon="email"
                />
                <AuthInput 
                    v-model="name"
                    name="name" 
                    label="nome" 
                    placeholder="Seu nome" 
                    icon="person"
                />
                <AuthInput 
                    v-model="password" 
                    name="password"
                    type="password" 
                    label="senha" 
                    placeholder="Sua senha" 
                    icon="lock"
                />
                <AuthInput 
                    v-model="confirmPassword" 
                    name="confirmPassword"
                    type="password" 
                    label="Confirme sua senha" 
                    placeholder="Confirme sua senha" 
                    icon="lock"
                />
                <button type="submit" class="login">CADASTRAR</button>
                <p>Já possui uma conta? <NuxtLink to="/login">Faça o login</NuxtLink></p>
            </form>
        </div>
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
                Junte-se a comunidade de chefs e compartilhe seus segredos culinários!
            </h1>
        </div>
    </section>
</template>

<script src="./register.js" />
<style lang="scss" src="./register.scss" />
