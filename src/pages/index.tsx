import Head from 'next/head'
import { Card, Text } from 'dd360-ds'
import { getAllPaths } from '../utils/readFile'
import Link from 'next/link'

type Props = {
    paths: string[]
}

export default function Home({ paths }: Props) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="px-10 py-6 max-w-7xl">
                <Text variant="h1" className="mb-6">
                    Pages
                </Text>
                <div className="grid grid-cols-2">
                    {paths.map((slug) => (
                        <Link key={slug} href={`/docs/${slug}`}>
                            <Card>{slug}</Card>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export function getStaticProps() {
    const { slugs: paths } = getAllPaths()
    return {
        props: {
            paths
        }
    }
}
