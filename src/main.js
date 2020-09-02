import Vue from "vue";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
import router from "./router";
import Header from "./Header.vue";
import Main from "./Main.vue";

Vue.config.productionTip = false;

Vue.prototype.$storage = new Vue({
    data: {
        fullName: localStorage.getItem("fullName"),
        choiceName: localStorage.getItem("choiceName")
    },
    watch: {
        fullName(value) {localStorage.setItem("fullName", value)},
        choiceName(value) {localStorage.setItem("choiceName", value)}
    }
});

Vue.use(VueChartkick, {adapter: Chart});

new Vue({
    router,
    render: function (h) { return h(Header) }
}).$mount("#header");

new Vue({
    router,
    render: function (h) { return h(Main) }
}).$mount("#main");
