<template>
    <section>
        <Container class="user-information">
            <div class="user-image">
                <img src="~/assets/images/avatar.png" alt="Imagem do usuário">
                    <a :href="`/users/${ $auth.user.id }/edit`" class="icon" title="Alterar imagem de usuário">
                        <span id="change-photo" class="material-icons">
                            party_mode
                        </span>
                    </a>
            </div>
            <h3>{{ $auth.user.name }}</h3>
            <p>
                {{ $auth.user.about === null || $auth.user.about === '' ? 'Este usuário não possui uma descrição.' : ''}}
            </p>
            <hr>
            <h4>Receitas publicadas</h4>
            <p>
                Nenhuma receita publicada por este usuário.
            </p>
            <CustomLink :route="`/users/${ $auth.user.id }/edit`" description="EDITAR" type="edit"/>
        </Container>
    </section>
</template>

<script src="./userId.js" />
<style lang="scss" src="./userId.scss" />
