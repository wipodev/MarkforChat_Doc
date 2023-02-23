---
layout: page
title: Mark for Chat Web
---

<script setup>
import Spinner from '../../components/Spinner.vue'
import Form from '../../components/Form.vue'
import {onMounted} from 'vue'

onMounted(()=>{
  document.querySelector(".VPNav").classList.add("appNav")
})
</script>

<div class="appHeader"/>
<main>
  <Spinner/>
  <Form/>
</main>

<style scoped>
  .appHeader{
  width: 100%;
  height: 36px;
  background-color: var(--nav-bg-color)
}

  main {
    width: 100%;
    min-height: calc(100vh - 100px);
    background: var(--vp-c-bg-soft);
    max-width: 660px;
    padding: 0 36px;
    text-align: right;
  }

  @media screen and (min-width: 661px) {
    .appHeader{
      position: relative;
      height: 158px;
    }

    main {
      position: relative;
      border-radius: 3px;
      box-shadow: var(--shadow-color);
      margin: -122px auto 0 auto;
    }
  }
</style>
