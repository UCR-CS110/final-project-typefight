import { Component } from "react";
import "./Navbar.css";


class Navbar extends Component {

	logout(){
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		window.location.reload();
	}

	render() {
		let token = localStorage.getItem('token');
		let commentUsername = localStorage.getItem('username');
		let signin;
		let register;
		let signout;
		let prof;
		let user=localStorage.getItem('username');
		
		if(token!==undefined && token!==null){
			signout=<li>
						<button className="navbar-link navbar-link-blue" onClick={this.logout}>
						Signout
						</button>
					</li>;
			prof=<li>
				<a href={`/profile/${user}`} className="navbar-link navbar-link-blue">
						{user}
						</a>
			</li>
			signin=<div/>;
			register=<div/>;
		}
		else {
			signin=<li>
						<a href="/login" className="navbar-link navbar-link-blue">
						Log In
						</a>
					</li>;
			register=<li>
						<a href="/register" className="navbar-link navbar-link-blue">
						Sign Up
						</a>
					</li>;
			prof=<div />;
			signout=<div />;

		}
		return (
		<nav className="navbar">
			<ul className="navbar-items-left">
				<li>
					<a href="/" className="navbar-link navbar-link-blue">
					Home
					</a>
				</li>
				<li>
					<a href="/rankings" className="navbar-link navbar-link-blue">
					Rankings
					</a>
				</li>
				<li>
					<a href="/admin" className="navbar-link navbar-link-pink">
					{/* TODO: Display Admin button conditional based on if logged in account is admin.*/}
					Admin
					</a>
				</li>
			</ul>
			<ul className="navbar-items-right">
				{/* TODO: Display login/signup or profile image conditionally based on if user is signed in.*/}
				{signin}
				{register}
				{prof}
				{signout}
			</ul>
		</nav>
	)};
};

export default Navbar;