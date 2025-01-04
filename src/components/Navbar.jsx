import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	return (
		<nav
			className={`${styles.paddingX} w-full h-[70px] flex items-center fixed top-0 z-20 bg-primary`}
		>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src="https://i.ibb.co/tDWC10j/Whats-App-Image-2025-01-04-at-00-46-02-removebg-preview.png"
						alt='Logo de Marouane'
						className='w-[160px] h-auto object-contain'
					/>
					<p className='text-secondary text-[18px] font-bold cursor-pointer flex'>
						Full Stack Developer &nbsp;
						<span className='sm:block hidden'>| &nbsp;Marouane Hajjouj </span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === `/${link.desktop}`
									? "text-white"
									: "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.desktop)}
						>
							<Link to={link.desktop}>{link.title}</Link>
						</li>
					))}
				</ul>
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='Menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className='list-none flex flex-col justify-end items-start gap-4'>
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === `/${link.desktop}`
											? "text-white"
											: "text-secondary"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.desktop);
									}}
								>
									<Link to={link.desktop}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
