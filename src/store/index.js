export const state = () => ({
    animations: true,
    readableFont: false,
    bigLetterSpacing: false,
    fontSize: "standard-font "
});

export const mutations = {
    toggleAnimations(state) {
        state.animations ?
            document.body.classList.add('no-animations') :
            document.body.classList.remove('no-animations');

        state.animations = !state.animations;
    },
    changeFont(state) {
        if (!state.readableFont) {
            document.body.classList.remove('roboto');
            document.body.classList.add('open-dyslexic');
        } else {
            document.body.classList.remove('open-dyslexic');
            document.body.classList.add('roboto');
        }

        state.readableFont = !state.readableFont;
    },
    toggleBigLetterSpacing(state) {
        state.bigLetterSpacing ?
            document.body.classList.remove('big-letter-spacing') :
            document.body.classList.add('big-letter-spacing');

        state.bigLetterSpacing = !state.bigLetterSpacing;
    },
    decreaseFontSize(state) {
        if (document.body.classList.contains('giant-font')) {
            document.body.classList.remove('giant-font');
            document.body.classList.add('big-font');
            state.fontSize = "big-font ";
        } else if (document.body.classList.contains('big-font')) {
            document.body.classList.remove('big-font');
            document.body.classList.add('medium-font');
            state.fontSize = "medium-font ";
        } else if (document.body.classList.contains('medium-font')) {
            document.body.classList.remove('medium-font');
            document.body.classList.add('standard-font');
            state.fontSize = "standard-font ";
        }
    },
    increaseFontSize(state) {
        if (document.body.classList.contains('standard-font')) {
            document.body.classList.remove('standard-font');
            document.body.classList.add('medium-font');
            state.fontSize = "medium-font ";
        } else if (document.body.classList.contains('medium-font')) {
            document.body.classList.remove('medium-font');
            document.body.classList.add('big-font');
            state.fontSize = "big-font ";
        } else if (document.body.classList.contains('big-font')) {
            document.body.classList.remove('big-font');
            document.body.classList.add('giant-font');
            state.fontSize = "giant-font ";
        }
    },
    resetA11ySettings(state) {
        state.animations = true;
        state.readableFont = false;
        state.fontSize = "standard-font ";
        state.bigLetterSpacing = false;

        if(document.body.classList.contains('user-is-tabbing')) {
            document.body.className = 'roboto standard-font user-is-tabbing';
        } else {
            document.body.className = 'roboto standard-font';
        }
    }
};

export const actions = {
    toggleAnimations(context) {
        context.commit('toggleAnimations');
    },
    changeFont(context) {
        context.commit('changeFont');
    },
    toggleBigLetterSpacing(context) {
        context.commit('toggleBigLetterSpacing');
    },
    decreaseFontSize(context) {
        context.commit('decreaseFontSize');
    },
    increaseFontSize(context) {
        context.commit('increaseFontSize');
    },
    resetA11ySettings(context) {
        context.commit('resetA11ySettings');
    }
};
