<template>
    <div id="timelineContainer" class="container-fluid">
        <div class="container my-5 timelineWidget">
            <div class="row p-3 pe-4 mb-5">
                <div class="card p-0 cardTLDR">
                    <div class="card-body py-2">
                        <p class="TLDR"><small><b><abbr title="Too Long, Didn't Read">TL;DR:</abbr></b> {{ tldr }}</small>
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="timeLine" class="col-auto align-self-stretch d-flex flex-column px-0">
                    <div class="timeStart timeLine"></div>
                    <div class="timeMid timeLine"></div>
                    <div class="timeEnd timeLine"></div>
                </div>

                <div id="events" class="col ps-0">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tldr: String
});

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>