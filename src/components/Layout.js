import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <header></header>
            <main className='layout'>{children}</main>
            <footer></footer>
        </>
    )
}

export default Layout
