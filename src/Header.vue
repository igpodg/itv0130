<template>
    <div id="header">
        <topheader></topheader>
    </div>
</template>

<script>
    import TopHeader from "./components/pages/TopHeader.vue";

    export default {
        name: "headerapp",
        components: {
            "topheader": TopHeader
        }
    }
</script>
