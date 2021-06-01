<template>
    <ion-list>
        <ion-item v-for="o in orders" :key="`order${o.id}`">
            <ion-icon slot="start" :icon="ic" color="primary"></ion-icon>
            <ion-label>
                <h2>Nº order: {{o.id}}</h2>
                <h3>client: {{o.clientId}}</h3>
                <p>{{o.date}}</p>
          </ion-label>
          <ion-label>{{o.price}} €</ion-label>
        </ion-item>
    </ion-list>
</template>
<script>
import { IonList, IonItem,IonIcon, IonLabel} from '@ionic/vue'
import { bagCheck} from 'ionicons/icons'
export default {
    props:['orders'],
    components: { IonList, IonItem,IonIcon, IonLabel},
    data: ()=>{
        return {
            ic: bagCheck
        }
    }
}
</script>
<style lang="scss" scoped>
ion-item{
    ion-label{
        h2{ color:rgb(81, 160, 134);}
        h3{ color:#666}
        p{ color:#AAA}
        &:nth-of-type(2){color: rgb(32, 146, 108); font-weight: bold;}
    }
}
</style>