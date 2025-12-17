import {useEffect, useState} from 'react'
import {Grid, GridColumn, Input, Item} from 'semantic-ui-react'
import {debounce} from 'ts-debounce'
import {Api} from '../api'
import {university} from '../types'
import Loading from './loading'

interface IContainerUniversities {
  selectedCountry: string
}


export default function ContainerUniversities({selectedCountry}: IContainerUniversities) {
  
  const [universities, setUniversities] = useState<Array<university>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filterName, setFilterName] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      setUniversities([])
      setLoading(true)
      const result = await Api.searchUniversisies({country: selectedCountry})
      setUniversities(result)
      setLoading(false)
    }
    if (selectedCountry) {
      const debouncedFetchData = debounce(fetchData, 500)
      debouncedFetchData()
    } else {
      setFilterName('')
      setUniversities([])
    }
  }, [selectedCountry])
  
  return (
    <>
      <Input
        placeholder='Введите название университета'
        value={filterName}
        fluid
        disabled={!selectedCountry}
        style={{paddingTop: '10px'}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFilterName(e.target.value)
        }}
      />
      {!loading ?
        <Grid
          columns='three'
          celled
        >
          {universities.filter((el) =>
            el.name.toLowerCase().includes(filterName.toLowerCase())).map((el) =>
            <GridColumn key={el.name}>
              <Item
                key={el.name}
                header={el.name}
                description={el.country}
                extra={
                  el.web_pages.map((page) =>
                    <a
                      href={page}
                      key={page}
                    >
                      {page}
                      <br />
                    </a>)
                }
              />
            </GridColumn>
          )}
        </Grid>
        : <Loading />}
    </>
  )
}