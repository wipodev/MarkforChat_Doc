---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle
} from 'vitepress/theme'
import Spinner from '../components/Spinner.vue'
import Form from '../components/Form.vue'

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title >
      Mark for Chat Web
    </template>
  </VPTeamPageTitle>
  <main>
    <Spinner/>
    <Form/>
  </main>
</VPTeamPage>

<style scoped>
  .VPTeamPage{
    padding: 0;
  }

  .VPTeamPageTitle{
    padding: 0;
  }

  main {
    width: 100%;
    min-height: 100vh;
    background: var(--vp-c-bg-soft);
    max-width: 660px;
    padding: 0 36px;
    text-align: right;
  }

  @media screen and (min-width: 661px) {

    main {
      border-radius: 3px;
      box-shadow: 0 17px 50px 0 rgb(11 20 26 / 19%), 0 12px 15px 0 rgb(11 20 26 / 24%);
      margin: 0 auto;
      padding: 64 60 60;
    }
  }
</style>
