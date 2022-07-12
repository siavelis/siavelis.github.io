import React, {useState} from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'

export const DarkModeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    return <div style={{lineHeight: '0.5rem'}}>
        <Toggle
            className='dark-mode-toggle'
            checked={isDark}
            onChange={({target}) => setIsDark(target.checked)}
            icons={{
                checked: wrapUnicode('🌙'),
                unchecked: wrapUnicode('🔆')
            }}
            aria-label='Dark mode toggle'
        />
    </div>
};

const wrapUnicode = (unicode) => (
    <div style={{lineHeight: '50%'}}
         dangerouslySetInnerHTML={{__html: unicode}}
    />
)