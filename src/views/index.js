import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Register from './Register';


const Routes = () => {
    return(
    <Router>
      <div style={{display:"flex",justifyContent:"center"}}>
        <Route exact path={`/`} component={Register} />
      </div>
    </Router>
  )};
  
  export default Routes;