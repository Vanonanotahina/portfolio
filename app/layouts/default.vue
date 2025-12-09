<template>
    <Header></Header>
    <NavBar></NavBar>
    <main>
        <slot>
        </slot>
    </main>
    <!-- <ScrollIndicator3D></ScrollIndicator3D> -->
</template>

<script setup lang="ts">
    import Header from "~/components/Header.vue"
    import NavBar from "~/components/NavBar.vue";
    import ScrollIndicator3D from "~/components/ScrollIndicator3D.vue"
</script>