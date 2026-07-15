import raf from './polyfills/raf';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// jsdom's test environment doesn't expose the Web Crypto API that uuid v14 relies on.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { webcrypto } = require('crypto');
// @ts-ignore
if (!global.crypto) global.crypto = webcrypto;

// @ts-ignore
configure({ adapter: new Adapter() });
