import './assest/css/main.css';
import './views/components/LoginForm';
import './views/components/Field';
import './views/components/Header';
import './views/components/ExhangeRates';

import registerRouting from './services/Router';
import { registerStore } from './store/Main';
import { registerWindowOptions } from './services/Helpers';

registerWindowOptions();
registerStore();
registerRouting();
