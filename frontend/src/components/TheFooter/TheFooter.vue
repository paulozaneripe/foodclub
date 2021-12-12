<template>
    <footer>
        <div id="footer-description">
            <p>
                © Copyright {{ currentYear }} - FoodClub - Todos os direitos
                reservados
            </p>
        </div>
    </footer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
});
</script>

<style lang="scss" src="./TheFooter.scss" scoped />
