<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-center">{{ name }}:</h5>
            <pie-chart v-if="type === 'pie'" :data="value"></pie-chart>
            <column-chart v-else-if="type === 'column'" :data="value"></column-chart>
            <area-chart v-else-if="type === 'area'" :data="value"></area-chart>
        </div>
    </div>
</template>

<script>
    export default {
        name: "big-statcard",
        props: {
            name: {type: String, required: true},
            type: {type: String, required: true},
            value: {type: String, required: true}
        }
    }
</script>
