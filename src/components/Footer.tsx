import classNames from 'classnames';
import '../style/footer.scss';

const location = 'https://www.google.com/maps?q=Comilla,+Bangladesh+3500&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzIyNmowajeoAgCwAgA&lr=(-lang_ru)&um=1&ie=UTF-8'
const links = [
  {
    name: 'facebook',
    link: "https://www.facebook.com/",
  },
  {
    name: 'instagram',
    link: "https://www.instagram.com/andrii_yelieva/",
  },
  {
    name: 'x',
    link: "https://twitter.com/",
  },
  {
    name: 'linkedin',
    link: "https://www.linkedin.com/in/andriiyelieva/",
  }
];

const shop = ['Shop', 'Collection', 'Outlet', 'Lookbook'];
const help = ['FAQ', 'Privecy Policy', 'Tearms and conditions', 'Return and Exchanges'];
const about = ['Journal', 'Our Story', 'Contact', 'Store Location'];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__contacts">
          <button
            className="footer__contacts--logo"
            type="button"
            onClick={scrollToTop}
            // href="/"
          />
          <p className="footer__contacts--title">
            We earned a reputation of being good at what we do.
            <br />
            Let us take your online shop to new dimension in success!
          </p>
          <a
            target="_blank"
            className="footer__contacts--wrapper"
            href={location}
          >
            <div className="footer__contacts--location" />
            <p className="footer__contacts--location-title">Comilla, Bangladesh 3500</p>
          </a>
          <div className="footer__contacts--communication">
            <a
              className="footer__contacts--communication-mail"
              href="mailto:kawsarahmed0210@gmail.com"
            >
              kawsarahmed0210@gmail.com
            </a>
            <a
              href="tel:+01647470457"
              className="footer__contacts--communication-phone"
            >
              01647470457
            </a>
          </div >
          <div className="footer__contacts--icons">
            {links.map(link => {
              return (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  className={classNames(
                    'footer__contacts--icon', `footer__contacts--${link.name}`,
                  )}
                />
              )
            })}
          </div>
        </div>
        <div className="footer__navigation">
          <h1
            className="footer__navigation--headline">
            RECIVE EMAIL UPDATES
          </h1>
          <div className="footer__navigation--email">
            <input
              className="footer__navigation--input"
              type="email"
              placeholder="Your Email Address"
            />
            <button
              className="footer__navigation--button"
              type="reset"
            >
              JOIN
            </button>
          </div>
          <div className="footer__navigation--links">
            <div className="footer__navigation--shop">
              <h2 className="footer__navigation--title">SHOP</h2>
              {shop.map(link => {
                return (
                  <a
                    className="footer__navigation--link"
                    target="_blank"
                    href=''
                  >
                    {link}
                  </a>
                )
              })}
            </div>
            <div className="footer__navigation--help">
              <h2 className="footer__navigation--title">HELP</h2>
              {help.map(link => {
                return (
                  <a
                    className="footer__navigation--link"
                    target="_blank"
                    href=''
                  >
                    {link}
                  </a>
                )
              })}
            </div>
            <div className="footer__navigation--about">
              <h2 className="footer__navigation--title">ABOUT</h2>
              {about.map(link => {
                return (
                  <a
                    className="footer__navigation--link"
                    target="_blank"
                    href=''
                  >
                    {link}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="footer__rights">
          <h4 className="footer__rights--title">Copyright © 2023. Your company name All rights reserved</h4>
        </div>
      </footer >
    </>
  )
};