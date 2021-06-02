<template>
   <ion-grid>
    <ion-row>
        <ion-list>
            <ion-item v-for="o in orders" :key="`order${o.id}`">
                <ion-icon slot="start" :icon="bagCheck" color="primary"></ion-icon>
                <ion-label>
                    <h2>Nº order: {{o.id}}</h2>
                    <h3>client: {{o.clientId}}</h3>
                    <p>{{o.date}}</p>
            </ion-label>
            <ion-label>{{o.price}} €</ion-label>
            </ion-item>
        </ion-list>
    </ion-row>
    <ion-row justify-content-center align-items-center>
        <ion-col>
            <ion-button @click="showModal(true)">
                <ion-icon slot="start" :icon="add" ></ion-icon>Add Order
            </ion-button>
        </ion-col>
    </ion-row>
</ion-grid>
<ion-modal :is-open="modalVisible">
    <ion-item>
        <ion-label>Helloooo</ion-label>
        <ion-button @click="showModal(false)">CLOSE</ion-button>
    </ion-item>
</ion-modal>
</template>
<script>
import { IonGrid,IonRow,IonCol, IonList, IonItem,IonIcon, IonLabel, IonButton, IonModal} from '@ionic/vue'
import { bagCheck, add} from 'ionicons/icons'
export default {
    props:['orders'],
    components: { IonGrid, IonRow,IonCol, IonList, IonItem,IonIcon, IonLabel, IonButton, IonModal},
    data: ()=>{
        return {
            bagCheck: bagCheck,
            add: add,
            modalVisible: false
        }
    },
    methods:{
        showModal(bool){ this.modalVisible = bool }
    }
}
</script>
<style lang="scss" scoped>
ion-list{
    width: 100%;
}
ion-item{
    ion-label{
        h2{ color:rgb(81, 160, 134);}
        h3{ color:#666}
        p{ color:#AAA}
        &:nth-of-type(2){color: rgb(32, 146, 108); font-weight: bold;}
    }
}
</style>