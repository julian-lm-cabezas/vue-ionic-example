<template>
   <ion-page>
        <nav-menu/>
   </ion-page>
</template>
<script>
import { IonPage } from '@ionic/vue'
import NavMenu from '@/components/NavMenu.vue';

export default {
    components: {IonPage, 'nav-menu':NavMenu}
}
</script>
<style lang="scss" scoped>

</style>