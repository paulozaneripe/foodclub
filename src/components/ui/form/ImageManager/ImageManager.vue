<template>
    <div :id="id" class="image-manager">
        <span class="material-icons image-input">
            add
            <input 
                type="file" 
                id="images" 
                name="images" 
                title=""
                accept="image/*" 
                multiple
                @change="handleFileInput"
            >
        </span>
        <span 
            v-for="(image, index) in oldImages" 
            @click="removeOldImage($event)" 
            :key="index" 
            :id="image.id"
            class="image" 
            tabindex="0" 
            aria-label="Remover imagem"
        >
            <img :src="image.url" :alt="`Imagem de ordem ${index} da Receita`">
            <span class="material-icons">close</span>
        </span>
        <input type="hidden" name="removed-images">
    </div>
</template>

<script src="./ImageManager.js" />
<style lang="scss" src="./ImageManager.scss" />
