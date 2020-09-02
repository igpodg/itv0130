<template>
    <div>
        <h1 class="text-center mb-4">Kumb variant Teile rohkem meeldib?</h1>
        <div class="container">
            <div class="card-deck text-center">
                <bigchoice ref="ttu" name="ttu" caption="TTÜ logo" image="ttu_logo.png"></bigchoice>
                <bigchoice ref="taltech" name="taltech" caption="TalTech logo" image="taltech_logo.png"></bigchoice>
            </div>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-primary btn-lg py-3 px-5 mt-4" @click="routeChoice">Esita</button>
        </div>
        <router-link type="button" class="btn btn-warning btn-lg orangebutton orangebutton-margin d-md-none"
                     tag="button" to="/stat">Statistika</router-link>
    </div>
</template>

<script>
    import BigChoice from "../BigChoice.vue";

    export default {
        name: "choose",
        components: {
            "bigchoice": BigChoice
        },
        methods: {
            routeChoice: function() {
                var checkedElement = null;
                let array = document.getElementsByClassName("choose-radio-el");
                for (let i = 0; i < array.length; i++) {
                    if (array[i].checked) {
                        checkedElement = array[i];
                    }
                }
                if (checkedElement !== null) {
                    this.$storage.choiceName = checkedElement.id.split("-")[2];
                    this.$router.push("/thanks");
                }
            }
        }
    }
</script>
