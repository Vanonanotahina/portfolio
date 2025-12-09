<template>
    <div>
            <div 
                ref="toogleBtn"
                @click="toggleMenu" :class='["fixed top-1/2 right-1 -translate-1/2 z-999 flex items-center justify-center w-7 h-45 bg-white rounded-md shadow-sm transition-all duration-500 ease-in-out",
                    showMenu ? "opacity-100" : "opacity-0"
                ]'>
                <Icon name="healthicons:ui-menu-outline" class="text-md text-black" />
            </div>
        <nav>
            <ul 
                ref="menuRef"
                :class='["fixed z-40 top-1/2 right-0 -translate-1/2  h-45 flex flex-col overflow-hidden rounded-md shadow-md gap-5 bg-white transition-all duration-500 ease-in-out",
                    menuOpen ? "w-25 px-5 py-3 opacity-100 pointer-events-auto"
                    : "w-1 px-0 py-0 opacity-0 pointer-events-none"
                ]'
            >
                <li @click="scrollTo('home')" class="cursor-pointer">Home</li>
                <li @click="scrollTo('me')" class="cursor-pointer">Me</li>
                <li @click="scrollTo('projects')" class="cursor-pointer">Projects</li>
                <li @click="scrollTo('contact')" class="cursor-pointer">Contact</li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const menuOpen = ref(false)
    const menuRef = ref<HTMLElement | null>(null)
    const toogleBtn = ref<HTMLElement | null>(null)

    const showMenu = ref(false)
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null

    function toggleMenu() {
        menuOpen.value = !menuOpen.value;
    }

    function closeMenu(){
        menuOpen.value = false;
    }

    const handleScroll = () => {
        showMenu.value = true

        // Reset timeout à chaque scroll
        if (scrollTimeout) clearTimeout(scrollTimeout)

        if (menuOpen.value != false) return;

        scrollTimeout = setTimeout(() => {
            showMenu.value = false
        }, 2000) 
    }

    onMounted(() => {

        window.addEventListener('scroll', handleScroll)

        const handleClickOutside = (e: MouseEvent) => {

            if (toogleBtn.value?.contains(e.target as Node)) {
                return;
            }

            if (menuRef.value?.contains(e.target as Node)) {
                return;
            }

            closeMenu();
        };

        document.addEventListener("click", handleClickOutside);

        onBeforeUnmount(() => {
            document.addEventListener("click", handleClickOutside);
        });
    });



    function scrollTo(id: string) {
        const target = document.getElementById(id)
        if (!target) return
        const offset = 80
        const top = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }
</script>
