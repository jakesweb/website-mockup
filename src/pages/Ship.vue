<template>
  <Layout>
    <h1>Ship With Us</h1>
    <form>
      <label for="weight">Weight (in pounds)</label>
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight"
        min="0"
        v-model="weight"
      />
      <label for="dimension">Dimensions (in inches) </label>
      <input
        type="number"
        name="length"
        id="length"
        placeholder="Length"
        min="1"
        v-model="length"
      />
      <input
        type="number"
        name="width"
        id="width"
        placeholder="Width"
        min="1"
        v-model="width"
      />
      <input
        type="number"
        name="height"
        id="height"
        placeholder="Height"
        min="1"
        v-model="height"
      />
      <label for="deliver">Deliver</label>
      <vue-google-autocomplete
        ref="address"
        id="delivery"
        classname="form-control"
        placeholder="Please type the address for delivery"
        v-on:placechanged="getShippedData"
      ></vue-google-autocomplete>
      <label for="apt">Apartment, Suite, or Unit</label>
      <input type="text" name="deliver-apt" id="deliver-apt" />
      <label for="insurance">Insurance</label>
      <input
        type="checkbox"
        name="insurance"
        id="insurance"
        v-model="insurance"
      />
      <fieldset id="insuranceLevel" v-if="insurance">
        <input
          type="radio"
          id="100"
          value="100"
          name="insuranceLevel"
          v-model="insuranceLevel"
        />
        <label for="100">100</label>
        <input
          type="radio"
          id="500"
          value="500"
          name="insuranceLevel"
          v-model="insuranceLevel"
        />
        <label for="500">500</label>
        <input
          type="radio"
          id="1000"
          value="1000"
          name="insuranceLevel"
          v-model="insuranceLevel"
        />
        <label for="1000">1000</label>
        <input
          type="radio"
          id="5000"
          value="5000"
          name="insuranceLevel"
          v-model="insuranceLevel"
        />
        <label for="5000">5000</label>
      </fieldset>
      <label for="pickup">Pickup</label>
      <vue-google-autocomplete
        ref="address"
        id="pickup"
        classname="form-control"
        placeholder="Please type the address for delivery"
        v-on:placechanged="getShippingData"
      ></vue-google-autocomplete>
      <label for="apt">Apartment, Suite, or Unit</label>
      <input type="text" name="pickup-apt" id="pickup-apt" />
      <label for="pickup-time">Pickup Time</label>
      <input type="date" name="pickup-time" id="pickup-time" />
      <button
        name="calculateShipping"
        id="calculateShipping"
        v-on:click="calculatePrice"
      >
        Calculate Shipping
      </button>
      <p v-if="shippingPrice > 0">
        Total Price
        <span>{{ shippingPrice }}</span>
      </p>
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
      shippingAddress: "",
      shippedAddress: "",
      pickupDate: "",
      weight: "",
      length: "",
      width: "",
      height: "",
      insurance: false,
      insuranceLevel: "",
      shippingPrice: 0,
    };
  },
  mounted() {
    this.$refs.address.focus();
  },
  methods: {
    // this.address - country, locality, postal_code, street_number + route, administrative_area_level_1
    getShippingData: function(addressData, placeResultData, id) {
      this.shippingAddress = addressData;
    },
    getShippedData: function(addressData, placeResultData, id) {
      this.shippedAddress = addressData;
    },
    calculatePrice: function(e) {
      e.preventDefault();
      this.shippingPrice = 0;
      var size = this.length * this.width * this.height;

      if (this.weight > 30) {
        this.shippingPrice += 5.0;
      } else if (this.weight > 80) {
        this.shippingPrice += 10.0;
      } else if (this.weight > 120) {
        this.shippingPrice += 20.0;
      }

      if (size > 90) {
        this.shippingPrice += 3.0;
      } else if (size > 180) {
        this.shippingPrice += 7.0;
      } else if (size > 300) {
        this.shippingPrice += 10.0;
      }

      if (this.insurance) {
        switch (this.insuranceLevel) {
          case "100":
            this.shippingPrice += 1.5;
            break;
          case "500":
            this.shippingPrice += 3.0;
            break;
          case "1000":
            this.shippingPrice += 4.5;
            break;
          case "5000":
            this.shippingPrice += 5.5;
            break;
        }
      }
    },
  },
};
</script>

<style>
input {
  display: block;
  width: 100%;
}
fieldset {
  margin: 10px 0;
}
fieldset input {
  display: inline;
  width: 10%;
}
fieldset label {
  display: inline;
}
button {
  margin: 10px 0;
}
</style>
