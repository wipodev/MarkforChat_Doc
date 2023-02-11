<script>
import { Countries } from "../public/Countries";

export default {
  data() {
    return {
      selectedValue: 51,
      countries: Countries,
    };
  },
};
</script>

<template>
  <select v-model="selectedValue">
    <option v-for="country in countries" :value="country.code" :key="country.code">{{ country.name }}</option>
  </select>
</template>

<style scoped>
select {
  font-weight: 600;
  border: none;
  outline: none;
  background-color: transparent;
  text-align: right;
  padding-right: 10px;
  width: 100%;
  min-height: 24px;
  cursor: pointer;
}
</style>
