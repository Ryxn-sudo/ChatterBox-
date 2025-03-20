'use client'

import useConversation from "@/app/hooks/useConversation"
import useRoutes from "@/app/hooks/useRoutes"
import MobileItem from "./MobileItem"

const MobileFooter = () => {
  const routes = useRoutes()
  const { isOpen } = useConversation();
  if (isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white lg:hidden">
      <nav className="flex justify-between py-3 px-6">
        {routes.map((item) => (
          <MobileItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            active={item.active ?? false}
            onClick={item.onClick}
          />
        ))}
      </nav>
    </div>
  )
}

export default MobileFooter