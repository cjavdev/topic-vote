'use strict';

import { bootstrap } from 'angular2/bootstrap';
import { Component } from 'angular2/core';
import * as Rx from 'rx';
import { FirebaseService } from 'angular2-firebase/core';
import { Topic } from './topics';
import {provide} from 'angular2/core';
declare var Firebase: any;

@Component({
  selector: 'app',
  template: '<h1>Test</h1>'
})
class App {
    
}
var fb = new Firebase('https://reno-topics.firebaseio.com');
bootstrap(App);