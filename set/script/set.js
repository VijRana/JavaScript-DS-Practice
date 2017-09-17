'use strict';

/**
 * ECMSCRIPT 6 already have a Set class implementation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * We will try to copy  the same functionalities
 * @constructor
 */

 function set(){
     var items={};
     this.add=function(value){
       if(!this.has(value)){
            items[value]= value;
            return true;
       }
       return false;
     };
     this.remove= function(value){
         if(this.has(value)){
             delete items[value];
             return true;
         }
         return false;
     };
     this.has= function(value){
         return items.hasOwnProperty(value);
     };
     this.clear= function(){
        items={};
     };
     this.size= function(){
         return Object.keys(items).length;
     };
     this.getItems= function(){
         return items;
     };
     this.values = function(){
        return Object.keys(items);
    };
    this.union= function(otherSet){
        var unionSet= new Set();
        var values= this.values();
        for(var i=0;i< values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
     };
     this.intersection= function(otherSet){
       var intersectionSet=  new Set();
       var values= this.values();
       for(var i=0; i<values.length; i++){
          if(otherSet.has(values[i])){
            intersectionSet.add(values[i]);
          }
       }
       return intersectionSet;
    };
    this.difference = function(otherSet){
        var differenceSet = new Set(); //{1}

        var values = this.values();
        for (var i=0; i<values.length; i++){ //{2}
            if (!otherSet.has(values[i])){    //{3}
                differenceSet.add(values[i]); //{4}
            }
        }

        return differenceSet;
    };

    this.subset = function(otherSet){

        if (this.size() > otherSet.size()){ //{1}
            return false;
        } else {
            var values = this.values();
            for (var i=0; i<values.length; i++){ //{2}
                if (!otherSet.has(values[i])){    //{3}
                    return false; //{4}
                }
            }
            return true;
        }
    };
 
 }