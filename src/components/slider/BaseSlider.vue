<template class="slider">
  <section class="slider">
    <div class="controls">
      <div @click="click('left')" class="controls__left">{{ '<' }}</div>
      <div @click="click('right')" class="controls__right">{{ '>' }}</div>
    </div>
    <div class="items">
      <TransitionGroup name="list">
        <template v-for="(item, index) in items" :key="index">
          <BaseSliderItem v-if="trigger" class="item">
            <template #image>
              <img :src="item.img" alt="slider item" />
            </template>
            <template #title>
              {{ item.title }}
            </template>
            <template #text>
              {{ item.text }}
            </template>
          </BaseSliderItem>
        </template>
      </TransitionGroup>
    </div>
  </section>
</template>
<script setup lang="ts">
import BaseSliderItem from '@/components/slider/BaseSliderItem.vue'
import '@/assets/styles/components/slider.scss'
import { ref, nextTick } from 'vue'

interface ISliderItem {
  img: string
  title: string
  text: string
}

interface Props {
  data: ISliderItem[]
}
const props = defineProps<Props>()
const items = ref([...props.data])

const trigger = ref(true)
const click = (direction: string) => {
  trigger.value = false
  direction === 'right' ? 
  items.value = [...items.value.slice(1), items.value[0]]
  : items.value.push(items.value.shift()!)
  nextTick(() => (trigger.value = true))
}
</script>
