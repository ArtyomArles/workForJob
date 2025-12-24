
import {useDispatch, useSelector} from 'react-redux'
import {Card, Modal, ModalProps} from 'semantic-ui-react'
import {setCloseModal} from '../store/modal'
import {modalState} from '../types'

export default function ModalComponent(props: ModalProps) {

  const modal = useSelector((state: { modal: modalState }) => state.modal)
  const dispatch = useDispatch()
  
  return (
    <Modal
      closeIcon
      onClose={() => dispatch(setCloseModal())}
      open={modal.open}
      size='tiny'
      content={
        <Card
          style={{margin: '10px auto'}}
          image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
          header={modal.university.name}
          meta={modal.university.country}
          description={
            modal.university.web_pages.map((page) =>
              <a
                href={page}
                key={page}
              >
                {page}
                <br />
              </a>)
          }
        />
      }
      {...props}
    />)
}