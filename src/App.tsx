import {useEffect, useState} from 'react'
import {Container} from 'semantic-ui-react'
import {Api} from './api'
import CountriesDropdown from './components/dropdowns/countriesDropdows'
import HeaderWebPage from './components/headerWebPage'
import Loading from './components/loading'
import {university} from './types'

export default function App() {

  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [universities, setUniversities] = useState<Array<university>>([])
  const [loading, setLoading] = useState<boolean>(false)

  console.log(universities)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const result = await Api.searchUniversisies({country: selectedCountry})
      setUniversities(result)
      setLoading(false)
    }
    if (selectedCountry)
      fetchData()
  }, [selectedCountry])

  return (
    <Container style={{margin: '30px', width: '95%'}}>
      <HeaderWebPage />
      <Container textAlign='center'>
        <CountriesDropdown
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          clearable
          style={{width: '300px'}}
        />
      </Container>
      {loading && <Loading />}
    </Container>
  )
}
