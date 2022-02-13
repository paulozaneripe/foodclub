export default ({ app }, inject) => {
    inject('filterToast', (toast, value, error) => {

        if (value instanceof Error) {
            return toast.error(value.response.data.error.message, {
                icon: {
                    iconClass: 'material-icons',
                    iconChildren: 'warning',
                    iconTag: 'span'
                }
            });
        } else if (error) {
            return toast.error(value, {
                icon: {
                    iconClass: 'material-icons',
                    iconChildren: 'warning',
                    iconTag: 'span'
                }
            });
        }

        return toast.success(value, {
            icon: {
                iconClass: 'material-icons',
                iconChildren: 'check_circle',
                iconTag: 'span'
            }
        });
    });
};
