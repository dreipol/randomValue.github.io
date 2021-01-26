import '../styles/globals.scss'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme } from '../theming/mui-theme'
import { useEffect, useState } from 'react'
import { AppBarWrapper } from '../components/app-bar'

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(
      '#jss-server-side',
    )
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : '',
    )
  }, [isDarkMode])
  return (
    <>
      <Head>
        <title>A short story about dark / light mode</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={Theme()}>
        <CssBaseline />
        <AppBarWrapper toggleDarkMode={toggleDarkMode} />
        <Component isDarkMode={isDarkMode} {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
