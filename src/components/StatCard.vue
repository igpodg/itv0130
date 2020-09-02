<template>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">
                <span :class="'card-square card-square-' + color + ' mr-2'"></span>{{ seconds }} sekundit tagasi
            </h5>
            <div class="card-text">
                <div class="row">
                    <div class="col-sm-6">– Vanus: {{ age }}</div>
                    <div class="col-sm-6 text-right">– Sugu: {{ gender }}</div>
                </div>
            </div>
            <div class="card-text">– Staatus: {{ status }}</div>
            <h6 class="card-subtitle mt-4 text-right mr-5">– Valitud nimi: {{ choice }}</h6>
        </div>
    </div>
</template>

<script>
    export default {
        name: "statcard",
        props: {
            color: {type: String, required: true},
            seconds: {type: String, required: true},
            age: {type: String, required: true},
            gender: {type: String, required: true},
            status: {type: String, required: true},
            choice: {type: String, required: true}
        }
    }
</script>
