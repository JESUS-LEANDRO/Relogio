let campo = document.querySelector('.digital');
        let campoS = document.querySelector('.p_s');
        let campoM = document.querySelector('.p_m');
        let campoH = document.querySelector('.p_h');

        function updateClock() {
            let now = new Date();
            let segundos = now.getSeconds();
            let minutos = now.getMinutes();
            let horas = now.getHours();

            campo.innerHTML = `${fixZero(horas)}:${fixZero(minutos)}:${fixZero(segundos)}`;

            let sDeg = (360 / 60) * segundos - 90;
            let mDeg = (360 / 60) * minutos - 90;
            let hDeg = (360 / 12) * horas - 90;

            campoS.style.transform = `rotate(${sDeg}deg)`;
            campoM.style.transform = `rotate(${mDeg}deg)`;
            campoH.style.transform = `rotate(${hDeg}deg)`;
        }

        /* function fixZero(time) {
             if (time < 10){
                 return "0"+time;
             } else {
                return time;
             }
           }*/
        // function fixZero == simplificada

        function fixZero(time) { return time < 10 ? "0" + time : time }
        setInterval(updateClock, 1000);
        updateClock();