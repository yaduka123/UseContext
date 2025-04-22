import React, { useState } from 'react'
import { Card, Typography, ConfigProvider, theme as antdTheme } from 'antd'
import AppContext from './hook/AppContext'
import Component2 from './components/Component2'
import Greeting from './components/Greeting'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  const user = 'Yaduka Ghalley'
  const [language, setLanguage] = useState('en')

  const translations = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  }

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  const backgroundColor = isDarkMode ? '#144848' : '#fef3e7'
  const cardBackground = isDarkMode ? '#0d1117' : '#fad2e3'
  const textColor = isDarkMode ? '#f0f6fc' : '#000000'

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <AppContext.Provider
        value={{
          user,
          language,
          setLanguage,
          translations,
          isDarkMode,
          toggleTheme,
        }}
      >
        <div
          style={{
            minHeight: '100vh',
            backgroundColor: backgroundColor,
            transition: 'all 0.3s ease',
            paddingTop: 50,
          }}
        >
          <Card
            style={{
              width: '500px',
              margin: '0 auto',
              background: cardBackground,
              color: textColor,
            }}
          >
            <ThemeToggle />

            <Typography.Title level={1} style={{ color: textColor }}>
              {`Hello ${user}!`}
            </Typography.Title>
            <Component2 />
            <Greeting />
          </Card>
        </div>
      </AppContext.Provider>
    </ConfigProvider>
  )
}

export default App