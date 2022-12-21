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
        id: ''
    },
    {
        nav: 'Hest Pay',
        eventkey: 2,
        id: ''
    },
     {
        nav: 'Hest Swap',
        eventkey: 3,
        id: ''
    },
    {
        nav: 'Hest Stake',
        eventkey: 4,
        id: ''
    },
    {
        nav: 'Roadmap',
        eventkey: 5,
        id: 'nav-navigation'
    },
     {
        nav: 'White Paper',
        eventkey: 6,
        id: 'nav-navigation'
    },
]

function Navigation() {
  return (
    <Nav
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    id='nav-navigation-nav'
    >
        <NavDropdown title='Products' id='nav-navigation' >
           {
            NAVIGATION.slice(0,4).map(navigation => {
                return(
                    <NavDropdown.Item key={navigation.eventkey} eventKey={navigation.eventkey} >{navigation.nav}</NavDropdown.Item>
                )
            })
           }
        </NavDropdown>        
            {
                NAVIGATION.slice(4,).map(navigation => {
                    return(
                        <Nav.Item key={navigation.eventkey}>
                        <Nav.Link eventKey={navigation.eventkey} id={navigation.id} >
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
                                <Nav.Link eventKey={navigation.eventkey} id='burger-nav-navigation' >{navigation.nav}</Nav.Link>
                                </Nav.Item>
                            )
                        })
                    }
                    <MyDivider />
                    {
                        NAVIGATION.slice(4,).map( navigation => {
                            return (
                                <Nav.Item key={navigation.eventkey}>
                                <Nav.Link eventKey={navigation.eventkey} id='burger-nav-navigation' >{navigation.nav}</Nav.Link>
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
