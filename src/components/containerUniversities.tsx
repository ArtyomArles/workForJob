import {useEffect, useState} from 'react'
import {Grid, GridColumn, Input, Item} from 'semantic-ui-react'
import {Api} from '../api'
import {university} from '../types'

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
      const result = await Api.searchUniversisies({country: selectedCountry, name: filterName})
      setUniversities(result)
    }
    if (selectedCountry) {
      setLoading(true)
      fetchData()
      setLoading(false)
    } else {
      setUniversities([])
    }
  }, [filterName, selectedCountry])

  console.log(loading)
  
  return (
    <>
      <Input
        placeholder='Введите название университета'
        value={filterName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterName(e.target.value)}
      />
      <Grid
        columns='three'
        celled
      >
        {universities.map((el) =>
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
    </>
  )
}