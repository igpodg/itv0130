<template>
    <div class="card mb-4 shadow">
        <a href="javascript:void(0);" @click="doCheck('choose-radio-' + name);" class="btn">
            <div class="card-body">
                <img :src="'images/' + image" :alt="caption"
                     class="img-fluid mx-auto d-block mt-3 mb-3 logoblock-img-50">
                <i class="far fa-hand-point-up fa-7x mt-2 mb-2"></i>
                <div class="radio mt-3 choose-radio">
                    <input type="radio" class="choose-radio-el" :id="'choose-radio-' + name">
                    <label class="form-check-label" :for="'choose-radio-' + name">
                        <span class="ml-1">VALI</span></label>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "bigchoice",
        props: {
            name: {type: String, required: true},
            caption: {type: String, required: true},
            image: {type: String, required: true}
        },
        methods: {
            doCheck: function(elementId) {
                let array = document.getElementsByClassName("choose-radio-el");
                for (let i = 0; i < array.length; i++) {
                    array[i].checked = false;
                }
                document.getElementById(elementId).checked = true;
            }
        }
    }
</script>
