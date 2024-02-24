import { AppContext } from 'next/app'
import App from './home';
import React from 'react';

function Home(props: any) {
  return (
    <React.Fragment>
      <App {...props} />
    </React.Fragment>
  );
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  }
}

export default Home;
