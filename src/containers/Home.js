// Home.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.scss'; // Import your SCSS file

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1 className="home-title">{t("Welcome To HomePage")} </h1>
      <div className="home-content">
        <p className="home-paragraph">
          {t(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )}
        </p>

        <p className="home-paragraph">
          {t(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          )}
        </p>
      </div>
    </div>
  );
};

export default Home;
