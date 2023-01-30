<script>
  import { Countries } from "../store/Countries";
  import { Country } from "../store/Phones";

  const updateCountry = (event) => {
    Country.setCountry(event.target.value);
  };
</script>

<select value={$Country} on:change={updateCountry}>
  {#each $Countries as e}
    <option value={e.code}>{e.name}</option>
  {/each}
</select>

<style>
  select {
    font-weight: 600;
    border: none;
    outline: none;
    background-color: transparent;
    text-align: right;
    padding-right: 10px;
    width: 100%;
  }
</style>
