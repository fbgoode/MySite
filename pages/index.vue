<template>
    <div class="container index">
        <div id="title" class="col mt-5 pt-3">
            <h1 class="display-3">Hi, I'm Fede</h1>
            <p class="lead pb-3">
                Would you like to know me better?
            </p>
            <hr class="mt-5">
        </div>
        <NuxtLink class="text-reset text-decoration-none" to="my-work-life">
            <div class="col mt-5 text-end">
                <h2 class="bigLink display-5">Me, professionally ></h2>
                <p class="lead">
                    My education and work experience
                </p>
                <hr class="mt-5">
            </div>
        </NuxtLink>
        <NuxtLink class="text-reset text-decoration-none" to="who-am-i">
            <div class="col mt-5 text-end">
                <h2 class="bigLink display-5">Me, personally ></h2>
                <p class="lead">
                    The experiences that made me who I am
                </p>
                <hr class="mt-5">
            </div>
        </NuxtLink>
        <div class="col py-2 mb-5">
            <p class="text-muted">
                <small>
                    You're welcome to borrow my site's source code and use it as you please. You can find it in <a href="https://github.com/fbgoode/MySite"
                        target="_blank">this GitHub repository</a>.
                </small>
            </p>
        </div>
    </div>
</template>