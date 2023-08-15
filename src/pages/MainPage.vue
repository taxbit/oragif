<template>
  <header class="header">
    <div class="header__action">
      <BaseButton :arrow="'right'"> Тест-драйв </BaseButton>
    </div>
    <section class="banner">
      <img class="banner__image-bg" src="@/assets/images/banner_img_bg.png" />
      <img class="banner__image" src="@/assets/images/banner_img.png" />
    </section>
  </header>
  <main class="main">
    <h1 class="main__title">Мы ценим Ваше время и комфорт! Запишитесь на сервис Nissan онлайн</h1>
    <section class="main__content">
      <BaseSlider :data="benefits" />
      <BaseCardList
        :cards="featuresList"
        button-text="Добавить особенность"
        :title="blockHeading"
        @add.once="addFeature"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useFeaturesStore } from '@/store/features'
import { storeToRefs } from 'pinia'
import type { IFilter } from '@/types/index'
import BaseSlider from '@/components/slider/BaseSlider.vue'
import BaseCardList from '@/components/card/BaseCardList.vue'
import BaseButton from '@/components/button/BaseButton.vue'

const filters: IFilter[] = [
  { fieldName: 'model_name', fieldValue: 'Figaro' },
  { fieldName: 'description', required: true },
  { fieldName: 'image', required: true }
]
useFeaturesStore().getData(filters)
const { featuresList, blockHeading } = storeToRefs(useFeaturesStore())

const benefits = [
  {
    img: 'images/benefits/1.png',
    title: 'Выгода',
    text: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля'
  },
  {
    img: 'images/benefits/2.png',
    title: 'Актуальность',
    text: 'Выберите актуальные для вас сервисные предложения'
  },
  {
    img: 'images/benefits/3.png',
    title: 'Широкий выбор',
    text: 'Выберите дилера, который вам подходит'
  },
  {
    img: 'images/benefits/4.png',
    title: 'Онлайн обслуживание',
    text: 'Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты'
  }
]

const addFeature = () => {
  featuresList.value.splice(1, 0, {
    description:
      'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
    image: 'assets/img4.png',
    image_alt: 'нестационарный гироскопический стабилизатор',
    model_name: 'string',
    sorting: 1
  })
}
</script>
