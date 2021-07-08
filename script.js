document.getElementsByClassName('counter')[0].textContent = document.getElementsByClassName('rowMessage').length

for(var i=0; i<document.getElementsByClassName('poubelle').length; i++) {

    document.getElementsByClassName('poubelle')[i].addEventListener("click",
      function(){
        this.parentNode.remove()
        document.getElementsByClassName('counter')[0].textContent = document.getElementsByClassName('rowMessage').length


    }
        
    );
  }
