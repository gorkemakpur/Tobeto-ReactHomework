import React from 'react'
import { Dropdown, DropdownItem, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <>
        <Menu.Item>
            <Image avatar spaced="right" src="#" text="Aziz"/>

        <Dropdown >            
            <Dropdown.Menu>
                <DropdownItem text="Bilgilerim" icon="info" />
                <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />
            </Dropdown.Menu>
        </Dropdown>

        </Menu.Item>
    </>
  )
}
