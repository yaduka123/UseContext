// Greeting.js

import {Typography,Select} from 'antd'
import { useContext } from 'react'
import AppContext from '../Hook/AppContext'


const { Title } = Typography
const { Option }= Select

const Greeting = () => {
    const {user, language, setLanguage, translations } = useContext(AppContext)

    return (
    <>
    <Title level={1}>
        {translations[language]} {user}!
        </Title>
        <Select style={{width: 200 }} value={language} onChange={setLanguage}>
            <Option value='en'>English</Option>
            <Option value='es'>Spanish</Option>
            <Option value='fr'>French</Option>
            </Select>
            </>
            )
        }

        export default Greeting






