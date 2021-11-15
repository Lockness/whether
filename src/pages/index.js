import Head from 'next/head'
import Layout from '../components/Layout'
import WhetherInput from '../modules/places_input/WhetherInput'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl my-52">Whether</h1>
      <WhetherInput label="Origin" />
      <WhetherInput label="Destination" />
    </Layout>
  )
}
