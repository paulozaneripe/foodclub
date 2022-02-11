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
            <CustomInput                    
                v-model.trim="name"
                name="name"
                max="20"
                label="Nome"
                placeholder="Digite seu nome..."
                rules="required|max:20"
            />
            <CustomInput                    
                v-model="surname"
                name="surname"
                type="date"
                label="Sobrenome"
            />
            <CustomButton :route="`/users/${ $auth.user.id }/edit`" description="SALVAR ALTERAÇÕES" type="save"/>
        </Container>
    </section>
</template>

<script src="./edit.js" />
<style lang="scss" src="./edit.scss" />
