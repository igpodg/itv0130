<template>
    <div class="row pb-3 text-center align-middle">
        <div class="col-sm-2 debug1">{{ name }}</div>
        <div class="col-sm-8 debug2">
            <div class="progress" style="height: 20px;">
                <div class="progress-bar bg-info" role="progressbar"
                     :style="'width: ' + barpercent + '%;'"
                     aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="col-sm-2 debug3">{{ textpercent }}%</div>
    </div>
</template>

<script>
    export default {
        name: "thanksbar",
        props: {
            name: {type: String, required: true},
            barpercent: {type: String, required: true},
            textpercent: {type: String, required: true}
        }
    }
</script>
