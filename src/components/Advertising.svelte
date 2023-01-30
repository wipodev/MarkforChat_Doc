<script>
  import { mobile } from "../store/Utils";
</script>

<section class:active={$mobile}>
  <img src="./publicidad.jpeg" alt="publicidad" />
  <img src="./publicidad.jpeg" alt="publicidad" />
</section>

<style>
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    font-size: 2rem;
    display: none;
  }

  .active {
    display: block;
  }

  img {
    width: auto;
    height: 100%;
  }
</style>
