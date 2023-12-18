import '../style/alone.scss';
import mask1 from '../images/mask/Mask1.png'
import mask2 from '../images/mask/Mask2.png'
import mask3 from '../images/mask/Mask3.png'

export const Alone = () => {
  return (
    <section className="alone">
      <h1 className="alone__title">AVONE STYLES</h1>
      <p className="alone__description">Choose Your Favorite Color</p>
      <div className="alone__wrapper">
        <img
          className="alone__main--photo"
          src={mask1}
          alt="girl"
        />
        <div className="alone__content">
          <img
            className="alone__mask3"
            src={mask3}
            alt="girl"
          />

          <div className="alone__fake" />
          <img
            className="alone__mask2"
            src={mask2}
            alt="girl"
          />
          <button
            className="alone__button"
            type="button"
          >
            SHOW WOMEN’S DRESS
          </button>
        </div>

      </div>
    </section>
  )
};
