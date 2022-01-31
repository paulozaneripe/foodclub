export default ({ app }, inject) => {
    inject('getErrorMessage', (error) => {
        return error.response.data.error.message;
    });
};
