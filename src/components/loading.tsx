import {Dimmer, Image, Loader, Segment} from 'semantic-ui-react'

export default function Loading() {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Загрузка данных' />
      </Dimmer>
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>)
}