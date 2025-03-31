<template>
  <div class="border-box-3">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss">
.border-box-3 {
  border: 2px solid #00c7ff;
  box-shadow: 2px 2px 15px #000000 inset;
  text-align: center;
  color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pacifico';
  box-shadow: 2px 2px 15px #00c7ff inset;
  border-radius: 10px;
  // animation: box-shadow 3s infinite linear;
}
@keyframes box-shadow {
  0% {
    box-shadow: 2px 2px 0px #00c7ff inset;
  }

  50% {
    box-shadow: 2px 2px 15px #00c7ff inset;
  }

  100% {
    box-shadow: 2px 2px 0px #00c7ff inset;
  }
}
</style>
