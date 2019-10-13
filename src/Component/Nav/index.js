import React from 'react';
import Logo from '../../css/img/super.jpg'
import perfil from '../../css/img/perfil.png'
function Nav() {
             return (
         
			<header className="header">
				<div className="logo-container">
					<a href="../1.7.0" className="logo">
						<img src={Logo} width="75" height="35" alt="Porto Admin" />
					</a>
					<div className="visible-xs toggle-sidebar-left" data-toggle-className="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
						<i className="fa fa-bars" aria-label="Toggle sidebar"></i>
					</div>
				</div>
			
			
				<div className="header-right">
			
					<form action="pages-search-results.html" className="search nav-form">
						<div className="input-group input-search">
							<input type="text" className="form-control" name="q" id="q" placeholder="Search..." />
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
							</span>
						</div>
					</form>
			
					<span className="separator"></span>
			
					<ul className="notifications">
					
			
						<li>
							<a href="#" className="dropdown-toggle notification-icon" data-toggle="dropdown">
								<i className="fa fa-bell"></i>
								<span className="badge">3</span>
							</a>
			
							<div className="dropdown-menu notification-menu">
								<div className="notification-title">
									<span className="pull-right label label-default">3</span>
									Alerts
								</div>
			
								<div className="content">
									<ul>
										<li>
											<a href="#" className="clearfix">
												<div className="image">
													<i className="fa fa-thumbs-down bg-danger"></i>
												</div>
												<span className="title">Server is Down!</span>
												<span className="message">Just now</span>
											</a>
										</li>
										<li>
											<a href="#" className="clearfix">
												<div className="image">
													<i className="fa fa-lock bg-warning"></i>
												</div>
												<span className="title">User Locked</span>
												<span className="message">15 minutes ago</span>
											</a>
										</li>
										<li>
											<a href="#" className="clearfix">
												<div className="image">
													<i className="fa fa-signal bg-success"></i>
												</div>
												<span className="title">Connection Restaured</span>
												<span className="message">10/10/2016</span>
											</a>
										</li>
									</ul>
			
									<hr />
			
									<div className="text-right">
										<a href="#" className="view-more">View All</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
			
					<span className="separator"></span>
			
					<div id="userbox" className="userbox">
						<a href="#" data-toggle="dropdown">
							<figure className="profile-picture">
								<img src={perfil} alt="Joseph Doe" className="img-circle" data-lock-picture="assets/images/!logged-user.jpg" />
							</figure>
							<div className="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
								<span className="name">Nilson Ospino</span>
								<span className="role">Developer</span>
							</div>
			
							<i className="fa custom-caret"></i>
						</a>
			
						<div className="dropdown-menu">
							<ul className="list-unstyled">
								<li className="divider"></li>
								<li>
									<a role="menuitem" tabindex="-1" href="pages-user-profile.html"><i className="fa fa-user"></i> My Profile</a>
								</li>
								<li>
									<a role="menuitem" tabindex="-1" href="#" data-lock-screen="true"><i className="fa fa-lock"></i> Lock Screen</a>
								</li>
								<li>
									<a role="menuitem" tabindex="-1" href="pages-signin.html"><i className="fa fa-power-off"></i> Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
		
			</header>
    );
  }

export default Nav;
