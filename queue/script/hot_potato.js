
function hotPotato(nameList,num){
  var queue=  new Queue();
  for(var i=0; i<nameList.length; i++){
     queue.enqueue(nameList[i]);
  }
   
   var eliminated ='';
   while(queue.size()>1){
      for(var j=0; j<num; j++){
         queue.enqueue(queue.dequeue());
      }
      eliminated= queue.dequeue();
      document.write(eliminated +': was eliminated from the Hot Poatato Game' +'\n');
   }
   return queue.dequeue();

}

 var names = ['John','Jack','Camila','Ingrid','Carl'];
 var winner= hotPotato(names,7);

 document.write('The Winner is:' +winner);