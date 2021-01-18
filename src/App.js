import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import GlobalStyle from './styles/globalStyles';
import ProfileCard from './components/ProfileComponents/ProfileCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <ProfileCard />
    </>
  );
}

export default App;
