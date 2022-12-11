import {ThemeProvider} from 'styled-components';
import { ResetCSS } from './global/styles/resetCSS';
import { THEME } from './global/styles/theme';
function App() {

  return (
  
    <ThemeProvider theme={THEME}>
    <ResetCSS/>
     <h1>Hello</h1>
     </ThemeProvider>
  )
}

export default App
