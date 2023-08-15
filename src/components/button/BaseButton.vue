<template>
    <button class="button" :class="{[`button_arrow-${arrow}`]: !!arrow}">
        <div class="button__text" :class="{[`button__text_${textAlign}`]: !!textAlign}">
            <slot></slot>
        </div>
        <div class="button__icon"></div>
    </button>
</template>

<script setup lang="ts">
import "@/assets/styles/components/button.scss";

interface Props {
  arrow?: 'left' | 'right' | null;
  textAlign?: 'center' | null;
}
defineProps<Props>()
</script>