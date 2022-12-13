import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';

import { Approutes } from './routes/routes';

import { ResetCSS } from './global/styles/resetCSS';
import { THEME } from './global/styles/theme';


function App() {

  return (
  
    <ThemeProvider theme={THEME}>
      <ResetCSS/>
      <BrowserRouter>
       <Approutes/>
      </BrowserRouter>
     
    </ThemeProvider>
  )
}

export default App
