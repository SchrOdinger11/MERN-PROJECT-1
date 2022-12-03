import logo from './logo.svg';
import './App.css';
import makeStyles from './styles.js';
import "./styles.css";
import Student from './components/showstudent/showstudent.js';
import Create from './components/createstudent/createstudent.js';
import {Container, AppBar, Typography, Grow, Grid}from '@material-ui/core';
function App() {
  return (
    <div className="App">
     
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Container maxWidth="lg">
        {/* lassName={classes.appBar} */}
          <AppBar className={makeStyles.appBar}
          position="static" color="inherit">
          
            <Typography className="App-header" variant="h2" align="center">Student create and Show</Typography>
            {/* className={classes.heading} */}
            
          </AppBar>
          <Grow in>
          <Container>
          <Grid container justify='space-between' alignItems='strect'>
            <Grid item xs={12} sm={7}>
          
          {/* table */}
          <AppBar className={makeStyles.appBar} position="static" color="inherit">
          
          {/*  */}
          <Student/>



          </AppBar>

            </Grid>

            <Grid item xs={12} sm={4}>
              
            {/* form */}
            {/* */}
            <AppBar className={makeStyles.appBar}   position="static" color="inherit">
            
          <Create/>
         
          </AppBar>
              </Grid>

          </Grid>

          </Container>

          </Grow>
        </Container>
      
    </div>
  );
}

export default App;
