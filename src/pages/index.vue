<template>
    <section>
        <SearchBar />
        <div id="cards">
            <div class="card">
                <img
                    src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="hamburger"
                />
                <div class="title">
                    <p>Hamburger Triplo Bacon</p>
                </div>
            </div>
            <div class="card">
                <img
                    src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="hamburger"
                />
                <div class="title">
                    <p>Hamburger Triplo Bacon</p>
                </div>
            </div>
                        <div class="card">
                <img
                    src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="hamburger"
                />
                <div class="title">
                    <p>Hamburger Triplo Bacon</p>
                </div>
            </div>
                        <div class="card">
                <img
                    src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="hamburger"
                />
                <div class="title">
                    <p>Hamburger Triplo Bacon</p>
                </div>
            </div>
            <div class="card">
                <img
                    src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="hamburger"
                />
                <div class="title">
                    <p>Hamburger Triplo Bacon</p>
                </div>
            </div>
                        <div class="card">
                <img
                    src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="hamburger"
                />
                <div class="title">
                    <p>Hamburger Triplo Bacon</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SearchBar from '~/components/ui/SearchBar/SearchBar.vue';

export default {
    components: {
        SearchBar
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>

#cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    margin: 50px auto;
    justify-content: center;
    align-items: center;
    text-align: left;
}

.card {
    width: 100%;
    max-height: 200px;
    border-radius: 25px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    white-space: nowrap;
}

.card img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
}

.card .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #3a3a3a;
    margin-top: -5px;
    padding: 0 20px;
    height: 45px;
    border-radius: 0 0 25px 25px;

    p {
        color: white;
        font-size: 1.4em;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
    }
}
</style>
