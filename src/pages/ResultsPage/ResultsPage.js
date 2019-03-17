'use-strict';

import React from 'react';
//import { connect } from 'react-redux'; 

import Map from './Map';
import WithMockApiData from './WithMockApiData';
import WeatherPoints from './WeatherPoints';
import Spinner from '../../components/Spinner/';

const ResultsPage = ({origin, destination, waypoints}) => {

  let outputJsx = (
    <React.Fragment>
      <p className="align-middle text-center text-3xl mt-32">
        Loading your trip <span role="img" aria-label="smile">😁</span>
      </p>
      <Spinner />
    </React.Fragment>
  )
  if (waypoints) {
    outputJsx = (
      <div id='results' className='text-center h-full'>
        <div className='mt-1 mb-1 p-1'>
          <h1 className='mb-1'>Heres the weather for the trip</h1>
          <p>Starting in {origin} and finishing in {destination}</p>
        </div>
        <div className="flex flex-row h-full">
          <div className="w-full h-full">
            <Map waypoints={waypoints} />
          </div>
          <div className="h-full overflow-scroll w-half">
            <WeatherPoints waypoints={waypoints} />
          </div>
        </div>
      </div>
    )
  } 

  return outputJsx;
}

/*
const mapStateToProps = (state, props) =>
({
  origin: state.origin,
  destination: state.destination,
  waypoints: state.waypoints
})

export default connect(mapStateToProps)(ResultsPage);
*/
export default WithMockApiData(ResultsPage);
