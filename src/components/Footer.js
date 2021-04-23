import React from "react";
import "./Footer.css";
import { Button } from "./Button";

function Footer() {
	return (
		<div className='footer-container'>
			<section class='social-media'>
				<div class='social-media-wrap'>
					<div class='social-icons'>
						<a
							href='https://www.facebook.com/twhyal'
							class='social-icon-link facebook'
							target='_blank'
							aria-label='Facebook'>
							<i class='fab fa-facebook-f' />
						</a>
						<a
							href='https://www.instagram.com/lun.ty9/'
							class='social-icon-link instagram'
							target='_blank'
							aria-label='Instagram'>
							<i class='fab fa-instagram' />
						</a>
						<a
							href='https://twitter.com/twhyal'
							class='social-icon-link twitter'
							target='_blank'
							aria-label='Twitter'>
							<i class='fab fa-twitter' />
						</a>
						<a
							href='https://www.linkedin.com/in/yong-lun-tan-2650a9163/'
							class='social-icon-link linkedIn'
							target='_blank'
							aria-label='LinkedIn'>
							<i class='fab fa-linkedin' />
						</a>
					</div>
				</div>
			</section>
			<div>
				<small class='website-rights'>
					Copyright © {new Date().getFullYear()} Tan Yong Lun All Rights Reserved
				</small>
			</div>
		</div>
	);
}

export default Footer;
