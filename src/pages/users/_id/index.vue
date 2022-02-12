<template>
    <section>
        <Container class="user-information">
            <div class="user-image">
                <img src="~/assets/images/avatar.png" alt="Imagem do usuário">
                    <CustomLink :route="`/users/${ this.user.id }/edit`" description="EDITAR" color="edit"/>
            </div>
            <h3>{{ this.user.name }}</h3>
            <p>
                {{ this.user.about === null || this.user.about === '' ? 'Este usuário não possui uma descrição.' : ''}}
            </p>
            <hr>
            <h4>Receitas publicadas</h4>
            <p>
                Nenhuma receita publicada por este usuário.
            </p>
            <CustomLink v-if="$auth.user.id === this.user.id" :route="`/users/${ this.user.id }/edit`" description="EDITAR" color="edit"/>
        </Container>
    </section>
</template>

<script src="./userId.js" />
<style lang="scss" src="./userId.scss" />
