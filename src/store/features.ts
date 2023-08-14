import { defineStore } from 'pinia'
import type { IFeature, IFilter } from '@/types'
import { api } from '@/services/api'
import { ref } from 'vue'

export const useFeaturesStore = defineStore('featuresStore', () => {
  const featuresList = ref<IFeature[]>([])
  const assetsDomain = ref<string>('')
  const blockHeading = ref<string>('')
  const error = ref<Error | null>(null)

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

    const sortedList = Array(filteredList.length)
    Object.values(filteredList).forEach((feature) => {
      sortedList[feature.sorting] = feature
    })

    const normalizedList = sortedList.map((feature) => ({
      ...feature,
      image: data.assets_domain + feature.image
    }))

    featuresList.value = normalizedList

    assetsDomain.value = data.assets_domain
    blockHeading.value = data.block_heading
  }

  return { getData, featuresList, assetsDomain, blockHeading }
})
