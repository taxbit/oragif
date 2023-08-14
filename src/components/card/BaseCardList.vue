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
import { computed } from 'vue'

interface Props {
  modelValue: CardItem[]
  title: string
  buttonText: string
}
const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue'])

const cards = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

const addFeature = () => {
  cards.value.splice(2, 0, {
    description:
      'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
    image: 'img3.png',
    image_alt: 'нестационарный гироскопический стабилизатор',
    model_name: 'string',
    sorting: 1
  })
}
</script>
