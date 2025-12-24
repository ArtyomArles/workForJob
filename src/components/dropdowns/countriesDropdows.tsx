import {SyntheticEvent, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Dropdown, DropdownProps} from 'semantic-ui-react'
import {Api} from '../../api'
import {setSelectedCountry} from '../../store/filter'
import type {country} from '../../types'

interface ICountriesDropdown extends DropdownProps {
  selectedCountry: string
}

export default function CountriesDropdown({selectedCountry, ...props}: ICountriesDropdown) {
  
  const [countries, setCountries] = useState<Array<country>>([])
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const result = await Api.getCounties()
      setCountries(result)
    }
    setLoading(true)
    fetchData()
    setLoading(false)
  }, [])

  return (
    <Dropdown
      placeholder='Выберите страну'
      options={countries}
      search
      selection
      value={selectedCountry}
      loading={loading}
      onChange={(_e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        dispatch(setSelectedCountry(typeof data.value === 'string' ? data.value : ''))
      }}
      {...props}
    />
  )
}
