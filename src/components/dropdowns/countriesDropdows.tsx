import {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from 'react'
import {Dropdown, DropdownProps} from 'semantic-ui-react'
import {Api} from '../../api'
import type {countries} from '../../types'

interface ICountriesDropdown extends DropdownProps {
  setSelectedCountry: Dispatch<SetStateAction<string>>
  selectedCountry: string
}

export default function CountriesDropdown({selectedCountry, setSelectedCountry, ...props}: ICountriesDropdown) {
  const [countries, setCountries] = useState<countries>([])

  useEffect(() => {
    async function fetchData() {
      const result = await Api.getCounties()
      setCountries(result)
    }
    fetchData()
  }, [])

  return (
    <Dropdown
      placeholder='Выберите страну'
      options={countries}
      search
      selection
      value={selectedCountry}
      onChange={(_e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        setSelectedCountry(typeof data.value === 'string' ? data.value : '')
      }}
      {...props}
    />
  )
}
