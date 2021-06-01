<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>ORDERS</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row >
                    <ion-col size-md="3" size-xs="6" offset-md="3">
                        <ion-item @click="vue3=false">
                            <ion-label> OptionsAPI (vue2)</ion-label>
                            <ion-checkbox :checked="!vue3" :disabled="!vue3"/>
                        </ion-item>
                    </ion-col>
                    <ion-col size-md="3" size-xs="6">
                        <ion-item @click="vue3=true">
                            <ion-label> CompositionAPI (vue3)</ion-label>
                            <ion-checkbox :checked="vue3" :disabled="vue3"/>
                        </ion-item>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <order-list v-if="!vue3" :orders="orders"/>
        </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonGrid, IonRow,IonCol,IonItem, IonLabel, IonCheckbox } from '@ionic/vue'
import OrderList from '@/components/OrderList.vue'
export default {
    components:{IonPage, IonHeader,IonToolbar, IonTitle, IonContent,IonGrid, IonRow,IonCol, IonItem, IonLabel, IonCheckbox, 'order-list':OrderList },
    data: ()=>{
        return {
            vue3: false,
            orders: [
                {id:1, clientId: 1234, date: new Date().toISOString(), price: 23.45 },
                {id:2, clientId: 1234, date: new Date().toISOString(), price: 107.11 },
                {id:3, clientId: 4567, date: new Date().toISOString(), price: 45.20 },
                {id:4, clientId: 7788, date: new Date().toISOString(), price: 12.88 }
            ]
        }
    }
}
</script>