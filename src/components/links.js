import React from "react"
import { Link, Section } from "."
import { useLocation } from "@reach/router"

const checkForLocation = ( to, location, prefix) => {
    if (prefix && (prefix + to) === location.pathname) {
        return "active"
    }
    else if (to === location.pathname) {
        return "active"
    }
    return ""
}

const checkForLocationLocal = (current, name) => {
    if (current === name) {
        return "active"
    }
    return ""
}

const Links = ({ links, prefix, onClick, current }) => {
    let location = useLocation()
    console.log(location)
    let children = []
    if (!onClick) {
        children = links.map((link, key) => {
            if (prefix) {
                return <Link key={key} className={checkForLocation(link.to, location)} to={prefix + link.to}>{link.name}</Link>
            }
            else {
                return <Link key={key} className={checkForLocation(link.to, location)} to={link.to}>{link.name}</Link>
            }
        })
    }
    else{
        children = links.map((link, key) => {
            return <Link to="none" className={checkForLocationLocal(current, link.name)} onClick={() => onClick(link.name)}>{link.name}</Link>
        })
    }

    return (
        <Section className="links" row>
            {children}
            
        </Section>
    )
}

export default Links
