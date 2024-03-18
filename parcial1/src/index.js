import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {IntlProvider} from 'react-intl';

import reportWebVitals from './reportWebVitals'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Locales
import localeEsMessages from './locales/es'
import localeEnMessages from './locales/en'

// Comprobación uso de español
let isSpanish = navigator.language.startsWith('es')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <IntlProvider
      locale={isSpanish ? 'es-ES' : 'en-US'}
      messages={isSpanish ? localeEsMessages : localeEnMessages}
    >
      <App />
    </IntlProvider>
  </React.StrictMode>
)

// Uso de i18n
// ReactDOM.render(
//   <IntlProvider locale={isSpanish ? "es-ES": "en-US"} messages= {isSpanish? localeEsMessages: localeEnMessages}>
//           <JobsList/>
//   </IntlProvider>, document.getElementById("root")
// );

reportWebVitals()
