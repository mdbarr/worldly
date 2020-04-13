import { version } from '../package.json';

function State () {
  this.version = version;
}

export default new State();
