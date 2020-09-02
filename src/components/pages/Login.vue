<template>
    <div>
        <form @submit.prevent="checkFormLogin">
            <h1 class="text-center mb-4">Logi sisse olemasoleva kontoga...</h1>
            <div v-if="errorslogin.length" class="alert alert-danger" role="alert">
                <p><b>Palun korrigeerige järgmised vead:</b></p>
                <ul>
                    <li v-for="error in errorslogin">{{ error }}</li>
                </ul>
            </div>
            <div class="row pb-2">
                <div class="col-sm-3 debug1 pl-sm-0"><span class="align-middle">Eesnimi:</span></div>
                <div class="col-sm-3 debug2">
                    <input type="text" class="form-control" id="namefirst1" v-model="namefirst"></div>
                <div class="col-sm-2 debug3 pl-sm-0"><span class="align-middle">Perenimi:</span></div>
                <div class="col-sm-4 debug4">
                    <input type="text" class="form-control" id="namelast1" v-model="namelast"></div>
            </div>
            <div class="row">
                <div class="col-sm-3 debug1 pl-sm-0"><span class="align-middle">Sinu parool:</span></div>
                <div class="col-sm-9 debug2">
                    <input type="password" class="form-control" id="password1"
                           v-model="password" @keyup="checkStrength"></div>
            </div>
            <div class="text-center mt-3">
                <button type="submit" class="btn btn-primary btn-lg py-3 px-5">Logi sisse</button>
            </div>
        </form>
        <hr>
        <form @submit.prevent="checkFormRegister">
            <h1 class="text-center mb-4">...või sisesta oma andmeid</h1>
            <div v-if="errorsregister.length" class="alert alert-danger" role="alert">
                <p><b>Palun korrigeerige järgmised vead:</b></p>
                <ul>
                    <li v-for="error in errorsregister">{{ error }}</li>
                </ul>
            </div>
            <div class="row pb-2">
                <div class="col-sm-3 debug1 pl-sm-0"><span class="align-middle">Eesnimi:</span></div>
                <div class="col-sm-3 debug2">
                    <input type="text" class="form-control" id="namefirst2" v-model="namefirst"></div>
                <div class="col-sm-2 debug3 pl-sm-0"><span class="align-middle">Perenimi:</span></div>
                <div class="col-sm-4 debug4">
                    <input type="text" class="form-control" id="namelast2" v-model="namelast"></div>
            </div>
            <div class="row pb-2">
                <div class="col-sm-3 debug1 pl-sm-0"><span class="align-middle">Tegevusala:</span></div>
                <div class="col-sm-6 debug2">
                    <input type="text" class="form-control" id="occupation" v-model="occupation"></div>
                <div class="col-sm-1 debug3 pl-sm-0"><span class="align-middle">Sugu:</span></div>
                <div class="col-sm-2 debug4 pl-sm-0">
                    <select class="form-control" id="gender" v-model="gender">
                        <option value="mees">Mees</option>
                        <option value="naine">Naine</option>
                        <option value="muu">Muu</option>
                    </select>
                </div>
            </div>
            <div class="row pb-2">
                <div class="col-sm-3 debug1 pl-sm-0"><span class="align-middle">Aastad ülikoolis:</span></div>
                <div class="col-sm-9 debug2">
                    <input type="number" class="form-control" id="uniyears" v-model="uniyears"></div>
            </div>
            <div class="row pb-2">
                <div class="col-sm-3 debug1 pl-sm-0"><span class="align-middle">Parool:</span></div>
                <div class="col-sm-9 debug2">
                    <input type="password" class="form-control" id="password2"
                           v-model="password" @keyup="checkStrength"></div>
            </div>
            <div class="mt-3">
                <div class="progress pass-strength-main">
                    <div class="progress-bar progress-bar-striped bg-warning"
                         id="pass-strength-bar"
                         role="progressbar"
                         style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="text-center text-secondary">Parooli tugevus</p>
            </div>
            <div class="text-center mt-3">
                <button type="submit" class="btn btn-primary btn-lg py-3 px-5">Registreeri</button>
            </div>
            <router-link type="button" class="btn btn-warning btn-lg orangebutton orangebutton-margin d-md-none"
                         tag="button" to="/stat">Statistika</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function() {
            return {
                errorslogin: [],
                errorsregister: [],
                namefirst: null,
                namelast: null,
                occupation: null,
                gender: "mees",
                uniyears: null,
                password: null
            }
        },
        methods: {
            checkFormLogin: function(e) {
                this.errorslogin = [];
                this.errorsregister = [];

                if (!this.namefirst)
                    this.errorslogin.push("Eesnimi ei ole sisestatud!");
                if (!this.namelast)
                    this.errorslogin.push("Perenimi ei ole sisestatud!");
                if (!this.password)
                    this.errorslogin.push("Parool ei ole sisestatud!");

                if (this.errorslogin.length === 0) {
                    this.$storage.fullName = this.namefirst.trim() + ' ' + this.namelast.trim();
                    this.$router.replace("/login_do");
                }
            },
            checkFormRegister: function(e) {
                this.errorslogin = [];
                this.errorsregister = [];

                if (!this.namefirst)
                    this.errorsregister.push("Eesnimi ei ole sisestatud!");
                if (!this.namelast)
                    this.errorsregister.push("Perenimi ei ole sisestatud!");
                if (!this.occupation)
                    this.errorsregister.push("Tegevusala ei ole sisestatud!");
                if (!this.uniyears)
                    this.errorsregister.push("Ülikooli aastad ei ole sisestatud!");
                if (!this.password)
                    this.errorsregister.push("Parool ei ole sisestatud!");

                if (this.errorsregister.length === 0) {
                    this.$storage.fullName = this.namefirst.trim() + ' ' + this.namelast.trim();
                    this.$router.replace("/login_do");
                }
            },
            checkStrength: function(e) {
                if (this.password === null)
                    return;

                let passStrengthBar = document.getElementById("pass-strength-bar");
                passStrengthBar.classList.remove("bg-success");
                passStrengthBar.classList.remove("bg-info");
                passStrengthBar.classList.remove("bg-warning");
                passStrengthBar.classList.remove("bg-danger");

                let passwordStrength = this.password.length;
                if (passwordStrength > 10)
                    passwordStrength = 10;
                let passwordStrengthColor = "bg-danger";
                if (passwordStrength >= 6)
                    passwordStrengthColor = "bg-success";
                else if (passwordStrength >= 3)
                    passwordStrengthColor = "bg-warning";
                passwordStrength *= 10;

                passStrengthBar.classList.add(passwordStrengthColor);
                passStrengthBar.style.width = "" + passwordStrength + "%";
                passStrengthBar.setAttribute("aria-valuenow", passwordStrength.toString());
            }
        }
    }
</script>
