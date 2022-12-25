import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { TelegramIcon, TwitterIcon, DiscordIcon } from './Icons'
import './styles/navigation.css'
import {slide as Menu} from 'react-burger-menu'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MyLogo } from './HomepageComponents/Topbar'
import { MyDivider } from '../Partners'
import { cardHide, cardShow } from './BlockchainComponents/Cards'

const NAVIGATION = [
    {
        nav: 'Hest Blockchain',
        eventkey: 1,
        id: '',
        hrf:'blockchain-link'
    },
    {
        nav: 'Hest Pay',
        eventkey: 2,
        id: '',
        hrf: 'pay-link'
    },
     {
        nav: 'Hest Swap',
        eventkey: 3,
        id: '',
        hrf: 'swap-link'
    },
    {
        nav: 'Hest Stake',
        eventkey: 4,
        id: '',
        hrf: 'stake-link'
    },
    {
        nav: 'Roadmap',
        eventkey: 5,
        id: 'nav-navigation',
        hrf: ''
    },
     {
        nav: 'White Paper',
        eventkey: 6,
        id: 'nav-navigation',
        hrf: '/whitepaper'
    },
]

function Navigation() {
  return (
    <Nav id='nav-navigation-nav' >
        <NavDropdown title='Products' id='nav-navigation' >
           {
            NAVIGATION.slice(0,4).map(navigation => {
                return(
                    <NavDropdown.Item key={navigation.eventkey} 
                    eventKey={navigation.eventkey} href={`#${navigation.hrf}`}>
                    {navigation.nav}
                    </NavDropdown.Item>
                )
            })
           }
        </NavDropdown>        
            {
                NAVIGATION.slice(4,).map(navigation => {
                    return(
                        <Nav.Item key={navigation.eventkey}>
                        <Nav.Link eventKey={navigation.eventkey} id={navigation.id} href={navigation.hrf} >
                        {navigation.nav}
                        </Nav.Link>
                        </Nav.Item>
                    )
                })
            }        
    </Nav>
  )
}

/**
 * If the state is open, hide the overflow and hide the card. If the state is not open, show the
 * overflow and show the card.
 */
function isStateOpen(state){
if(state.isOpen){
    (document.body.style.overflow = 'hidden')
    cardHide()
}else if(!(state.isOpen)){
    (document.body.style.overflow = '')
    cardShow()
}
}

export function HamBurgerMenu(){
    return (
        <Menu width={ '100vw' } onStateChange={isStateOpen} right customBurgerIcon={ <MenuIcon />} customCrossIcon={ <CloseIcon />} >
            <Navbar>
                <Container id='container-burger-nav-navigation-nav'>
                    <Navbar.Brand href='#home'>
                        <MyLogo classname='logo hamlogo' />
                    </Navbar.Brand>
                    <Nav id='burger-nav-navigation-nav'>
                    {
                        NAVIGATION.slice(0,4).map( navigation => {
                            return (
                                <Nav.Item key={navigation.eventkey}>
                                <Nav.Link eventKey={navigation.eventkey} id='burger-nav-navigation' href={`#${navigation.hrf}`}>{navigation.nav}</Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                    <MyDivider />
                    {
                        NAVIGATION.slice(4,).map( navigation => {
                            return (
                                <Nav.Item key={navigation.eventkey}>
                                <Nav.Link eventKey={navigation.eventkey} id='burger-nav-navigation' href={navigation.hrf}>{navigation.nav}</Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                    </Nav>
                    <div id='social'>
                        <Socials />
                    </div>
                </Container>
            </Navbar>
        </Menu>
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
        src: `${TwitterIcon}`,
        hrf: 'https://twitter.com/hestlabs'
    },
    {
        name: 'telegram',
        src: `${TelegramIcon}`,
        hrf: 'https://t.me/hestlabs'
    },
    {
        name: 'discord',
        src: `${DiscordIcon}`,
        hrf: 'https://discord.gg/nzMRGq4k'
    }
]

export function Socials(){
    return (
        <div id='nav-socials' >
        {
        SOCIALS.map((social) => {
            return (
                <div className={social.name} key={social.name}>
                    <a href={social.hrf} >
                    <img srcSet='' alt={social.name} src={social.src} />  
                    </a>                                
                </div>
            )
        })
        }
        </div>
    )
}

export default Navigation
