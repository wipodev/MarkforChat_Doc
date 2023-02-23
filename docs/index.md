---
layout: home
title: Mark for Chat
hero:
  name: Mark for Chat
  text: ¡Start chatting today!
  tagline: Download Mark for Chat now and experience the freedom of being able to talk to anyone on WhatsApp without having to add them to your contact book.
  image:
    src: /app.png
    alt: MarkforChat
  actions:
    - theme: brand
      text: Download the APP
      link: https://play.google.com/store/apps/details?id=com.wipodev.markforchat

features:
  - icon: 📜
    title: Select country
    details: Use the dropdown list at the top of the screen to select the desired country code.
  - icon: ☎️
    title: Dial the number
    details: Use the numeric keypad to dial the phone number you want to call.
  - icon: 📞
    title: Start conversation on WhatsApp
    details: Hit the Chat button at the bottom of the number pad and you're done.
---

<script setup>
import {onMounted} from 'vue'

onMounted(()=>{
  document.querySelector(".VPNav").classList.remove("appNav")
})
</script>
