import {Component, Input} from '@angular/core';

import {Task} from '../model/task';

@Component({
    moduleId: module.id, //identifier to find this component
    selector:'app-card',
    templateUrl: 'card.component.html',//this can be a seperate html file like this templateUrl or an inline string for "template" like '<h1>blah</h1>'
    styleUrls:['card.component.css'] //an array, so that you could have more than one css file... 1 is probably sufficient
})
export class CardComponent {
    @Input() task: Task;

    statusToggle(){
        this.task.completed = !this.task.completed;  //ie setting it to the opposite of its current value
    }
}//so this component can be used in other components