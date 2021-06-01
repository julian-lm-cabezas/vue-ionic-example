<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>ORDERS</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <order-list/>
        </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import OrderList from '@/components/OrderList.vue'
export default {
    components:{IonPage, IonHeader,IonToolbar, IonTitle, IonContent, 'order-list':OrderList }
}
</script>