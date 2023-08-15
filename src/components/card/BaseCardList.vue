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
    </section>
    <BaseButton @click="addFeature" text-align="center" class="cardlist__add">
      {{ buttonText }}
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
import '@/assets/styles/components/cardlist.scss'
import type { CardItem } from '@/types'
import BaseCard from './BaseCard.vue'
import BaseButton from '@/components/button/BaseButton.vue'

interface Props {
  cards: CardItem[]
  title: string
  buttonText: string
}

defineProps<Props>()
const emits = defineEmits(['add'])

const addFeature = () => emits('add')
</script>
