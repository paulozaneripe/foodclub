export default function({ $auth, route, redirect }) {
    if (route.path.includes("/users") && parseInt($auth.user.id) !== parseInt(route.params.id)) {
        return redirect('/');
    }
}
