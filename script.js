

// fonction qui s'occupe de mettre les diiferent élément JS de la page
var refresh = () => { 
  
    
 

    // compte le nombre de message dans la liste
    document.getElementsByClassName('counter')[0].textContent = document.getElementsByClassName('rowMessage').length
}


    for(var i=0; i<document.getElementsByClassName('poubelle').length; i++) {
    // Supprime le message et met a jour le compteur.
      document.getElementsByClassName('poubelle')[i].addEventListener("click",
        function(){
          this.parentNode.remove()
          document.getElementsByClassName('counter')[0].textContent = document.getElementsByClassName('rowMessage').length
        }   
     );
   }



// initialise la page
refresh();

var bar = () => {
  var mess = document.getElementsByClassName('rowMessage').length-1
  document.getElementsByClassName('rowMessage')[mess].setAttribute("class","row rowMessage lastrow")
  document.getElementsByClassName('rowMessage')[mess-1].setAttribute("class","row rowMessage")
  }
  bar();



// creation de nouveau message au click sur Add
document.getElementById('addmessage').addEventListener("click",
      function(){

        if (document.getElementById('inputtext').value!= "" ) {
          // test sur la console
          console.log('message reçu captain !!!')

          // création des nouveaux éléments (div,p,h4..)
          var newDiv = document.createElement("div");
          var avat = document.createElement("img");
          var newDiv1 = document.createElement("div");
          var nomAuthor = document.createElement("h6");
          var newP = document.createElement("p");
          var bin = document.createElement("img");

          //récupération du contenue du message et nom de l'auteur
          var saisie = document.getElementById('inputtext').value;
          var idAuthor = 'Ortelli Francois';

          // set attribut aux elements
          newDiv.setAttribute("class", "row rowMessage");
          avat.setAttribute("class", "avatar");
          avat.setAttribute("src", "/ressource/avatar-4.jpg");
          newDiv1.setAttribute("class", "textinfo");
          nomAuthor.textContent= idAuthor;
          newP.textContent= saisie;
          bin.setAttribute("class", "poubelle");
          bin.setAttribute("src", "/ressource/trash.png");

          // ajoute les element crées aux parents 
          document.body.appendChild(newDiv);
          newDiv.appendChild(avat)
          newDiv.appendChild(newDiv1)
          newDiv.appendChild(bin)
          newDiv1.appendChild(nomAuthor)
          newDiv1.appendChild(newP)

          bin.addEventListener("click",
          function(){
            this.parentNode.remove()
          })

          //je recompte les messages et set les poubelles
          refresh();
          bar();

          // clear le champs de saisie
          document.getElementById('inputtext').value = "";

          

      } else { 
        console.log("pas de message donc pas de post!")
        }
    } 
)
