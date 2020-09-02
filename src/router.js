import Vue from "vue";
import Router from "vue-router";

import Index from "./components/pages/Index.vue";
import Descr from "./components/pages/Descr.vue";
import Login from "./components/pages/Login.vue";
import Choose from "./components/pages/Choose.vue";
import Thanks from "./components/pages/Thanks.vue";
import Stat from "./components/pages/Stat.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {path: "/", component: Index},
        {path: "/descr", component: Descr},
        {path: "/login", component: Login},
        {path: "/choose", component: Choose},
        {path: "/thanks", component: Thanks},
        {path: "/stat", component: Stat}
    ]
});

router.afterEach((to, from) => {
    if (to.path === "/begin") {
        let isLoggedIn = (Vue.prototype.$storage.fullName !== null &&
            Vue.prototype.$storage.fullName.length > 0);
        if (isLoggedIn)
            router.push("/choose");
        else
            router.push("/login");
    } else if (to.path === "/login_do") {
        //Vue.prototype.$storage.fullName = "Nimi Perenimi";
        router.push("/choose");
    } else if (to.path === "/logout_do") {
        let isLoggedIn = (Vue.prototype.$storage.fullName !== null &&
            Vue.prototype.$storage.fullName.length > 0);
        Vue.prototype.$storage.fullName = "";
        if (isLoggedIn)
            router.push("/");
        else
            router.push("/login");
    }
});

export default router;
