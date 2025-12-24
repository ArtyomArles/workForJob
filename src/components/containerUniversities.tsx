import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Grid, GridColumn, Input, Item, Statistic} from 'semantic-ui-react'
import {Api} from '../api'
import {setFilterName} from '../store/filter'
import {setOpenModal, setUniversityOnModal} from '../store/modal'
import {filter, university} from '../types'
import Loading from './loading'
import ModalComponent from './modalComponent'

interface IContainerUniversities {
  selectedCountry: string
}


export default function ContainerUniversities({selectedCountry}: IContainerUniversities) {
  
  const [universities, setUniversities] = useState<Array<university>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const filterName = useSelector((state: { filter: filter }) => state.filter.filterName)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      setUniversities([])
      setLoading(true)
      const result = await Api.searchUniversisies({country: selectedCountry})
      setUniversities(result)
      setLoading(false)
    }
    if (selectedCountry) {
      fetchData()
    } else {
      dispatch(setFilterName(''))
      setUniversities([])
    }
  }, [dispatch, selectedCountry])
  
  return (
    <>
      <Input
        placeholder='Введите название университета'
        value={filterName}
        disabled={!selectedCountry}
        style={{paddingTop: '10px'}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setFilterName(e.target.value))
        }}
        icon='search'
        fluid
      />
      {!loading ?
        <>
          <Statistic
            label="Найдено"
            value={universities.filter((el) =>
              el.name.toLowerCase().includes(filterName.toLowerCase())).length}
            size='mini'
            floated='right'
            color='grey'
          />
          <ModalComponent
            trigger={
              <Grid
                columns='three'
                celled
              >
                {universities.filter((el) =>
                  el.name.toLowerCase().includes(filterName.toLowerCase())).map((el) =>
                  <GridColumn key={el.name}>
                    <Item
                      key={el.name}
                      description={el.country}
                      header={
                        <strong
                          className='link'
                          onClick={() => {
                            dispatch(setOpenModal())
                            dispatch(setUniversityOnModal(el))
                          }}
                        >
                          {el.name}
                        </strong>
                      }
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
            }
          />
        </>
        : <Loading />}
    </>
  )
}