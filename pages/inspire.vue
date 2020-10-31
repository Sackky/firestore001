<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="addData"
    >
      <v-text-field
        v-model="name"
        style="2"
        label="Items"
        :rules="[(v) => !!v || 'Name is required']"
        required
      />
      <v-text-field
        v-model="price"
        type="number"
        style="1"
        label="price"
        :rules="[(v) => !!v || 'Price is required']"
        required
      />
      <v-item-group>
        <v-checkbox
          v-model="status"
          value="WantToBuy"
          label="WantToBuy"
          :rules="[(v) => !!v || 'Plese select one']"
          required
        />
        <v-checkbox
          v-model="status"
          value="WantToSell"
          label="WantToSell"
          :rules="[(v) => !!v || 'Plese select one']"
          required
        />
      </v-item-group>
      <v-btn
        color="success"
        class="mr-4"
        :disabled="!valid"
        @click="addData"
      >
        Submit
      </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">
            Your order is placed
          </v-card-title>

          <v-card-text>
            We hope that your order will be completed asap and successfully
          </v-card-text>

          <v-card-actions>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn color="warning" class="mr-4" @click="reset">
        Reset Form
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import { db, auth } from '~/plugins/FirebaseConfig.js'

export default {
  data () {
    return {
      name: '',
      status: '',
      price: '',
      valid: true,
      dialog: false,
      phone: ''
    }
  },
  methods: {
    addData () {
      this.$refs.form.validate()
      if (this.name && this.price && this.status) {
        const dataText = {
          name: this.name,
          status: this.status,
          price: this.price,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          itemId: db.collection('Items').doc().id
        }
        db.collection('Items')
          .doc()
          .set(dataText)
          .then(() => {
            console.log(this.itemId)
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
        this.$refs.form.reset()
        this.dialog = true
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>
</style>
