export default function({ $auth, route, redirect }) {
    if (parseInt($auth.user.id) !== parseInt(route.params.id)) {
        return redirect('/');
    }
}
