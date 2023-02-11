import { writable } from "svelte/store";

const updateDisplay = () => {
  const { subscribe, set, update } = writable(null);

  return {
    subscribe,
    addDisplay(n) {
      update((prev) => {
        if (!prev) return n;
        return prev + n;
      });
    },
    setDisplay(value) {
      set(value);
    },
    deleteCharDisplay() {
      update((prev) => {
        if (!prev) return prev;

        let newDisplay = prev.substring(0, prev.length - 1);
        if (!newDisplay) isActive.setActive(false);
        return newDisplay;
      });
    },
    deleteDisplay() {
      set(null);
      isActive.setActive(false);
    },
  };
};

const updateCountry = () => {
  const { subscribe, set } = writable("51");

  return {
    subscribe,
    setCountry(country) {
      set(country);
    },
  };
};

const updateActive = () => {
  const { subscribe, set } = writable(false);

  return {
    subscribe,
    setActive(state) {
      set(state);
    },
  };
};

const updateClipBoard = () => {
  const { subscribe, set } = writable(false);

  return {
    subscribe,
    setActive(state) {
      set(state);
    },
  };
};

export const Display = updateDisplay();
export const Country = updateCountry();
export const isActive = updateActive();
export const ClipBoardActive = updateClipBoard();
