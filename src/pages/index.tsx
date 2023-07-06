import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  BannerDashboard,
  IllustrationsLayer,
  OpenGraph,
  TestimonialsBanner
} from '@/components'
import {
  BuildWithSection,
  FeaturesSection,
  StartNowSection,
  WindowEditorSection
} from '@/modules'
import { useTranslation } from 'next-i18next'

const ComponentsSection = dynamic(
  () => import('@/modules/landing/home/ComponentsSection'),
  { ssr: false }
)

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <OpenGraph title={t('metadata.home')!} />
      {/* <IllustrationsLayer /> */}
      <main className="mx-auto">
        <ComponentsSection />
        <FeaturesSection />
        <BuildWithSection />
        <BannerDashboard />
        <WindowEditorSection />
        <TestimonialsBanner />
        <StartNowSection />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale))
    }
  }
}
