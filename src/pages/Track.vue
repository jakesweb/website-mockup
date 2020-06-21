<template>
  <Layout>
    <h1>Track a Package</h1>
    <form>
      <input
        id="shippingId"
        name="shippingId"
        placeholder="Tracking Number"
        v-model="shippingId"
      />
      <button type="button" name="submit" id="submit" v-on:click="onSubmit">
        Track!
      </button>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Tracking",
  },
  data: function() {
    return {
      shippingId: "",
    };
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();
      console.log(this.shippingId);
    },
  },
};
</script>

<style>
input {
  display: block;
  width: 60%;
}
button {
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 5px;
  display: block;
}
</style>
