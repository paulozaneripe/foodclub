<template>
    <section>
        <div class="left-panel">
            <h1>
                Faça seu login e desfrute das mais
                deliciosas receitas!
            </h1>
        </div>
        <div class="form-panel">
            <form action="">
                <h2>Login</h2>
                <div class="input-field">
                    <i class="material-icons">email</i>
                    <input type="email" name="email" placeholder="E-mail">
                </div>
                <div class="input-field">
                    <i class="material-icons">lock</i>
                    <input type="password" name="password" placeholder="Senha">
                </div>
                <button type="submit" class="login">Entrar</button>
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

.left-panel {
    max-width: 360px;
    margin-right: 50px;

    h1 {
        line-height: normal;
        text-align: center;
    }
}

.dark-mode {
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

.light-mode {
    .form-panel {
        background-color: $light-primary;

        i {
            color: $gray-icon;
        }

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

.form-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);

    h2 {
        text-align: center;
        margin-bottom: 35px;
    }

    .input-field {
        width: 100%;
        height: 58px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 14fr;
        padding: 0 0 0 20px;

        i {
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
        height: 100%;
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

    button {
        width: 100%;
        height: 58px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1.4em;
        cursor: pointer;
        color: white;
        transition: background-color 350ms;
    }
}

@media (max-width: 991.98px) {
    .left-panel {
        display: none;
    }
}

</style>
