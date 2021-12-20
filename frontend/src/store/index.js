export const state = () => ({
    readableFont: false,
    fontSize: "standard"
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
        if (state.fontSize === "giant") {
            document.body.classList.remove('giant-font');
            document.body.classList.add('big-font');
            state.fontSize = "big";
        } else if (state.fontSize === "big") {
            document.body.classList.remove('big-font');
            document.body.classList.add('medium-font');
            state.fontSize = "medium";
        } else if (state.fontSize === "medium") {
            document.body.classList.remove('medium-font');
            document.body.classList.add('standard-font');
            state.fontSize = "standard";
        }
    },
    increaseFontSize(state) {
        if (state.fontSize === "standard") {
            document.body.classList.remove('standard-font');
            document.body.classList.add('medium-font');
            state.fontSize = "medium";
        } else if (state.fontSize === "medium") {
            document.body.classList.remove('medium-font');
            document.body.classList.add('big-font');
            state.fontSize = "big";
        } else if (state.fontSize === "big") {
            document.body.classList.remove('big-font');
            document.body.classList.add('giant-font');
            state.fontSize = "giant";
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
