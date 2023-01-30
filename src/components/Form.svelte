<script>
  import { onMount } from "svelte";
  import { Display, isActive, ClipBoardActive } from "../store/Phones";
  import BtnBackSpace from "./BtnBackSpace.svelte";
  import BtnNumber from "./BtnNumber.svelte";
  import BtnOpenChat from "./BtnOpenChat.svelte";
  import { mobile } from "../store/MobileDetect";
  import BtnPaste from "./BtnPaste.svelte";

  onMount(() => {
    document.addEventListener("keyup", (e) => {
      if (/[0-9]/.test(e.key)) {
        e.preventDefault();
        Display.addDisplay(e.key);
        isActive.setActive(true);
      }
    });
    const input = document.querySelector("#display");
    if (mobile()) {
      input.setAttribute("readonly", true);
    }
    window.addEventListener("focus", () => {
      navigator.clipboard
        .readText()
        .then((text) => {
          if (!isNaN(text)) {
            ClipBoardActive.setActive(true);
          } else {
            ClipBoardActive.setActive(false);
          }
        })
        .catch((err) => console.log("No hay texto en el clipboard:", err));
    });
  });

  const updateDisplay = (event) => {
    let value = event.target.value;
    if (!value) {
      Display.deleteDisplay();
      isActive.setActive(false);
    } else {
      Display.setDisplay(value);
      isActive.setActive(true);
    }
  };
</script>

<section class="form">
  <input
    type="tel"
    id="display"
    value={$Display}
    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
    on:change={updateDisplay}
  />
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
</section>

<style>
  .form {
    display: grid;
    grid-template-columns: repeat(3, 6.62rem);
    grid-template-rows: auto repeat(4, 1fr) auto;
    gap: 5px;
    justify-content: center;
  }

  #display {
    grid-column: 1/4;
    height: 70px;
    padding: 10px;
    font-size: 48px;
    text-align: center;
    border: none;
    margin-top: 10px;
  }

  #display:focus-visible {
    outline: none;
  }
</style>
