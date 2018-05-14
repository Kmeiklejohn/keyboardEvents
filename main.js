let boxTop = 200;
let boxLeft = 200;




    document.addEventListener('keydown', (event) => {
      
            switch (event.key) {
              case "ArrowDown":
                
                boxTop += 10;
                document.getElementById("box").style.top = boxTop + "px"; 
            
                break;
              
              case "ArrowUp":
                
                boxTop -= 10;
                document.getElementById("box").style.top = boxTop + "px";
               
               
                break;
           
                case "ArrowLeft":

                boxLeft -= 10;
                document.getElementById("box").style.left = boxLeft + "px";
                break;
                
                case "ArrowRight":
                
                boxLeft += 10;
                document.getElementById("box").style.left = boxLeft + "px";

                 
                return;
                
            }
          
          
      
       
        })
        
    
 