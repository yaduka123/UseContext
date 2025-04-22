import React, { useContext } from 'react'
import { Space, Switch } from 'antd'
import AppContext from '../hook/AppContext'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(AppContext)

  return (
    <Space direction="vertical">
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        checkedChildren="Dark Mode"
        unCheckedChildren="Light Mode"
      />
    </Space>
  )
}

export default ThemeToggle