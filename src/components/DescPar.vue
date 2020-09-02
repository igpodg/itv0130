<template>
    <div class="descpar">
        <div class="col-sm-5 logoblock mx-auto d-block mb-5">
            <img :src="'images/' + image" :alt="imagealt"
                 class="img-fluid mx-auto d-block mt-3 mb-3 logoblock-img-75">
        </div>
        <div>
            <h3>{{ name }}</h3>
        </div>
        <p><slot></slot></p>
    </div>
</template>

<script>
    export default {
        name: "descpar",
        props: {
            name: {type: String, required: true},
            image: {type: String, required: true},
            imagealt: {type: String, required: true}
        }
    }
</script>
