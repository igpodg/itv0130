<template>
    <div>
        <div id="logos-thanks">
            <div class="row ml-5 mr-5">
                <div class="col-sm-5 logoblock">
                    <img src="images/ttu_logo.png" alt="TTÜ logo"
                         class="img-fluid mx-auto d-block mt-3 mb-3 logoblock-img-50">
                </div>
                <div class="col-sm-2 mt-5"><h1 class="text-center d-none d-sm-block">vs</h1></div>
                <div class="col-sm-5 logoblock">
                    <img src="images/taltech_logo.png" alt="TalTech logo"
                         class="img-fluid mx-auto d-block mt-3 mb-3 logoblock-img-50">
                </div>
            </div>
        </div>
        <hr>
        <div id="thanks">
            <h1 class="text-center mb-4">Täname, {{ name }}!</h1>
            <p class="text-center">
                Olete valinud <span class="font-weight-bold">{{ choicename }}</span> jaoks.
                Siin võiks näha teiste inimeste hääletamise lühiülevaade:
            </p>
            <thanksbar name="TalTech" v-if="renderThanksbar"
                       :barpercent="json.taltech[0]" :textpercent="json.taltech[1]"></thanksbar>
            <thanksbar name="TTÜ" v-if="renderThanksbar"
                       :barpercent="json.ttu[0]" :textpercent="json.ttu[1]"></thanksbar>
            <p class="text-center mt-4">
                TalTech'i poolt hääletati kokku {{ json.totalPeopleTaltech }} inimest,
                ja TTÜ poolt {{ json.totalPeopleTtu }} inimest.
            </p>
            <p class="text-center d-none d-md-block">
                <router-link to="/stat">&gt;&gt; Vaata täpsemini!</router-link>
            </p>
        </div>
        <div class="d-md-none">
            <p class="text-center tapsemini">
                Vaata täpsemini:
            </p>
            <router-link type="button" class="btn btn-warning btn-lg orangebutton"
                         tag="button" to="/stat">Statistika</router-link>
        </div>
    </div>
</template>

<script>
    import ThanksBar from "../ThanksBar.vue";

    export default {
        name: "thanks",
        components: {
            "thanksbar": ThanksBar
        },
        data: function() {
            let choicename = null;
            if (this.$storage.choiceName === "ttu")
                choicename = "TTÜ";
            else
                choicename = "TalTech'i";
            return {
                name: this.$storage.fullName,
                choicename: choicename,
                renderThanksbar: false,
                json: {}
            }
        },
        beforeCreate: function() {
            fetch("json/thanks.json")
                .then(function(response) {
                    return response.json();
                })
                .then(function(json) {
                    this.json = json;
                    this.renderThanksbar = true;
                }.bind(this));
        }
    }
</script>
