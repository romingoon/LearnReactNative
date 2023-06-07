/**
 * @format
 */
//Prettier 와 관련되어 있음
// Prettier 를 사용할 때 --require-pragma라는 명령어 옵션을 설정하면 해당 키워드가 존재하는 파일만 처리

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
