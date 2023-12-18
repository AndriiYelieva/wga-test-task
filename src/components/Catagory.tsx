import '../style/category.scss';

import photo_man from '../images/category/2.jpg';
import photo_woman1 from '../images/category/3.jpg';
import photo_woman2 from '../images/category/4.png';
import photo_main from '../images/category/5.jpg';
import '../style/category.scss';

export const Catagory = () => {
  return (
    <section className="category">
      <div className="category__photos">
        <img
          className="category__photos--man"
          src={photo_man}
          alt="photo_man"
          height={286}
          width={550}
        />
        <div className="category__photos--wrapper">
          <img
            src={photo_woman1}
            alt="photo_woman1"
            height={260}
            width={260}
          />
          <img
            src={photo_woman2}
            alt="photo_woman2"
            height={260}
            width={260}
          />
        </div>
      </div>
      <div className="category__main">
        <img
          className="category__main--photo"
          src={photo_main}
          alt="photo_main"
        />
        <button
          className="category__main--button"
          type="button"
        >
          CATAGORY NAME
        </button>
      </div>
    </section>
  )
};
