<script>
  import { Display, isActive } from "../store/Phones";

  export let num = 1;
  export let id = undefined;

  const addNumber = () => {
    Display.addDisplay(num);
    isActive.setActive(true);
  };
</script>

{#if id !== undefined}
  <button class={id} on:click={addNumber}>{num}</button>
{:else}
  <button on:click={addNumber}>{num}</button>
{/if}

<style>
  .zero {
    grid-column: 2;
  }
</style>
