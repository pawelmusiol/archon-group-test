import React, { useEffect, useRef, } from "react";
import { Link } from "."
import Logo from "../images/logo-archon.png"
import Menu from "../images/menu.svg"


const menuData = {
    left: [
        {
            name: "Panel Klienta",
            to: "/panel-klienta"
        },
        {
            name: "+48 606 220 100",
            to: "tel:+48 606 220 100"
        }
    ],
    right: [
        {
            name: "Strona Główna",
            to: "/"
        },
        {
            name: "Usługi",
            to: "#",
            content: [
                {
                    name: "Biuro Rachunkowe",
                    to: "/uslugi/biuro-rachunkowe"
                },
                {
                    name: "Ubezpieczenia",
                    to: "/uslugi/ubezpieczenia"
                },
                {
                    name: "Media",
                    to: "/uslugi/media"
                },
                {
                    name: "Finanse",
                    to: "/uslugi/finanse"
                }
            ]
        },
        {
            name: "Galeria",
            to: "/galeria"
        },
        {
            name: "Kontakt",
            to: "/kontakt"
        },
    ]
}

const mapLinks = (link) => {
    if (link.content) {
        return (
            <div className="link-w-children">
                <Link to={link.to}>{link.name}</Link>
                <div className="children-links">
                    {/*<div className="children-links-inner">*/}
                    {link.content.map(subLink => <Link to={subLink.to}>{subLink.name}</Link>)}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
    else {
        return <Link to={link.to}>{link.name}</Link>
    }
}
/**
 * 
 * @param {React.MutableRefObject<HTMLDivElement>} topRef 
 */
const changeClassOnScroll = (topRef) => {
    if (topRef.current) {
        if (window.pageYOffset >= window.innerHeight * 0.54) {
            if (topRef.current.className !== 'scrolled') {
                topRef.current.className = 'scrolled'
            }
        }
        else {
            if (topRef.current.className !== '') {
                topRef.current.className = ''
            }
        }
    }
}
/**
 * 
 * @param {React.MutableRefObject<HTMLDivElement>} leftRef 
 * @param {React.MutableRefObject<HTMLDivElement>} rightRef 
 */
const showMenu = (leftRef,rightRef) => {
    if (rightRef.current && leftRef.current) {
        if(rightRef.current.classList.contains("right-open")){
            rightRef.current.classList.remove("right-open");
            leftRef.current.classList.remove("scrolled");
        }
        else{
            rightRef.current.classList.add("right-open");
            leftRef.current.classList.add("scrolled");
        }
    }
}

const TopMenu = () => {
    const topRef = useRef()
    const rightRef = useRef()
    const leftRef = useRef()
    useEffect(() => {
        document.addEventListener('scroll', () => changeClassOnScroll(topRef))
        //document.addEventListener('touchmove', () => changeClassOnScroll(topRef))
        if (rightRef.current) {
            rightRef.current.classList.remove("right-open");
        }
    }, [])

    const navLeft = menuData.left.map(link => <Link to={link.to}>{link.name}</Link>)
    const navRight = menuData.right.map((link) => mapLinks(link))
    return (
        <div>
            <header>
                <nav ref={topRef}>
                    <div className="left" ref={leftRef}>
                        {navLeft}
                    </div>
                    <img src={Menu} className="menu-icon" onClick={() => showMenu(leftRef, rightRef)} />

                    {/*<div className="logo-div">
                        <img src={Logo} className="logo-top"/>
    </div>*/}
                    <div className="right right-open" ref={rightRef}>
                        {navRight}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default TopMenu