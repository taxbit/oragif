<template>
  <section class="cardlist">
    <h2 class="cardlist__title">{{ title }}</h2>
    <section class="cardlist__content">
      <BaseCard v-for="(card, index) in cards" :key="index">
        <template #image>
            <img :src="card.image" :alt="card.image_alt" />
          </template>
          <template #text>
            {{ card.description }}
          </template>
      </BaseCard>
      <button class="cardlist__add">
        {{ buttonText }}
      </button>
    </section>
  </section>
</template>

<script setup lang="ts">
import "@/assets/styles/components/cardlist.scss";
import type { CardItem } from "@/types";
import BaseCard from './BaseCard.vue';

interface Props {
  cards: CardItem[];
  title: string;
  buttonText: string;
}
const props = defineProps<Props>();
</script>