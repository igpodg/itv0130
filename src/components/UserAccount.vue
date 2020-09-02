<template>
    <span>{{ logInOutString }}</span>
</template>

<script>
    export default {
        name: "useraccount",
        props: {
            button: {type: Boolean, default: false}
        },
        data: function() {
            var result = {logInOutString: "", open: false};
            if (this.button) {
                if (this.$storage.fullName !== null && this.$storage.fullName.length > 0)
                    result.logInOutString = "Logi välja";
                else
                    result.logInOutString = "Logi sisse";
            } else {
                if (this.$storage.fullName !== null && this.$storage.fullName.length > 0)
                    result.logInOutString = "Teie olete: " + this.$storage.fullName;
                else
                    result.logInOutString = "";
            }
            return result;
        }
    }
</script>
