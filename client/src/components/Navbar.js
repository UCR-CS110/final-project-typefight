import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	render() {
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
				<li>
					<a href="/register" className="navbar-link navbar-link-blue">
					Sign Up
					</a>
				</li>
				<li>
					<a href="/login" className="navbar-link navbar-link-blue">
					Log In
					</a>
				</li>
			</ul>
		</nav>
	)};
};

export default Navbar;