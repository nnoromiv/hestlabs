import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { TelegramIcon, TwitterIcon, DiscordIcon } from './Icons'
import './styles/navigation.css'

function Navigation() {
  return (
    <Nav
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    id='nav-navigation-nav'
    >
        <NavDropdown title='Products' id='nav-navigation' >
            <NavDropdown.Item eventKey='1' >Hest Blockchain</NavDropdown.Item>
            <NavDropdown.Item eventKey='2'>Hest Pay</NavDropdown.Item>
            <NavDropdown.Item eventKey='3'>Hest Swap</NavDropdown.Item>
            <NavDropdown.Item eventKey='4'>Hest Stake</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
            <Nav.Link eventKey='5' id='nav-navigation' >Roadmap</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey='6' id='nav-navigation' >White Paper</Nav.Link>
        </Nav.Item>
    </Nav>
  )
}

export function LanguageChange() {
    return(
        <Nav
         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
         id='nav-languagechange-nav'
        >
        <NavDropdown title='Eng' id='nav-languagechange'>
            <NavDropdown.Item eventKey='7' >English</NavDropdown.Item>
            <NavDropdown.Item eventKey='8' >Chinese</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    )
}

const SOCIALS = [
    {
        name: 'twitter',
        src: `${TwitterIcon}`
    },
    {
        name: 'telegram',
        src: `${TelegramIcon}`
    },
    {
        name: 'discord',
        src: `${DiscordIcon}`
    }
]

export function Socials(){
    return (
        <div id='nav-socials' >
        {
        SOCIALS.map((social) => {
            return (
                <div className={social.name} key={social.name}>
                    <img srcSet='' alt={social.name} src={social.src} />
                </div>
            )
        })
        }
        </div>
    )
}

export default Navigation
