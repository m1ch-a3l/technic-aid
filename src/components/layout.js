import * as React from 'react'
import {Link} from 'gatsby'
import {container, heading,navLinks,navLinkItem,navLinkText} from './layout.module.css'


console.log('container: ', container)
const Layout = ({PageTitle,PageHeading, children}) => {
return (
            <main className = {container}>
                <title>{PageTitle}</title>
                <nav>
                    <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/"className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about"className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/contact"className={navLinkText}>Contact</Link></li>
                </ul>
                </nav>
                <h1 className={heading}>{PageHeading}</h1>
                {children}
            </main>

        )

}

export default Layout