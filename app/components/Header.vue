<template>
    <header class="hidden sm:flex">
        <nav class="nav">
            <ul class="flex gap-[4rem]">
                <li @click="scrollTo('home')" class="cursor-pointer">Home</li>
                <li @click="scrollTo('me')" class="cursor-pointer">Me</li>
                <li @click="scrollTo('projects')" class="cursor-pointer">Projects</li>
                <li @click="scrollTo('contact')" class="cursor-pointer">Contact</li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    function scrollTo(id: string) {
        const target = document.getElementById(id)
        if (!target) return

        //pour laisser place au header
        const offset = 80
        const top = target.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({ top, behavior: 'smooth' })
    }
</script>