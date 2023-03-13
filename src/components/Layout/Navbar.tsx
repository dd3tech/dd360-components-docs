import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { Input, Text, Circle, ImageIcon } from 'dd360-ds'
import { useRouter } from 'next/router'
import { composeClasses } from 'dd360-ds/lib'

const menu = [
    {
        key: 1,
        label: 'components',
        link: '/components'
    },
    {
        key: 2,
        label: 'docs',
        link: '/docs/buttons/button'
    },
    {
        key: 3,
        label: 'examples',
        link: '/docs'
    }
]

function Navbar({ isSticky, hideLogo }: { isSticky?: boolean; hideLogo?: boolean }) {
    const { t } = useTranslation('common')
    const router = useRouter()
    console.log(router.pathname)
    return (
        <nav className={composeClasses('bg-white w-full', isSticky && 'sticky top-0 z-10')}>
            <div className="flex justify-between items-center h-20 py-6 mx-auto px-4 lg:px-16" style={{ maxWidth: '1400px' }}>
                {!hideLogo && (
                    <Link href="/">
                        <Image src="/dd360-black.png" width={130} height={28.5} alt="logo" />
                    </Link>
                )}

                <ul className="hidden items-center gap-8 h-12 md:flex">
                    {menu.map(({ key, label, link }) => (
                        <Link
                            key={key}
                            href={link}
                            locale={router?.locale}
                            className={composeClasses(
                                'h-full flex items-center border-b-4 border-transparent hover:border-blue-500 text-gray-500 font-medium',
                                router.pathname.includes(label) && 'border-blue-500'
                            )}
                        >
                            {t(label)}
                        </Link>
                    ))}
                </ul>
                <Input
                    inputBlank
                    rounded="2xl"
                    className="py-3 h-10 lg:mt-0 bg-gray-100"
                    startAdornment={<DynamicHeroIcon icon="SearchIcon" className="w-4 h-4 mr-2 text-gray-500" />}
                    endAdornment={
                        <Text size="xs" className="min-w-max border py-1 px-2 rounded-2xl text-gray-500 select-none" variant="p">
                            Ctrl + K
                        </Text>
                    }
                    variant="active"
                    placeholder="Search the docs   (Ctrl + k)"
                />

                <Circle width="36px" height="36px" backgroundColor="transparent" border="1px solid #D1D5DB">
                    <ImageIcon src="/gitlab.svg" style={{ width: 16 }} />
                </Circle>
            </div>
        </nav>
    )
}

export default Navbar
