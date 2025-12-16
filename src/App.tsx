import {useEffect, useState} from 'react'
import {Api} from './api'
import CountriesDropdown from './components/dropdowns/countriesDropdows'

export default function App() {

  const [selectedCountry, setSelectedCountry] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      const result = await Api.searchUniversisies({country: selectedCountry})
      console.log(result)
    }
    if (selectedCountry)
      fetchData()
  }, [selectedCountry])

  return (
    <CountriesDropdown
      selectedCountry={selectedCountry}
      setSelectedCountry={setSelectedCountry}
      clearable
    />
  )
}
