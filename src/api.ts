import {countries, country} from './types'

const linkUniversities = process.env.REACT_APP_LINK_UNIVERSITIES || ''
const linkCountries = process.env.REACT_APP_LINK_COUNTRIES || ''
const authToken = process.env.REACT_APP_AUTH_TOKEN || ''

export class Api {

  static async searchUniversisies(params: {[key: string]: string}) {
    try {
      const response = await fetch(`${linkUniversities}/search?${new URLSearchParams(params)}`)
      if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`)
      }
    } catch (error) {
      console.log(`Ошибка ${error}`)
    }
  }

  static async getCounties(): Promise<countries> {
    try {
      const response = await fetch(`${linkCountries}/countries?locale%5Blang%5D=ru&apiKey=${authToken}`)
      if (!response.ok) {
        throw new Error(`HTTP ошибка! Код: ${response.status}`)
      }
      const json = await response.json()
      const result = json['result'].map((el: country) => ({
        key: el.name,
        text: el.name,
        value: el.localizedNames.en === 'Russia' ? 'Russian Federation' : el.localizedNames.en
      })) as countries
      return result
    } catch (error) {
      console.log(`Ошибка ${error}`)
      return []
    }
  }
}
