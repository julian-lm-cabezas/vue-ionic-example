<template>
    <ion-page>
        <nav-menu/>
        <ion-content>
            <ion-grid style="margin-top:3rem">
                <ion-row >
                    <ion-col size-md="3" size-xs="6" offset-md="3">
                        <ion-item @click="loadList(false)">
                            <ion-label> OptionsAPI (vue2)</ion-label>
                            <ion-checkbox :checked="!vue3" :disabled="!vue3"/>
                        </ion-item>
                    </ion-col>
                    <ion-col size-md="3" size-xs="6">
                        <ion-item @click="loadList(true)">
                            <ion-label> CompositionAPI (vue3)</ion-label>
                            <ion-checkbox :checked="vue3" :disabled="vue3"/>
                        </ion-item>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-slides pager="false" :options="{ initialSlide: 0, speed: 600 }" style="width:100%">
                            <ion-slide><order-list :orders="orders"/></ion-slide>
                            <ion-slide><order-list2 :orders="orders"/></ion-slide>
                        </ion-slides>
                    </ion-col>
                </ion-row>
            </ion-grid>
            
        </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonContent,IonGrid, IonRow,IonCol,IonItem, IonLabel, IonCheckbox,IonSlides, IonSlide } from '@ionic/vue'
import NavMenu from '@/components/NavMenu.vue';

import OrderList from '@/components/OrderList.vue'
import OrderList2 from '@/components/OrderList2.vue'

export default {
    components:{IonPage, IonContent,IonGrid, IonRow,IonCol, IonItem, IonLabel, IonCheckbox,IonSlides, IonSlide,
        'nav-menu':NavMenu, 
        'order-list':OrderList,
        'order-list2':OrderList2 
    },
    data: ()=>{
        return {
            vue3: false,
            orders: [
                {id:1, clientId: 1234, date: new Date().toISOString(), price: 23.45 },
                {id:2, clientId: 1234, date: new Date().toISOString(), price: 107.11 },
                {id:3, clientId: 4567, date: new Date().toISOString(), price: 45.20 },
                {id:4, clientId: 7788, date: new Date().toISOString(), price: 12.88 }
            ],
            slider: null
        }
    },
    async mounted(){
        (await document.querySelector('ion-slides').getSwiper()).allowTouchMove=false
        
    },
    methods:{
        loadList(bool){
            console.log(bool)
            this.vue3 = bool
            document.querySelector('ion-slides').slideTo(bool?1:0)
        }
    }
}
</script>
<style lang="scss">
ion-slide >:first-child { width: 100%; }
</style>