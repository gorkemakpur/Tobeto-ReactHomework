import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({signIn}) {
  return (
    <>
    <Menu.Item >
        <Button primary onClick={signIn}>Giriş Yap</Button>
        <Button primary>Kayıt Ol</Button>
        </Menu.Item>
    </>
  )
}
