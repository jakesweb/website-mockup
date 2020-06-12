<template>
  <Layout>
    <h1>Ship With Us</h1>
    <form>
      <label for="weight">Weight</label>
      <input type="number" name="weight" id="weight" />
      <label for="dimension">Dimension</label>
      <input
        type="number"
        name="dimension-foot"
        id="dimension-foot"
        placeholder="Foot"
      />
      <input
        type="number"
        name="dimension-inch"
        id="dimension-inch"
        placeholder="Inch"
      />
      <label for="deliver">Deliver</label>
      <vue-google-autocomplete
        ref="address"
        id="delivery"
        classname="form-control"
        placeholder="Please type the address for delivery"
        v-on:placechanged="getAddressData"
      ></vue-google-autocomplete>
      <label for="apt">Apartment, Suite, or Unit</label>
      <input type="text" name="deliver-apt" id="deliver-apt" />
      <label for="insurance">Insurance</label>
      <input type="checkbox" name="insurance" id="insurance" />
      <label for="pickup">Pickup</label>
      <vue-google-autocomplete
        ref="address"
        id="pickup"
        classname="form-control"
        placeholder="Please type the address for delivery"
        v-on:placechanged="getAddressData"
      ></vue-google-autocomplete>
      <label for="apt">Apartment, Suite, or Unit</label>
      <input type="text" name="pickup-apt" id="pickup-apt" />
      <label for="pickup-time">Pickup Time</label>
      <input type="date" name="pickup-time" id="pickup-time" />
    </form>
  </Layout>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: { VueGoogleAutocomplete },
  metaInfo: {
    title: "Shipping",
  },
  data: function() {
    return {
      address: "",
    };
  },
  mounted() {
    this.$refs.address.focus();
  },
  methods: {
    // this.address - country, locality, postal_code, street_number + route, administrative_area_level_1
    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData;
      console.log(this.address);
      console.log(placeResultData);
    },
  },
};
</script>

<style>
input {
  display: block;
  width: 100%;
}
</style>
