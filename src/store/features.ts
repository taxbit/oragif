import { defineStore } from 'pinia'
import type { IFeature, IFilter } from '@/types'
import { api } from '@/services/api'
import { ref } from 'vue'

export const useFeaturesStore = defineStore('featuresStore', () => {
  const featuresList = ref<IFeature[]>([])
  const blockHeading = ref<string>('')

  async function getData(filters: IFilter[]) {
    const data = await api.getData()

    const filteredList =
      data?.features?.filter((feature) =>
        filters.every((filter) => {
          let passed = true
          if (filter.fieldValue) {
            passed = feature[filter.fieldName] === filter.fieldValue
          }
          if (filter.required) {
            passed = passed && !!feature[filter.fieldName]
          }
          return passed
        })
      ) || []

    filteredList.sort((a, b) => a.sorting - b.sorting)

    const normalizedList = filteredList.map((feature) => {
      const image =
        feature.image.charAt(0) === '/'
          ? feature.image.substring(1, feature.image.length)
          : feature.image
      return {
        ...feature,
        image: data.assets_domain + image
      }
    })

    featuresList.value = normalizedList

    blockHeading.value = data.block_heading
  }

  return { getData, featuresList, blockHeading }
})
