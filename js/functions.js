var turno = false, contador = 0;

        function bloqueo(){
          var botones = document.querySelectorAll("input[type='button']");
          for (let i = 0; i < botones.length; i++) {
            botones[i].disabled = true;
                        
          }
        }

        function cambiarTurno(btn){
            btn.disabled = true;

            if (turno == false) {
                btn.value = "X";               
            } else {
                btn.value = "O";              
            }
            turno = !turno; 
            verificar();
            
        }

        function verificar(){

            var estilo = document.createElement('style');


            if (++contador == 9) {
                document.getElementById("Ganador").innerHTML="Empate";
            }

            var botones = document.querySelectorAll("input[type='button']");
            if (botones[0].value == botones[1].value && botones[1].value == botones[2].value &&
                botones[0].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[0].value;
                bloqueo();
                estilo.textContent = `tr:nth-child(1)::after {
                                      content: "";
                                      position: absolute;
                                      top: 50%;
                                      left: 0;
                                      right: 0;
                                      height: 5px;
                                      background-color: blue;
                                      z-index: 1;
                                      pointer-events: none;
        }
        }`;
            }


            if (botones[3].value == botones[4].value && botones[4].value == botones[5].value &&
                botones[3].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[3].value;
                bloqueo();
                estilo.textContent = `tr:nth-child(2)::after {
                                      content: "";
                                      position: absolute;
                                      top: 50%;
                                      left: 0;
                                      right: 0;
                                      height: 5px;
                                      background-color: blue;
                                      z-index: 1;
                                      pointer-events: none;
        }
        }`;
            }


            if (botones[6].value == botones[7].value && botones[7].value == botones[8].value &&
                botones[6].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[6].value;
                bloqueo();
                estilo.textContent = `tr:nth-child(3)::after {
                                      content: "";
                                      position: absolute;
                                      top: 50%;
                                      left: 0;
                                      right: 0;
                                      height: 5px;
                                      background-color: blue;
                                      z-index: 1;
                                      pointer-events: none;
        }
        }`;
            }

            if (botones[0].value == botones[3].value && botones[3].value == botones[6].value &&
                botones[0].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[0].value;
                bloqueo();
                estilo.textContent = `td:nth-child(1)::after{
                                      content: "";
                                      position: absolute;
                                      top: -1px;
                                      bottom: -1px;
                                      left: 50%;
                                       width: 5px;
                                      background-color: blue;
                                      z-index: 1;
                                      pointer-events: none;
        }`;
            }

            if (botones[1].value == botones[4].value && botones[4].value == botones[7].value &&
                botones[1].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[1].value;
                bloqueo();
                estilo.textContent = `td:nth-child(2)::after{
                                      content: "";
                                      position: absolute;
                                      top: -1px;
                                      bottom: -1px;
                                      left: 50%;
                                      width: 5px;
                                      background-color: blue;
                                      z-index: 1;
                                      pointer-events: none;
        }`;
            }

            if (botones[2].value == botones[5].value && botones[5].value == botones[8].value &&
                botones[2].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[2].value;
                bloqueo();
                estilo.textContent = `td:nth-child(3)::after{
                                      content: "";
                                      position: absolute;
                                      top: -1px;
                                      bottom: -1px;
                                      left: 50%;
                                      width: 5px;
                                      background-color: blue;
                                      z-index: 1;
                                      pointer-events: none;
        }`;
            }

            if (botones[0].value == botones[4].value && botones[4].value == botones[8].value &&
                botones[0].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[0].value;
                bloqueo();
                estilo.textContent = `table::after{
                                        content: "";
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        width: calc(100% * 1.4);
                                        height: calc(100% * 1.4);
                                        border-top: 5px solid blue;
                                        transform: rotate(45deg);
                                        transform-origin: top left;
                                        z-index: 1;
                                        pointer-events: none;
                                    }`;
            }

            if (botones[2].value == botones[4].value && botones[4].value == botones[6].value &&
                botones[2].value !=""
            ) {
                document.getElementById("Ganador").innerHTML="Ganador"+ " " +botones[2].value;
                bloqueo();
                estilo.textContent = `table::after{
                                        content: "";
                                        position: absolute;
                                        top: 0;
                                        right: 0;
                                        width: calc(100% * 1.4);
                                        height: calc(100% * 1.4);
                                        border-top: 5px solid blue;
                                        transform: rotate(-45deg);
                                        transform-origin: top right;
                                        z-index: 1;
                                        pointer-events: none;
                                    }`;
            } 

            document.head.appendChild(estilo);
        }
