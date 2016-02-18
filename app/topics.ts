'use strict';

import { Component, Input } from 'angular2/core';

export interface ITopic {
  title: String;
}

export class Topic {
  title: String;
}

@Component({
  selector: 'topic',
  template: '<li>{{ topic | json }}</li>'
})
export class TopicComponent { 
  @Input() topic: Topic;
}

@Component({
  selector: 'topics',
  template: '<ul>{{topics.length}}<topic [topic]="topic" ngFor="#topic of topics"></topic></ul>',
  directives: [TopicComponent]
})
export class TopicsComponent {
  @Input() topics: Topic[];
}