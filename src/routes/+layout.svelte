<script>
  import Hero from "../components/Hero.svelte";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";
  import { mobile } from "../store/Utils";

  onMount(() => {
    mobile.setMobile();
    window.addEventListener("resize", () => mobile.setMobile());
  });
</script>

<Hero />
<div class="container">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  main {
    width: 100%;
    min-height: calc(100vh - 94px);
    background: var(--white-color);
    max-width: 660px;
    padding: 0 36px;
    text-align: right;
  }

  @media screen and (min-width: 661px) {
    .container {
      padding: 0 36px;
    }

    main {
      border-radius: 3px;
      box-shadow: 0 17px 50px 0 rgb(11 20 26 / 19%), 0 12px 15px 0 rgb(11 20 26 / 24%);
      margin: 0 auto;
      padding: 64 60 60;
    }
  }
</style>
