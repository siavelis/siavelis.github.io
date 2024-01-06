import React, {useEffect, useMemo, useState} from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import {DarkModeToggle} from './DarkModeToggle';
import {useMediaQuery} from 'react-responsive';

export const Page = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const systemPrefersDark = useMediaQuery(
        {
            query: '(prefers-color-scheme: dark)',
        },
        undefined,
    );
    const isDarkValue = useMemo(() => isDark === undefined
            ? !!systemPrefersDark
            : isDark,
        [isDark, systemPrefersDark])

    useEffect(() => {
        if (isDarkValue) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkValue]);

    return <div
        className={isDark ? 'bg-dark' : 'bg-light'}
        key={isDark ? 'dark-page' : 'light-page'}
    >
        <NavigationBar
            isDark={isDark}
            darkModeToggleComponent={
                <DarkModeToggle
                    isDark={isDark}
                    setIsDark={setIsDark}
                />}
        />
        {children}
        <Footer/>
    </div>
}

export default Page
