
import {Header, HeaderContent, Icon} from 'semantic-ui-react'

export default function HeaderWebPage() {
  return (
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <HeaderContent>Информация об университетов всех стран</HeaderContent>
    </Header>)
}