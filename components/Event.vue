<template>
    <div ref="card" class="card event mb-3">
        <div class="card-body">
            <div class="row cardTitleContainer">
                <div class="col-auto p-0">
                    <img :src=iconPath class="eventIcon"/>
                </div>
                <div class="col p-0">
                    <h5 v-if="title" class="card-title">{{ title }}</h5>
                    <h6 v-if="subTitle" class="card-subtitle text-muted">{{ subTitle }}</h6>
                </div>
            </div>
            <p v-if="$slots.description || plainDescription" class="card-text mt-3 mb-2">
                <slot name="description">{{ plainDescription }}</slot>
            </p>
            <div v-if="$slots.details || $slots.locationDescription">
                <p class="card-text mb-0 text-center text-muted" data-bs-toggle="collapse"
                :data-bs-target="'#' + collapseUid" href="" role="button" aria-expanded="false"
                :aria-controls=collapseUid @click="() => { expanded = !expanded }">
                    <small><u>Click here</u> to read {{ expanded ? "less" : "more" }}</small>
                </p>
                <div ref="collapsible" class="collapse mt-3" :id=collapseUid>
                    <slot name="details">
                        <div v-if="plainDetails"> {{ plainDetails }}</div>
                    </slot>
                    <div v-if="$slots.locationDescription" class="row align-items-center mb-2">
                        <div v-if="locationLogoPath" class="col-sm-auto text-center my-2 ps-sm-4">
                            <img :src="locationLogoPath" class="locationLogo"/>
                        </div>
                        <div class="col-sm fw-light"><slot name="locationDescription"></slot></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
let uid = 0;
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps<{
    title?: String,
    iconPath: string,
    subTitle?: String,
    plainDescription?: String,
    plainDetails?: String,
    locationLogoPath?: string,
    disableAnimation?: boolean,
}>();
uid++;
const collapseUid = "TimelineEventCollapse-" + uid;
const expanded = ref(false);

const card = ref(null);
const collapsible = ref(null);

const refreshScrollTriggers = () => {
    ScrollTrigger.refresh();
}

onMounted(() => {
    if (collapsible.value != null) {
        const element = collapsible.value as HTMLElement;
        element.addEventListener("shown.bs.collapse", refreshScrollTriggers);
        element.addEventListener("hidden.bs.collapse", refreshScrollTriggers);
    }

    if (props.disableAnimation) return;

    gsap.from(card.value, {
        x: 1000,
        scrollTrigger: {
            trigger: card.value,
            start: "top bottom",
            end: "top center",
            scrub: true
        }
    });
});
</script>

<style>
.locationLogo {
    width: 7em;
}
</style>