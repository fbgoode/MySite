<template>
    <div class="bg-light">
        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-auto p-0"><NuxtLink to="/" class="nav-link">Home</NuxtLink></div>
                <div class="col-auto p-0"><NuxtLink to="my-work-life" class="nav-link">My Work Life</NuxtLink></div>
                <div class="col-auto p-0"><NuxtLink to="who-am-i" class="nav-link">About Me</NuxtLink></div>
            </div>
            <div class="row justify-content-center py-4">
                <div class="col-auto">
                    <a href="https://www.linkedin.com/in/federicobaez/" target="_blank"><img class="socialIcon"
                            src="/img/linkedin.svg" alt="Linkedin"></a>
                </div>
                <div class="col-auto">
                    <a href="https://github.com/fbgoode" target="_blank"><img class="socialIcon" src="/img/github.svg"
                            alt="GitHub"></a>
                </div>
                <div class="col-auto">
                    <a href="mailto:info@fbaez.com" target="_blank"><img class="socialIcon" src="/img/envelope-fill.svg"
                            alt="Email"></a>
                </div>
            </div>
            <div class="row justify-content-center py-2">
                <div class="col-auto signature">
                    <img src="/img/signature.svg" alt="Signature" width="100%">
                </div>
            </div>
            <div class="row justify-content-center pt-2">
                <div class="col-auto text-muted">
                    <small>Last updated: {{ date }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const date = (await useFetch('/api/date')).data;
</script>