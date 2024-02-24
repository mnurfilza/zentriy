import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { colors, Colors, extendTheme, VechaiProvider } from '@vechaiui/react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import MainLayout from '../layouts/MainLayout'
import ContextProvider from '../context'
import '../styles/globals.css'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

interface ColorScheme {
  id: string
  type: 'light' | 'dark'
  colors: {
    bg: {
      base: string // used for background
      fill: string // used for navbar, sidebar, header
    }
    text: {
      foreground: string // text primary
      muted: string // text secondary
    }
    primary: Colors
    neutral: Colors
  }
}
const cool: ColorScheme = {
  id: 'cool',
  type: 'dark',
  colors: {
    bg: {
      base: colors.coolGray['900'],
      fill: colors.coolGray['900'],
    },
    text: {
      foreground: colors.coolGray['100'],
      muted: colors.coolGray['300'],
    },
    primary: colors.cyan,
    neutral: colors.coolGray,
  },
}
// or custom default color scheme
const light: ColorScheme = {
  id: 'light',
  type: 'light',
  colors: {
    bg: {
      base: '#f9fafc',
      fill: colors.white['900'],
    },
    text: {
      foreground: colors.black['100'],
      muted: colors.gray['300'],
    },
    primary: colors.teal,
    neutral: colors.gray,
  },
}
// 3. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  cursor: 'pointer',
  colorSchemes: {
    light,
    cool,
  },
})

export type NextPageWithLayout = NextPage & {
  noLayout: Boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const ComponentLayout = () => {
    return Component.noLayout 
    ? (
      <Component {...pageProps} />
    ) : (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    )
  }

  return (
    <VechaiProvider theme={theme} colorScheme="light">
      <ContextProvider>
        <ComponentLayout />
      </ContextProvider>
    </VechaiProvider>
  )
}

export default MyApp
