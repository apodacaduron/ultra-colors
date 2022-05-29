import { Menu } from '@headlessui/react'

interface MenuButtonProps {
  children: React.ReactNode
}

const DMenuButton: React.FC<MenuButtonProps> = (props) => {
  return (
    <Menu.Button className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none">
      {props.children}
    </Menu.Button>
  )
}

export default DMenuButton
