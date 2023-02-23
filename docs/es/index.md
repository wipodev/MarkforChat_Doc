---
layout: home
title: Mark for Chat
hero:
  name: Mark for Chat
  text: ¡Comienza a chatear hoy mismo!
  tagline: Descarga Mark for Chat ahora y experimenta la libertad de poder hablar con cualquier persona en WhatsApp sin necesidad de añadirlos a tu libreta de contactos.
  image:
    src: /app.png
    alt: MarkforChat
  actions:
    - theme: brand
      text: Descarga la APP
      link: https://play.google.com/store/apps/details?id=com.wipodev.markforchat

features:
  - icon: 📜
    title: Seleccione el país
    details: Utilice la lista desplegable en la parte superior de la pantalla para seleccionar el código de país deseado.
  - icon: ☎️
    title: Marque el número
    details: Utilice el teclado numérico para marcar el número de teléfono al que desea llamar.
  - icon: 📞
    title: Iniciar conversación en WhatsApp
    details: Presione el botón Chatear en la parte inferior del teclado numérico y listo.
---

<script setup>
import {onMounted} from 'vue'

onMounted(()=>{
  document.querySelector(".VPNav").classList.remove("appNav")
})
</script>
