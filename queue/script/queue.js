//'use strict';

function Queue(){
	
	var item=[];
	
	this.enqueue= function(element){
      item.push(element);
	};

	this.dequeue= function(){
    return item.shift();
	};
    
    this.front= function(){
    	return item[0];
    };
   this.isEmpty= function(){
       return item.length==0;
   };
   this.clear= function(){
   item= [];
   };
   this.size= function(){
    return item.length;
   };
   this.print= function(){
    console.log(item.toString());
   };
   
}
