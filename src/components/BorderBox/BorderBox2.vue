<template>
  <div class="border-box-2">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.border-box-2 {
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 1px #00000088;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.border-box-2 .content {
  border-radius: 10px;
  // background: #171717;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  z-index: 1;
  color: white;
}

.border-box-2::before {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 300px;
  transform: rotate(0deg) translateY(50%);
  background: linear-gradient(90deg, #ff2288, transparent);
  transition: opacity 300ms;
  animation: rotation_9018 3000ms infinite linear;
  animation-play-state: running;
}
.border-box-2::after {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 300px;
  transform: rotate(0deg) translateY(-50%);
  background: linear-gradient(90deg, transparent, #2268ff);
  transition: opacity 300ms;
  animation: rotation_9019 3000ms infinite linear;
  animation-play-state: running;
}

// .border-box-2:hover::before {
//   opacity: 1;
//   animation-play-state: running;
// }
// .border-box-2:hover::after {
//   opacity: 1;
//   animation-play-state: running;
// }

@keyframes rotation_9018 {
  0% {
    transform: rotate(0deg) translateY(50%);
  }

  100% {
    transform: rotate(360deg) translateY(50%);
  }
}
@keyframes rotation_9019 {
  0% {
    transform: rotate(0deg) translateY(-50%);
  }

  100% {
    transform: rotate(360deg) translateY(-50%);
  }
}
</style>
