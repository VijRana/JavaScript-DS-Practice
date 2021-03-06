'use strict';

function PriorityQueue(){
	var items= [];

	function QueueElement(element,priority){
      this.element= element;
      this.priority= priority;
	}
	 this.enqueue= function(){
	 	var queueElement=  new QueueElement(element,priority);
	 	if(this.isEmpty()){
           items.push(queueElement);
	 	}else{
	 		var added= false;
	 		for(var i=0;i<items.length;i++){
              if(queueElement.priority< items[i].priority){
                 items.splice(i,1);
                 added=true;
                 break;
              }
	 		}
	 		if(!added){
                items.push(queueElement);
	 		}
	 	}
	 }

}