import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Button,
  Circle,
  DatePicker,
  FilterRangeSlider,
  Flex,
  Input,
  Pagination,
  ProgressCircle,
  Text,
  usePagination
} from 'dd360-ds'
import DynamicHeroIcon from 'dd360-ds/DynamicHeroIcon'
import { composeClasses } from 'dd360-ds/lib'

import CustomSwitch from '@/components/CustomSwitch'
import useCopy from '@/hooks/useCopy'
import { useTheme } from '@/pages/store/theme-store'
import DropdownExample from './DropdownExample'

const ComponentsSection = () => {
  const { handleCopy, isCopied } = useCopy()
  const paginationProps = usePagination()
  const [sectionPos, setSectionPos] = useState({ top: 0, left: 0 })
  const [IsScreenXl, setIsScreenXl] = useState(false)
  const {
    themeObject: { extendedPalette },
    isLightTheme
  } = useTheme()

  useEffect(() => {
    function handleResize() {
      const sectionNode = document.querySelector(
        '.section-goup-components'
      ) as HTMLElement
      if (sectionNode) {
        setIsScreenXl(window.innerWidth >= 1280)
        setSectionPos({
          top: sectionNode.offsetTop,
          left: sectionNode.offsetLeft
        })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="m-auto max-w-8xl section-components flex max-xl:flex-col items-center pt-[55px] xl:py-36">
      <div className="xl:max-w-lg ml-10 2xl:ml-auto flex flex-col items-center xl:items-start">
        <Text
          size="4xl"
          className={composeClasses('mb-2', extendedPalette.secundaryText)}
          variant="h2"
        >
          The React library to build
        </Text>

        <Text
          size="5xl"
          className={composeClasses('font-bold', extendedPalette.primaryText)}
          variant="h1"
        >
          Back office platforms like DD360
        </Text>

        <Flex className="gap-3 flex-col sm:flex-row mt-10">
          <Link href="/docs/get-started/getting-started">
            <Button
              className="flex justify-center items-center w-full sm:w-40 sm:max-w-[150px] h-10 gap-2"
              paddingY="2"
              rounded="lg"
            >
              Get started
              <DynamicHeroIcon icon="ArrowRightIcon" width={16} />
            </Button>
          </Link>
          <Button
            paddingY="2"
            variant="secondary"
            className={composeClasses(
              'w-[202px] h-10 px-2 flex justify-between items-center',
              extendedPalette.secundaryText
            )}
            style={{
              borderColor: isCopied
                ? '#16a34a'
                : extendedPalette.inputBorderHex,
              background: extendedPalette.inputBackground
            }}
            fontWeight="normal"
            rounded="lg"
            onClick={() => handleCopy('npm i dd360-ds@latest')}
          >
            npm i dd360-ds@latest{' '}
            <DynamicHeroIcon
              className={composeClasses(isCopied && 'text-green-600')}
              icon={isCopied ? 'ClipboardCheckIcon' : 'ClipboardIcon'}
              width={20}
            />
          </Button>
        </Flex>
      </div>

      <section
        className="relative mb-6 section-goup-components hidden sm:block max-w-2xl m-auto mt-[70px] xl:mt-0 xl:ml-auto"
        style={{ width: 677, height: 369 }}
      >
        <FilterRangeSlider
          className={composeClasses(
            'demo-cmpnt floating hidden sm:block',
            isLightTheme ? 'light' : 'dark'
          )}
          onApply={() => {}}
          position={{
            show: true,
            left: sectionPos.left + (IsScreenXl ? 22 : 255),
            top: sectionPos.top + 288
          }}
          min={0}
          max={50}
          initMinValue={10}
          initMaxValue={40}
          width={268}
        />

        <div
          style={{
            animationDelay: '1s'
          }}
          className="floating absolute top-[-34px] left-[40px] xl:top-[-44px] xl:left-[185px]"
        >
          <Pagination
            {...paginationProps}
            currentPage={paginationProps.currentPage + 1}
            totalPages={3}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 179,
            animationDelay: '1s',
            zIndex: 1
          }}
          className="floating"
        >
          <DatePicker
            format="short"
            language="en"
            minDate={new Date('2023-02-11T06:00:00.000Z')}
            onChange={function noRefCheck() {}}
            onDaySelected={function noRefCheck() {}}
            value={new Date('2023-02-27T06:00:00.000Z')}
            className="demo-cmpnt date-picker"
          />
        </div>

        <div
          style={{
            animationDelay: '1s',
            zIndex: 2
          }}
          className="floating absolute top-[-33px] left-[434px] xl:top-[163px] xl:left-[345px]"
        >
          <Input
            className="demo-cmpnt w-[265px] shadow-2xl"
            label="Search"
            onChange={function noRefCheck() {}}
            placeholder="Search"
            endAdornment={
              <DynamicHeroIcon icon="SearchCircleIcon" width={20} />
            }
            value=""
            variant="default"
            style={{
              background: extendedPalette.inputBackground,
              color: extendedPalette.inputText,
              borderColor: extendedPalette.inputBorderHex
            }}
          />
        </div>

        {/* <CardExample
          style={{
            position: 'absolute',
            top: -38,
            left: 409,
            animationDelay: '0.7s'
          }}
          className="demo-cmpnt floating"
        /> */}

        <DropdownExample
          style={{
            animationDelay: '0.3s',
            zIndex: 2
          }}
          className="demo-cmpnt absolute shadow-2xl floating top-[109px] left-[42px] xl:top-[-72px] xl:left-[82px]"
        />

        <div
          style={{ animationDelay: '0.8s' }}
          className="absolute floating w-[128px] xl:w-[136px] top-[185px] left-[512px] xl:top-[291px] xl:left-[406px] "
        >
          <ProgressCircle
            classNamePercentage={composeClasses(
              'w-full text-center text-2xl font-bold'
            )}
            value={30}
            width={'auto' as any}
            strokeWidth={14}
            colorBackground={extendedPalette.componentBgTertiaryHex}
            colorProgress="#3B87F2"
          >
            <Text size="xs">of efficiency</Text>
          </ProgressCircle>
        </div>

        <div
          style={{ position: 'absolute', top: 117, left: 503 }}
          className="absolute floating"
        >
          <Circle
            width="36px"
            height="36px"
            backgroundColor={extendedPalette.componentBgPrimaryHex}
            className={composeClasses(
              'border',
              extendedPalette.cardBorderColor
            )}
          >
            <DynamicHeroIcon
              icon="MailIcon"
              className={extendedPalette.badgeDefaultColor}
              width={20}
            />
          </Circle>
        </div>

        <div
          style={{
            animationDelay: '2s'
          }}
          className="absolute floating top-[299px] left-[144px] xl:top-[235px] xl:left-[87px] "
        >
          <CustomSwitch className="demo-cmpnt switch" />
        </div>
      </section>
    </section>
  )
}

export default ComponentsSection
