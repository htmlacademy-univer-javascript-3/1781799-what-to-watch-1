import {
  FC,
  useState,
} from 'react';
import { Tab } from '../../types/tab.enum';
import { Film } from '../../pages/main/main.models';
import { OverviewTab } from './overview-tab';
import { DetailsTab } from './details-tab';
import { ReviewsTab } from './reviews-tab';

type Props = {
  film: Film;
};

export const Tabs: FC<Props> = (props) => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Overview);

  const renderTabByType = () => {
    switch (activeTab) {
      case Tab.Reviews:
        return <ReviewsTab />;
      case Tab.Details:
        return <DetailsTab film={props.film}/>;
      default:
        return <OverviewTab film={props.film}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === Tab.Overview ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.Overview)}>Overview</span>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.Details ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.Details)}>Details</span>
          </li>
          <li className={`film-nav__item ${activeTab === Tab.Reviews ? 'film-nav__item--active' : ''}`}>
            <span className="film-nav__link" onClick={() => setActiveTab(Tab.Reviews)}>Reviews</span>
          </li>
        </ul>
      </nav>
      {renderTabByType()}
    </div>
  );
};
