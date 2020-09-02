<template>
    <div>
        <div id="logos">
            <div class="row">
                <div class="col-sm-5 logoblock">
                    <img src="images/ttu_logo.png" alt="TTÜ logo"
                         class="img-fluid mx-auto d-block mt-3 mb-3 logoblock-img-75">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5"></div>
                <div class="col-sm-2 logoblock"><h1 class="text-center d-none d-sm-block">vs</h1></div>
            </div>
            <div class="row">
                <div class="col-sm-5"></div>
                <div class="col-sm-2"></div>
                <div class="col-sm-5 logoblock">
                    <img src="images/taltech_logo.png" alt="TalTech logo"
                         class="img-fluid mx-auto d-block mt-3 mb-3 logoblock-img-75">
                </div>
            </div>
        </div>
        <div id="par1">
            <h1 class="text-center">Sissejuhatus</h1>
            <p>
                See keskkond on mõeldud selleks, et aidata valida meie ülikooli lõplikku brändi. Et alusta valimesega,
                vajuta suur sinine nupp allpool. Seejärel palume ennast tuvastada. Pärast oma andmete sisestamist saad
                kasutada keskkonda. Enne hääletamist saad ka soovi korral lugeda TTÜ ja TalTech'i nimede ajalugu
                ja näha nende vastavaid logosid. Lõpuks võid anda oma isiklikku häält eelistatavale nimele ja logole.
                Lõpuks näed boonusena statistikat selle kohta, mitu inimest valis konkreetse brändi.
            </p>
        </div>
        <div id="par2">
            <h1 class="text-center">TTÜ vs TalTech nimepetitsioon</h1>
            <p>
                Missugune bränd on parem – TTÜ või TalTech? Osale nüüd sellel üritusel ja vali uus nimi ülikooli jaoks!
                Või klikki siia, kui tahad esiteks brändide ajaloost rohkem teada saada:
                <router-link to="/descr">&gt;&gt; Tutvusta brändidega!</router-link>
            </p>
        </div>
        <div class="text-center">
            <router-link type="button" class="btn btn-primary btn-lg py-3 px-5"
                         tag="button" to="/begin" replace>Alusta valimisega</router-link>
        </div>
        <router-link type="button" class="btn btn-warning btn-lg orangebutton orangebutton-margin d-md-none"
                     tag="button" to="/stat">Statistika</router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>
