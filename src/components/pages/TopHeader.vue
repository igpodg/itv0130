<template>
    <div>
        <div class="d-none d-md-block">
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3
            headerstuff border-bottom shadow-sm text-white">
                <router-link to="/descr" class="btn btn-primary mr-3">Tutvusta brändidega</router-link>
                <router-link to="/stat" class="btn btn-primary my-0 mr-md-auto d-none d-md-block">Statistika</router-link>
                <nav class="my-2 my-md-0 mr-md-3">
                    <span class="p-2 text-white"><useraccount :key="$route.fullPath"></useraccount></span>
                </nav>
                <router-link to="/logout_do" class="btn btn-outline-light" replace>
                    <useraccount :key="$route.fullPath" button></useraccount></router-link>
            </div>
        </div>
        <div>
            <div class="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 d-md-none
            headerstuff border-bottom shadow-sm text-white">
                <div class="row">
                    <div class="col-8">
                        <router-link to="/descr" class="btn btn-primary mr-3 float-left">Tutvusta brändidega</router-link>
                    </div>
                    <div class="col-4">
                        <router-link to="/logout_do" class="btn btn-outline-light float-right" replace>
                            <useraccount :key="$route.fullPath" button></useraccount></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UserAccount from "../UserAccount.vue";

    export default {
        name: "topheader",
        components: {
            "useraccount": UserAccount
        }
    }
</script>
