<script setup>
import BtnNumber from "./BtnNumber.vue";
import { reactive, onUpdated, ref } from "vue";

const inputDisplay = ref(null);

onUpdated(() => {
  const posi = state.position;
  inputDisplay.value.focus();
  inputDisplay.value.setSelectionRange(posi, posi);
});

const state = reactive({
  display: "",
  position: 0,
  interval: null,
  active: false,
  long: 0,
});

const startPress = () => {
  if (!state.interval) {
    state.interval = setInterval(function () {
      deleteDisplay(true);
      console.log("borrar");
    }, 800);
  }
};

const stopPress = () => {
  clearInterval(state.interval);
  console.log("terminar");
  state.interval = null;
};

const currentCursor = () => {
  const input = document.querySelector("input");
  state.position = input.selectionStart;
};

const captureKeydown = (e) => {
  if (/[0-9]/.test(e.key)) addDisplay(e.key);
  if (e.key === "ArrowLeft") state.position -= 1;
  if (e.key === "ArrowRight") state.position += 1;
  inputDisplay.value.setSelectionRange(state.position, state.position);
};

const addDisplay = (text) => {
  const { display, position } = state;
  state.display = display.slice(0, position) + text + display.slice(position);
  state.position += 1;
  state.long = state.display.length;
  state.active = true;
};

const deleteDisplay = (long = false) => {
  const { display, position } = state;
  const positionInit = long ? 0 : position - 1;
  if (position > 0) {
    state.display = removeRange(display, positionInit, position);
    state.position = positionInit;
    state.long = state.display.length;
    if (!state.display) state.active = false;
  }
};

const displayListener = () => {
  state.display = state.display.replace(/[^0-9]/g, "");
  let newLong = state.display.length - state.long;
  state.position += newLong;

  if (!state.display) {
    state.active = false;
  } else {
    state.active = true;
  }
};

const removeRange = (text, startIndex, endIndex) => {
  return text.slice(0, startIndex) + text.slice(endIndex);
};

const captureKeyup = (e) => {
  e.preventDefault();
  if (e.key === "Backspace") {
    deleteDisplay(false);
  }
};

const sendChat = () => {
  if (!state.display || state.display.length < 6) {
    alert("debe ingresar numero");
    return false;
  }
  const spinner = document.querySelector("select");
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    window.open(`https://wa.me/+${spinner.value}${state.display}`);
  } else {
    window.open(
      `https://web.whatsapp.com/send/?phone=%2B${spinner.value}${state.display}&text&type=phone_number&app_absent=0`
    );
  }
};
</script>

<template>
  <section class="form">
    <input
      type="text"
      id="display"
      ref="inputDisplay"
      v-model="state.display"
      @click="currentCursor"
      @keydown="captureKeyup"
      @keyup="captureKeydown"
      @input="displayListener"
    />
    <BtnNumber v-for="num in 9" :key="num" :text="num" @click="addDisplay(num)" />
    <BtnNumber text="0" @click="addDisplay(0)" />
    <BtnNumber
      v-if="state.active"
      text="Backspace"
      @click="deleteDisplay(false)"
      @mousedown="startPress"
      @mouseup="stopPress"
      @touchstart="startPress"
      @touchend="stopPress"
    />
    <BtnNumber text="send" @click="sendChat" />
  </section>
</template>

<style scoped>
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
