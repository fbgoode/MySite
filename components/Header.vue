<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div class="container-fluid d-md-none">
            <a class="navbar-brand" href="/"><img src="/img/logo.svg" /></a>
            <button class="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center pb-2" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NuxtLink to="/" class="nav-link" :class="{ active: $route.path =='/' }">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="my-work-life" class="nav-link" :class="{ active: $route.path =='/my-work-life' }">My work life</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="who-am-i" class="nav-link" :class="{ active: $route.path =='/who-am-i' }">Who am I really?</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="contact" class="nav-link" :class="{ active: $route.path =='/contact' }">Contact me</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="nav nav-tabs container-fluid d-none d-md-flex justify-content-end align-items-end px-3">
            <li class="nav-item col py-1">
                <a class="navbar-brand" href="/">
                    <img src="/img/logo.svg" alt="FB." />
                </a>
            </li>
            <li class="nav-item">
                <NuxtLink to="/" class="nav-link" :class="{ active: $route.path =='/' }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house"
                        viewBox="0 0 16 16">
                        <title>Home</title>
                        <path fill-rule="evenodd"
                            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fill-rule="evenodd"
                            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="my-work-life" class="nav-link" :class="{ active: $route.path =='/my-work-life' }">My work life</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="who-am-i" class="nav-link" :class="{ active: $route.path =='/who-am-i' }">Who am I really?</NuxtLink>
            </li>
            <li class="nav-item me-1">
                <NuxtLink to="contact" class="nav-link" :class="{ active: $route.path =='/contact' }">Contact me</NuxtLink>
            </li>
        </ul>
    </nav>
</template>