<template>
    <ion-header>
        <ion-toolbar>
           
            <ion-title>{{getPageName()}}</ion-title>
             <ion-buttons slot="end">
                <ion-button @click="selectPage('Orders')" :class="{'--selected': isPageSelected('Orders')}">
                    <ion-icon :icon="archive" ></ion-icon>
                    </ion-button>
                <ion-button @click="selectPage('Plugins')" :class="{'--selected': isPageSelected('Plugins')}">
                    <ion-icon :icon="build" ></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>
<script>
import {IonHeader, IonToolbar,IonButtons, IonButton, IonIcon} from '@ionic/vue'
import {useRoute, useRouter} from 'vue-router'
import { archive, build} from 'ionicons/icons'
export default {
    components:{IonHeader, IonToolbar,IonButtons, IonButton, IonIcon},
    setup(){
        const route = useRoute()
        const router = useRouter()
        const getPageName = () => route.name
        const isPageSelected = page => route.name === page
        const selectPage = page => !isPageSelected(page)? router.push({name:page}):'' 

        return { archive, build, getPageName, isPageSelected, selectPage }
    }

}
</script>
<style lang="scss" scoped>
ion-buttons{
    padding-right:2rem;
}
.--selected{
    color:blue;
}
</style>