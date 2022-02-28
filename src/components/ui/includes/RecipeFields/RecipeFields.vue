<template>
<ValidationObserver tag="div" ref="form" v-slot="{ handleSubmit }">
    <form
        method="POST"
        @submit.prevent="handleSubmit(submit)"
        enctype="multipart/form-data"
        novalidate
    >
        <label for="recipe-images">Imagens da receita (Envie até {{ uploadLimit }} imagens)</label>
        <ImageManager 
            id="recipe-images" 
            :upload-limit="uploadLimit" 
            v-model="images" 
            :old-images="oldImages"
            @removedImages="getRemovedImages"
        />
        <CustomInput
            v-model="title"
            name="title"
            max="60"
            label="Título da receita"
            placeholder="Digite um nome para sua receita..."
            rules="required|min:3|max:60"
        />
        <fieldset>
            <legend>Ingredientes</legend>
                <ul id="ingredients">
                    <li
                        v-for="(ingredient, index) in ingredients"
                        :key="index"
                    >
                        <ArrayInput
                            v-model="ingredient.value"
                            name="ingredients"
                            field="Ingrediente"
                            placeholder="Informe um ingrediente por campo..."
                            max="201"
                            :index="parseInt(index)"
                            @removeField="removeField(ingredients, index)"
                            @addField="addField(ingredients, 'ingredients')"
                        />
                    </li>
                </ul>
        </fieldset>
        <span
            class="add-button"
            role="button"
            tabindex="0"
            @click.prevent="addField(ingredients, 'ingredients')"
            @keydown.enter.prevent="addField(ingredients, 'ingredients')"
        >
            <span class="material-icons" aria-hidden="true">
                add
            </span>
            Adicionar ingrediente [Enter]
        </span>
        <fieldset>
            <legend>Modo de preparo</legend>
            <ul id="preparation">
                <li 
                    v-for="(step, index) in preparation" 
                    :key="index"
                >
                    <ArrayInput
                        v-model="step.value"
                        name="preparation"
                        field="Modo de preparo"
                        placeholder="Informe um passo por campo..."
                        max="201"
                        :index="parseInt(index)"
                        @removeField="removeField(preparation, index)"
                        @addField="addField(preparation, 'preparation')"
                    />
                </li>
            </ul>
        </fieldset>
        <span
            class="add-button"
            role="button"
            tabindex="0"
            @click.prevent="addField(preparation, 'preparation')"
            @keydown.enter.prevent="addField(preparation, 'preparation')"
        >
            <span class="material-icons" aria-hidden="true">
                add
            </span>
            Adicionar passo [Enter]
        </span>
        <CustomTextArea
            v-model="information"
            name="information"
            max="436"
            label="Informações (Opcional)"
            placeholder="Conte alguma curiosidade sobre esta receita..."
            rules="min:10|max:435"
        />
        <CustomButton
            class="save"
            :description="post ? 'SALVAR' : 'SALVAR ALTERAÇÕES'"
            color="save"
        />
    </form>
</ValidationObserver>
</template>

<script src="./RecipeFields.js" />
<style lang="scss" src="./RecipeFields.scss" scoped />
