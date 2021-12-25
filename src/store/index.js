export const state = () => ({
    readableFont: false,
    fontSize: "standard-font"
});

export const mutations = {
    changeFont(state) {
        if (state.readableFont === false) {
            document.body.classList.remove('roboto');
            document.body.classList.add('open-dyslexic');
            state.readableFont = true;
        } else {
            document.body.classList.remove('open-dyslexic');
            document.body.classList.add('roboto');
            state.readableFont = false;
        }
    },
    decreaseFontSize(state) {
        if (document.body.classList.contains('giant-font')) {
            document.body.classList.remove('giant-font');
            document.body.classList.add('big-font');
            state.fontSize = "big-font";
        } else if (document.body.classList.contains('big-font')) {
            document.body.classList.remove('big-font');
            document.body.classList.add('medium-font');
            state.fontSize = "medium-font";
        } else if (document.body.classList.contains('medium-font')) {
            document.body.classList.remove('medium-font');
            document.body.classList.add('standard-font');
            state.fontSize = "standard-font";
        }
    },
    increaseFontSize(state) {
        if (document.body.classList.contains('standard-font')) {
            document.body.classList.remove('standard-font');
            document.body.classList.add('medium-font');
            state.fontSize = "medium-font";
        } else if (document.body.classList.contains('medium-font')) {
            document.body.classList.remove('medium-font');
            document.body.classList.add('big-font');
            state.fontSize = "big-font";
        } else if (document.body.classList.contains('big-font')) {
            document.body.classList.remove('big-font');
            document.body.classList.add('giant-font');
            state.fontSize = "giant-font";
        }
    }
};

export const actions = {
    changeFont(context) {
        context.commit('changeFont');
    },
    decreaseFontSize(context) {
        context.commit('decreaseFontSize');
    },
    increaseFontSize(context) {
        context.commit('increaseFontSize');
    }
};
