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
      <input
        type="text"
        name="deliver"
        id="deliver"
        placeholder="Delivery Address"
      />
      <label for="insurance">Insurance</label>
      <input type="checkbox" name="insurance" id="insurance" />
      <label for="pickup">Pickup</label>
      <input
        type="text"
        name="pickup"
        id="pickup"
        placeholder="Pickup Address"
      />
      <label for="pickup-time">Pickup Time</label>
      <input type="date" name="pickup-time" id="pickup-time" />
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Shipping",
  },
};
</script>
