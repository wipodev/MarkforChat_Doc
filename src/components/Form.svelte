<script>
  import { onMount } from "svelte";
  import { Display, isActive } from "../store/Phones";
  import { clipBoard } from "../store/Utils";
  import BtnBackSpace from "./BtnBackSpace.svelte";
  import BtnNumber from "./BtnNumber.svelte";
  import BtnOpenChat from "./BtnOpenChat.svelte";
  import BtnPaste from "./BtnPaste.svelte";
  import Advertising from "../components/Advertising.svelte";

  onMount(() => {
    document.addEventListener("keyup", (e) => {
      if (/[0-9]/.test(e.key)) {
        e.preventDefault();
        Display.addDisplay(e.key);
        isActive.setActive(true);
      }
    });

    clipBoard();
    window.addEventListener("focus", clipBoard);
  });
</script>

<section class="form">
  <input type="tel" id="display" value={$Display} readonly />
  <BtnNumber />
  <BtnNumber num="2" />
  <BtnNumber num="3" />
  <BtnNumber num="4" />
  <BtnNumber num="5" />
  <BtnNumber num="6" />
  <BtnNumber num="7" />
  <BtnNumber num="8" />
  <BtnNumber num="9" />
  <BtnPaste />
  <BtnNumber id="zero" num="0" />
  <BtnBackSpace />
  <BtnOpenChat />
  <Advertising />
</section>

<style>
  .form {
    display: grid;
    grid-template-columns: repeat(3, 6.62rem);
    grid-template-rows: auto repeat(4, 5rem) auto;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  #display {
    grid-column: 1/4;
    padding: 10px;
    font-size: 60px;
    text-align: center;
    border: none;
  }

  #display:focus-visible {
    outline: none;
  }
</style>
