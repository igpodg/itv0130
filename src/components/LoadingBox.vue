<template>
    <div>
        <h4><slot></slot></h4>
        <div class="svg-box">
            <svg class="svg-box-content" viewBox="0 0 585 129" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="50%" y1="5.77808887%" x2="50%" y2="84.9688403%" id="linearGradient-3">
                        <stop class="svg-background-stop" offset="0%"></stop>
                        <stop class="svg-background-stop" stop-opacity="0.384029665" offset="39.8821351%"></stop>
                        <stop class="svg-background-stop" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-4">
                        <stop class="svg-background-stop" offset="0%"></stop>
                        <stop class="svg-background-stop" stop-opacity="0" offset="39.8821351%"></stop>
                        <stop class="svg-background-stop" stop-opacity="0" offset="68.2058345%"></stop>
                        <stop class="svg-background-stop" offset="100%"></stop>
                    </linearGradient>
                    <rect id="path-2" x="0" y="0" width="585" height="129"></rect>

                    <pattern id="pattern-1" width="7" height="7" x="-7" y="-7" patternUnits="userSpaceOnUse">
                        <use xlink:href="#rect-1"></use>
                    </pattern>
                    <rect id="rect-1" width="8" height="8"
                          stroke="white" stroke-width="2" fill="none" shape-rendering="auto"/>

                    <linearGradient x1="50%" y1="0%" x2="50%" y2="80.3468208%" id="linearGradient-1">
                        <stop class="svg-background-start" offset="0%"></stop>
                        <stop class="svg-background-stop" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="50%" y1="4.04624277%" x2="50%" y2="100%" id="linearGradient-2">
                        <stop stop-color="#FFFFFF" offset="0%"></stop>
                        <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="rect-2">
                        <use class="svg-pattern" fill="url(#pattern-1)" xlink:href="#path-2"></use>
                        <use fill="url(#linearGradient-3)" xlink:href="#path-2"></use>
                        <use fill="url(#linearGradient-4)" xlink:href="#path-2"></use>
                    </g>
                    <path class="svg-main-path" id="Path"
                          stroke="url(#linearGradient-2)" fill="url(#linearGradient-1)"></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading-box"
    }
</script>
