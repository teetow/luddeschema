<script lang="ts">
  import Schema from "./Schema.svelte";
  import Logo from "./assets/logo.svg";
</script>

<main>
  <h3 class="header">Luddes Schema</h3>
  <Schema />
  <footer class="footer">
    <a href="https://www.youtube.com/channel/UCX5X2wahdv0piQcvBr1hPng">
      <img class="logo" src={Logo} alt="MNTM Logo" /></a
    >
  </footer>
</main>

<style>
  main {
    display: grid;
    justify-items: center;
    min-height: 100%;
    margin: 0 auto;
    padding: 4rem;
  }
  .logo {
    width: 48px;
  }
  .header {
    align-self: end;
  }
  .footer {
    align-self: end;
  }
</style>
