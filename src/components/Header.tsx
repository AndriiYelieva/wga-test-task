import '../style/header.scss'

const links = ['HOME', 'SHOP', 'LOOKBOOK', 'FEATURES', 'PAGES', 'BLOG'];
const buttons = ['DISCOVER', 'SHOP NOW'];

export const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <a
          className="navigation__logo"
          href="/"
        />
        <ul className="navigation__links">
          {links.map(link => {
            return (
              <a
                target="_blank"
                className="navigation__links--link"
                key={link}
              >
                {link}
              </a>
            )
          })}
        </ul>
        <div className="navigation__icons">
          <button
            className="navigation__icon navigation__search"
            type="button"
          />
          <a
            className="navigation__icon navigation__favourites"
            href="/favourites"
          />
          <a
            className="navigation__icon navigation__basket"
            href="/basket"
          />
        </div>
      </nav>
      <section className="header__content">
        <div className="content">
          <p className="content__description">NEW TREND</p>
          <h1 className="content__title">COLLUSION</h1>
          <p className="content__description">An exclusive selection of this season's trends.</p>
          {buttons.map(button => {
            return (
              <button
                key={button}
                type="button"
                className="content__button"
              >
                {button}
              </button>
            )
          })}
        </div>
      </section>
    </header>
  );
};