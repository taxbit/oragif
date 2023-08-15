import type { IData } from '@/types'

export const api = {
  getData: async (): Promise<IData> => {
    try {
      const response = await fetch('https://test-task-frontend-2023.slava.digital', {
        method: 'POST'
      })
      return response.json()
    } catch (error) {
      throw 'api error'
    }
  }
}
