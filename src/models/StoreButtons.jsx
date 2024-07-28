import React from 'react';
import '../styles/style.scss'; // Ensure you import the stylesheet

const StoreButtons = ({
  storeBtn,
  google,
  apple
}) => {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.example.app';
  const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';

  return (
    <div className={storeBtn}>
      {/* Google Play Store Button */}
      <a href={googlePlayUrl} title="Google Play Store Button" >
        <img 
          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
          alt="Google Play Store" className={google}
        />
      </a>

      {/* Apple App Store Button */}
      <a href={iOSUrl} title="iOS Store Button">
        <img 
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
          alt="Apple Store" className={apple}
        />
      </a>
    </div>
  );
};

export default StoreButtons;
