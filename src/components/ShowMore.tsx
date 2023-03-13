import { Text } from 'dd360-ds'
import DynamicHeroIcon, { IconName } from 'dd360-ds/DynamicHeroIcon'
import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'

type ShowMoreProps = {
    title: string
    children: ReactNode | ReactNode[]
    icon?: IconName
    basePath: string
}

function ShowMore({ title = 'Guide', children, basePath }: ShowMoreProps) {
    const [isOpen, setIsOpen] = useState(true)
    const router = useRouter()
    const isActive = router.asPath.includes(basePath)

    return (
        <div>
            <div className="flex w-full gap-2.5 justify-between items-center bg-gray-50" style={{ height: 30, paddingLeft: 6, paddingRight: 10 }}>
                <div className="flex justify-between items-center">
                    {isActive && <span className="bg-blue-500 h-4 mr-2" style={{ width: 3 }} />}

                    <Text size="sm" className="text-gray-700 font-semibold">
                        {title}
                    </Text>
                </div>

                <button onClick={() => setIsOpen(!isOpen)}>
                    <DynamicHeroIcon className="w-4 h-4" icon={isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'} />
                </button>
            </div>
            {isOpen && <div className="pl-5 list-disc flex flex-col gap-2 mt-4">{children}</div>}
        </div>
    )
}

export default ShowMore
