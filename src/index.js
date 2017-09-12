import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AllTime from './components/AllTime'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav, NavItem,Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'



ReactDOM.render(
	<Router path="/30day">
					<div>
						<Navbar>
							<Navbar.Header>
								<Navbar.Brand>
									Gus Richardson <FontAwesome name="free-code-camp" size="1x"/>
								</Navbar.Brand>
							</Navbar.Header>
						</Navbar>
						<div style={{justifyContent:"center", alignItems:"center", display:"flex", marginTop:"20px"}}>
							<Link to="/30day"><Button style={{marginRight:"5px"}} bsStyle="primary" bsSize="large">30 Days</Button></Link>
							<Link to="/alltime"><Button bsStyle="danger" bsSize="large">All-Time</Button></Link>
						</div>
						<div style={{margin:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>
							<div style={{justifyContent:"center", alignItems:"center"}}>
							<Route key="1"path="/30day" component={App} />
							<Route key="2"path="/alltime" component={AllTime}/>
							</div>
						</div>
						<div style={{bottom:'0'}}>

						<footer className="navbar-fixed-bottom" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>

							<p><a href="https://github.com/gusr27/camperPro" target="_blank"><FontAwesome className="super-crazy-colors"name="github" size="4x" /></a></p>
						</footer>
						</div>
					</div>
	</Router>, document.getElementById('root'))
