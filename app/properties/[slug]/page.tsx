import PropertyDetail, {
  generateMetadata as baseMetadata,
  generateStaticParams as baseParams,
} from './PropertyDetail'

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
  return baseParams()
}

export async function generateMetadata(props: Parameters<typeof baseMetadata>[0]) {
  return baseMetadata(props)
}

export default function Page({ params }: { params: { slug: string } }) {
  return <PropertyDetail params={params} />
}
