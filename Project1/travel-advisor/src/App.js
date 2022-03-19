import React, { createFactory } from "react";
import { CssBaseline, Grid } from '@material-ui/core'
import Header from "./components/Header/Header";
import Lists from "./components/Lists/Lists";
import Map from "./components/Map/Map";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";


const App = () => {
  return (
    <>
      <CssBaseline />
      <Header /*onPlaceChanged={onPlaceChanged} onLoad={onLoad}*/ />
      <Grid container spacing={3} style={{ width: '100%' }}>

        <Grid item xs={12} md={4}>
          <Lists />
        </Grid>


        <Grid item xs={12} md={8}>
          <Map />
        </Grid>


      </Grid>
    </>
  );
}
export default App;



/*

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
*/
