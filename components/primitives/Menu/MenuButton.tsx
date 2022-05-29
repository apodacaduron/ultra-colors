import { Menu } from '@headlessui/react'

interface MenuButtonProps {
  children: React.ReactNode
}

const DMenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <Menu.Button className="focus:outline-none">
      {props.children}
    </Menu.Button>
  )
}

export default DMenuButton
