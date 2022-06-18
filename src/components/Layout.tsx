import React from 'react'

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <header></header>
            <main className='layout'>{props.children}</main>
            <footer></footer>
        </>
    )
}

export default Layout
