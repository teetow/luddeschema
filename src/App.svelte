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
    --padding: 2rem;
    display: grid;
    gap: var(--padding);
    justify-items: center;
    margin: 0 auto;
    min-height: calc(100% - (2 * var(--padding)));
    padding: var(--padding);
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
