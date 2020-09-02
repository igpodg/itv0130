<template>
    <div class="right-result mb-4">
        <div class="debug1">{{ name }} poolt:</div>
        <h5 class="debug2">{{ amount }}</h5>
        <div class="progress" style="height: 25px;">
            <div class="progress-bar bg-info" role="progressbar"
                 :style="'width: ' + barpercent + '%;'" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <div class="debug3">{{ textpercent }}%</div>
    </div>
</template>

<script>
    export default {
        name: "statbar",
        props: {
            name: {type: String, required: true},
            amount: {type: String, required: true},
            barpercent: {type: String, required: true},
            textpercent: {type: String, required: true}
        }
    }
</script>
