import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//Chakra UIのChakraProviderを利用できるようにする
import { ChakraProvider } from "@chakra-ui/react";

//作成したChakraUIのthemeをimport
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} reactCSS={false} >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
