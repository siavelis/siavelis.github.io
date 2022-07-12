import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'

const darkModeFeatureEnabled = false;
export const DarkModeToggle = ({isDark, setIsDark}) => {
    if (!darkModeFeatureEnabled) {
        return null;
    }

    return <Toggle
        checked={isDark}
        onChange={({target}) => setIsDark(target.checked)}
        icons={{
            checked: wrapUnicode('🌙'),
            unchecked: wrapUnicode('🔆')
        }}
        aria-label='Dark mode toggle'
    />
};

const wrapUnicode = (unicode) => (
    <div style={{lineHeight: '50%'}}
         dangerouslySetInnerHTML={{__html: unicode}}
    />
)