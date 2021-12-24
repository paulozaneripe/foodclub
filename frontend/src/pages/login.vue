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
            <form action="">
                <h2>Login</h2>
                <div class="input-field">
                    <span class="material-icons">email</span>
                    <input id="email" type="email" name="email" aria-label="email" title="Digite seu email" placeholder="E-mail">
                </div>
                <div class="input-field">
                    <span class="material-icons">lock</span>
                    <input id="password" type="password" name="password" aria-label="senha" title="Digite sua senha" placeholder="Senha">
                </div>
                <NuxtLink class="forgot-password" to="/forgot-password">Esqueceu sua senha?</NuxtLink>
                <button type="submit" class="login">ENTRAR</button>
                <p>Não possui uma conta?&nbsp;&nbsp;<NuxtLink to="/register">Cadastre-se</NuxtLink></p>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'auth',

};
</script>

<style lang="scss">
.dark-mode .login-section {
    #logo {
        filter: invert(100%);
    }

    .form-panel {
        background-color: $dark-primary;
    }

    .input-field {
        background-color:#464646;

        input, input::placeholder {
            color: white;
        }
    }

    button {
        background-color: $red;

        &:hover {
            background-color: darken($red, 5%);
        } 
    }
}

.light-mode .login-section {
    .form-panel {
        background-color: $light-primary;

        button {
            &:focus {
                outline: 2px solid black;
                outline-offset: 3px;
            }
        }
    }

    .input-field {
        background-color: $light-background;

        input, input::placeholder {
            color: black;
        }
    }

    button {
        background-color: black;

        &:hover {
            background-color: lighten(black, 8%);
        }
    }
}

.login-section .left-panel {
    max-width: 360px;
    margin-right: 50px;

    #logo {
        margin-bottom: 40px;

        img {
            width: 12em;
        }
    }

    h1 {
        line-height: normal;
        text-align: left;
        line-height: 1.4em;
    }
}

.login-section .form-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);

    h2 {
        display: none;
        text-align: center;
        margin-bottom: 35px;
    }

    label {
        font-size: 1.4em;
    }

    .input-field {
        width: 100%;
        height: 58px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 14fr;
        padding: 0 0 0 20px;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1.25rem;
            outline: none;
        }

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        &:focus-within { 
            outline: 2px solid;
        }
    }

    input {
        background: none;
        width: 100%;
        border-radius: 0 10px 10px 0;
        border: none;
        font-size: 1.4em;
        text-overflow: ellipsis;
        padding: 10px 20px;
        outline: none;

        &:focus {
            outline: none !important;
        }
    }

    a {
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }

    a.forgot-password {
        display: block;
        margin-bottom: 20px;
        font-size: 1.4em;
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
    }

    p {
        font-size: 1.4em;
    }
}

@media (max-width: 991.98px) {
    .login-section .left-panel {
        display: none;
    }

    .login-section .form-panel h2 {
        display: block;
    }
}

</style>
