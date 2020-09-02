<template>
    <div>
        <h1 class="text-center mb-4">TTÜ ja TalTech ajalugu</h1>
        <descpar name="Tallinna Tehnikaülikool" image="ttu_logo.png" imagealt="TTÜ logo">
            <p>
                Tallinna Tehnikaülikool on kaasaegne tehnoloogiaülikool, mille tugevus peitub tehnika-,
                loodus-, täppis-, sotsiaal- ja terviseteaduste sünergias. TTÜ vastutab eelkõige inseneride
                ja tehnikateadlaste järelkasvu tagamise eest Eestis. Ülikoolis on 700 õppejõudu ja
                rohkem kui pooltuhat teadustöötajat, TTÜ vilistlaste arv ulatub 70 000-ni. Rohkem kui
                50 hektaril laiuv TTÜ linnak hõlmab 72 ehitist. Üliõpilastele pakutakse suurepärast tudengi-
                ja kultuurielu, ülikooli majutus- ja sportimisvõimalused on ühed paremad Põhja-Euroopas.
            </p>
        </descpar>
        <hr>
        <descpar name="TalTech Ülikool" image="taltech_logo.png" imagealt="TalTech logo">
            <p>
                Tallinna Tehnikaülikool võttis 17. septembril kasutusele uue lühinime TalTech, mis asendab erinevad
                lühendeid nagu TTÜ, TUT ja TTU.
            </p>
            <p>
                Uue lühinime kasutuselevõtt ülikooli sajandal tegutsemisaastal märgib rektor Aaviksoo sõnul ülikooli
                jaoks ühe arenguetapi lõppu ja järgmise aastasaja saabumist. Lühinimi TalTech on ülikooli sees
                erinevate projektide puhul kasutusel olnud juba mõnda aega, kuid nüüd saab see värske kuju
                ja muutub ülikooli ametlikuks lühinimeks nii Eestis kui ka rahvusvaheliselt. Ülikooli täispikaks
                nimeks jääb Tallinna Tehnikaülikool, TalTech on lühinimi.
            </p>
        </descpar>
        <div class="text-center mt-5">
            <router-link type="button" class="btn btn-primary btn-lg py-3 px-5"
                         tag="button" to="/begin" replace>Alusta valimisega</router-link>
        </div>
        <router-link type="button" class="btn btn-warning btn-lg orangebutton orangebutton-margin d-md-none"
                     tag="button" to="/stat">Statistika</router-link>
    </div>
</template>

<script>
    import DescPar from "../DescPar.vue";

    export default {
        name: "descr",
        components: {
            "descpar": DescPar
        }
    }
</script>
