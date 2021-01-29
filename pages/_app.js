import '../src/styles/globals.scss'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme } from '../src/theming/mui-theme'
import { DarkMode } from '../src/theming/mui-theme-dark-mode'
import { useCallback, useEffect, useState } from 'react'
import { AppBarWrapper } from '../src/components/app-bar'

const importColorVars = (path) => {
  if (path === '/no-dark-mode') {
    import('../src/scss/colors-light.scss')
    return
  }

  import('../src/scss/colors-light.scss')
  import('../src/scss/colors-dark.scss')
}

const getMuiTheme = (path) => {
  if (path === '/no-dark-mode' || path === '/css-vars') {
    return DarkMode
  }
  return Theme
}

function MyApp({ Component, pageProps, router }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { asPath } = router
  
  console.log(router)
  
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
        <link rel="icon" href={isDarkMode ? "static/favicon-mond.ico" : "static/favicon-sonne.ico"} />
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
