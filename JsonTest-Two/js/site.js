$(document).ready(
    function(){
       $.getJSON(
          './json.php',
          function(data){
             // ciclo l'array
             for(i=0; i<data.length; i++){
                var  content  = '<li>';
                    content +=  data[i].fname + ' ' + data[i].lname;
                    content  += '<br />';
                    content +=  data[i].number;
                    content += '</li>';
  
                $('ul.rubrica').append(content);
             }
  
          }
       );
    }
 ); 



 fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))