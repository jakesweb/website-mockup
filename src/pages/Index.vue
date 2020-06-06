<template>
  <Layout>
    <div class="intro">
      <h1>Shipping Worldwide</h1>
      <p>
        Where you can ship anything, anywhere, anytime. Using our shipping form,
        you can order pickup for your packages and pay for them all at once. You
        can also track your order so you can trust on time delviery.
      </p>
      <g-image src="~/image/world.jpg" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
.intro h1 {
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
}
.intro p {
  font-weight: 300;
  font-size: 1.25rem;
}
.intro img {
  width: 100%;
}
</style>
