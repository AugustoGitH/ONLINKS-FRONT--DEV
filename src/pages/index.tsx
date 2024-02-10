
import Auth from '@/components/Auth'
import { navigationRoutes } from '@/settings/navigation/routes'
import PresentationPage from '@/templates/PresentationPage'
import Head from 'next/head'

export default function Presentation() {
  return (
    <Auth>
      <Head>
        <title>{navigationRoutes.home.title}</title>
      </Head>
      <PresentationPage />
    </Auth>
  )
}
