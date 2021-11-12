import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (<div>
    <p> hey</p>
  <Component {...pageProps} />
    </div>)
}

export default MyApp
