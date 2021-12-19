export const state = () => ({
    readableFont: false
});

export const mutations = {
    changeFont(state) {
        if (document.body.classList.contains('roboto')) {
            document.body.classList.remove('roboto');
            document.body.classList.add('open-dyslexic');
            state.readableFont = true;
        } else if (document.body.classList.contains('open-dyslexic')) {
            document.body.classList.remove('open-dyslexic');
            document.body.classList.add('roboto');
            state.readableFont = false;
        }

    }
};

export const actions = {
    changeFont(context) {
        context.commit('changeFont');
    }
};