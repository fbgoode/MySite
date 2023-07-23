<template>
    <div :style="{ height: thirdWindowHeight + 32 + 'px' }" class="eventSpacer h2 container">
        <div ref="date" class="eventDateContainer row">
            <div class="lineLeft col-1"></div>
            <div class="eventDate h2 col"><slot></slot></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import { gsap } from "gsap";

const props = defineProps<{
    disableAnimation?: boolean
}>();

const date = ref(null);
const thirdWindowHeight = ref(100);

if (!props.disableAnimation) {
    thirdWindowHeight.value = window.innerHeight / 3;

    onMounted(() => {
        gsap.to(date.value, {
            y: thirdWindowHeight.value,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: date.value,
                start: "center center",
                end: `${thirdWindowHeight.value} center`,
                scrub: true
            }
        });
    });
}
</script>