import './assest/css/main.css';
import './views/components/LoginForm';
import './views/components/Field';
import './views/components/Header';
import './views/components/ExchangeRates';
import './views/components/UserAccounts';
import './views/components/Dropdown';
import './views/components/AccountItem';
import './views/components/AccountList';

import { registerWindowOptions } from './services/Helpers';
import { registerStore } from './store/Main';
import registerRouting from './services/Router';

registerWindowOptions();
registerStore();
registerRouting();
