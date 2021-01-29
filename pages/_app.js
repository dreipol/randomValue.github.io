import '../styles/globals.scss'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme as DefaultTheme } from '../theming/mui-theme'
import { Theme as NoDarkModeTheme } from '../theming/mui-theme-no-dark-mode'
import { useCallback, useEffect, useState } from 'react'
import { AppBarWrapper } from '../components/app-bar'

const importColorVars = (path) => {
  if (path === '/no-dark-mode') {
    import('../scss/colors-light.scss')
    return
  }

  import('../scss/colors-light.scss')
  import('../scss/colors-dark.scss')
}

const getMuiTheme = (path) => {
  if (path === '/no-dark-mode' || path === '/css-vars') {
    return NoDarkModeTheme
  }

  return DefaultTheme
}

function MyApp({ Component, pageProps, router }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { asPath } = router

  useEffect(() => {
    importColorVars(asPath)
  }, [asPath])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(
      '#jss-server-side',
    )
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const Theme = useCallback(getMuiTheme(asPath), [asPath])

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
      <ThemeProvider theme={Theme(isDarkMode)}>
        <CssBaseline />
        <AppBarWrapper toggleDarkMode={toggleDarkMode} />
        <Component isDarkMode={isDarkMode} {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
