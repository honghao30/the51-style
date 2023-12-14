<!-- <template>
  <a href="#" class="btn" :class="{}" @click="btnActive">
    <i :class="{ iconName }"></i>
    <span :class="{iconOnly ? irtext : ''}">{{ btnName }}</span>
    <slot name="svgicon"></slot>
  </a>
</template> -->
<template>
  <div class="btn-wrap__btn" :class="{btnType ? btnType : ''}">
    <button href="#" :class="`btn btn-wrap__btn--${btnType}`">
      <span class="">{{ btnName }}</span>
    </button>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped></style>
