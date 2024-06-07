      // Hämta knappar och modalelement
      var memberBtns = document.getElementsByClassName("member-btn");
      var modal = document.getElementById("rulesModal");
      var closeBtn = document.getElementsByClassName("close")[0];
      var continueBtn = document.getElementById("continueBtn");

      // Funktion för att öppna modalen och navigera
      function openModalAndNavigate(url) {
          modal.style.display = "block";
          setTimeout(function() {
              window.location.href = url;
          }, ); // Vänta 3 sekunder innan navigering
      }

      // Lägg till klickhändelser för knappar
      for (var i = 0; i < memberBtns.length; i++) {
          memberBtns[i].onclick = function() {
              var url = this.href;
              openModalAndNavigate(url);
              return false; // Förhindra standardbeteende för länken
          }
      }

      // Stäng modalen när krysset eller fortsätt-knappen klickas
      closeBtn.onclick = function() {
          modal.style.display = "none";
      }
      continueBtn.onclick = function() {
          modal.style.display = "none";
      }

      // Stäng modalen när användaren klickar utanför
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }