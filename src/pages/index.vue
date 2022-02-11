<template>
    <section>
        <SearchBar />
        <Container>
            <h2>Receitas da semana</h2>
            <div id="cards">
                <div class="card">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="pizza"
                    />
                    <div class="title">
                        <p>Pizza Napolitana</p>
                    </div>
                </div>
                <div class="card">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="pizza"
                    />
                    <div class="title">
                        <p>Pizza Napolitana</p>
                    </div>
                </div>
                            <div class="card">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="pizza"
                    />
                    <div class="title">
                        <p>Pizza Napolitana</p>
                    </div>
                </div>
                            <div class="card">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="pizza"
                    />
                    <div class="title">
                        <p>Pizza Napolitana</p>
                    </div>
                </div>
                <div class="card">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="pizza"
                    />
                    <div class="title">
                        <p>Pizza Napolitana</p>
                    </div>
                </div>
                            <div class="card">
                    <img
                        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="pizza"
                    />
                    <div class="title">
                        <p>Pizza Napolitana</p>
                    </div>
                </div>
            </div>
        </Container>

    </section>
</template>

<script>
import SearchBar from '~/components/ui/SearchBar/SearchBar.vue';
import Container from '../components/ui/Container/Container.vue';

export default {
    components: {
        SearchBar,
        Container
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

h2 {
    margin-top: -10px;
}

#cards {
    margin-top: 20px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: left;
}

.card {
    width: 100%;
    max-height: 200px;
    border-radius: 25px;
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
    background-color: $dark-background;
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

@media (max-width: 380.98px) {
    #cards {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
}
</style>
