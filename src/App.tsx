import {useState} from 'react'
import {Container} from 'semantic-ui-react'
import ContainerUniversities from './components/containerUniversities'
import CountriesDropdown from './components/dropdowns/countriesDropdows'
import HeaderWebPage from './components/headerWebPage'

export default function App() {

  const [selectedCountry, setSelectedCountry] = useState<string>('')

  return (
    <Container
      style={{padding: '30px'}}
      fluid
    >
      <HeaderWebPage />
      <Container textAlign='center'>
        <CountriesDropdown
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          clearable
          style={{width: '300px'}}
        />
      </Container>
      <ContainerUniversities selectedCountry={selectedCountry} />
    </Container>
  )
}
