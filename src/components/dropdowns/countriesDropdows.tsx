import {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from 'react'
import {Dropdown, DropdownProps} from 'semantic-ui-react'
import {Api} from '../../api'
import type {country} from '../../types'

interface ICountriesDropdown extends DropdownProps {
  setSelectedCountry: Dispatch<SetStateAction<string>>
  selectedCountry: string
}

export default function CountriesDropdown({selectedCountry, setSelectedCountry, ...props}: ICountriesDropdown) {
  const [countries, setCountries] = useState<Array<country>>([])
  const [loading, setLoading] = useState<boolean>(false)

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
        setSelectedCountry(typeof data.value === 'string' ? data.value : '')
      }}
      {...props}
    />
  )
}
