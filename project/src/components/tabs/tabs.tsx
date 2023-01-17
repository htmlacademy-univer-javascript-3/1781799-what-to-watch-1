import { FC, useState } from 'react';
import { reviews } from '../../mocks/reviews';
import { Tab } from '../../types/tab.enum';
import { Film } from '../../pages/main/main.models';
import { OverviewTab } from './overview-tab';
import { DetailsTab } from './details-tab';
import { ReviewsTab } from './reviews-tab';

type Props = {
  film: Film;
};

export const Tabs: FC<Props> = (props) => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);

  const renderTabByType = () => {
    switch (activeTab) {
      case Tab.DETAILS:
        return <DetailsTab film={props.film}/>;
      case Tab.REVIEWS:
        return <ReviewsTab reviews={reviews}/>;
      default:
        return <OverviewTab film={props.film}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === Tab.OVERVIEW ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.OVERVIEW)}>Overview</span>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.DETAILS ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.DETAILS)}>Details</span>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.REVIEWS ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.REVIEWS)}>Reviews</span>
          </li>
        </ul>
      </nav>
      {renderTabByType()}
    </div>
  );
};
