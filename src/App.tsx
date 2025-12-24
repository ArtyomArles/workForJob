import {useSelector} from 'react-redux'
import {Container} from 'semantic-ui-react'
import ContainerUniversities from './components/containerUniversities'
import CountriesDropdown from './components/dropdowns/countriesDropdows'
import HeaderWebPage from './components/headerWebPage'
import {filter} from './types'

export default function App() {

  const selectedCountry = useSelector((state: {filter : filter}) => state.filter.selectedCountry)

  return (
    <Container
      style={{padding: '30px'}}
      fluid
    >
      <HeaderWebPage />
      <Container textAlign='center'>
        <CountriesDropdown
          clearable
          selectedCountry={selectedCountry}
          style={{width: '300px'}}
        />
      </Container>
      <ContainerUniversities selectedCountry={selectedCountry} />
    </Container>
  )
}
