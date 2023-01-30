import { ClipBoardActive } from "./Phones";

export const mobile = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
};

export const clipBoard = async () => {
  try {
    const clip = await navigator.clipboard.readText();
    if (clip.match(/^[0-9]+$/)) {
      ClipBoardActive.setActive(true);
      return clip;
    } else {
      ClipBoardActive.setActive(false);
    }
  } catch (err) {
    console.log("No hay texto en el clipboard:", err);
  }
};
