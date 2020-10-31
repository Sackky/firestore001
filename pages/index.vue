<template>
  <div>
    <v-card class="mt-5">
      <v-card>
        <v-data-table :headers="headers" :items="dataList" />
      </v-card>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/FirebaseConfig.js'
export default {
  data () {
    return {
      dataList: [],
      time: '',
      headers: [
        {
          text: 'Items',
          align: 'start',
          filterable: false,
          value: 'name'
        },
        { text: 'Price', value: 'price' },
        { text: 'Status', value: 'status' },
        { text: 'ID', value: 'itemId' }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      db.collection('Items')
        // .where('status', '==', 'WantToBuy')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.dataList = data
        })
    }
  }
}
</script>

<style>
</style>
