<script>
export default {
  props: {
    text: {
      required: true,
    },
  },
};
</script>

<template>
  <button :class="{ zero: text === '0', back: text === 'Backspace', send: text === 'send' }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" v-if="text === 'Backspace'">
      <path
        fill="currentColor"
        d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else-if="text === 'send'">
      <path
        fill="currentColor"
        d="M19.005,3.175H4.674C3.642,3.175,3,3.789,3,4.821V21.02 l3.544-3.514h12.461c1.033,0,2.064-1.06,2.064-2.093V4.821C21.068,3.789,20.037,3.175,19.005,3.175z M14.016,13.044H7.041V11.1 h6.975V13.044z M17.016,9.044H7.041V7.1h9.975V9.044z"
      />
    </svg>
    <span v-else>{{ text }}</span>
  </button>
</template>

<style scoped>
button {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 2.125rem;
  font-weight: 500;
  justify-self: center;
  cursor: pointer;
}

button:active {
  background: var(--bg-color-deeper);
}

button:focus-visible {
  outline: none;
}

.zero {
  grid-column: 2;
}

.back {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.send {
  grid-column: 2;
  background-color: var(--app-primary-color);
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.active {
  color: var(--black-color);
}

@media screen and (min-width: 661px) {
  button:hover {
    background: var(--bg-color-deeper);
  }
  .back:hover {
    color: var(--btn-hover-color);
  }
  .send:hover {
    background-color: var(--app-primary-color);
  }
}
</style>
