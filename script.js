function zeigeTab(tabName) {
      document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
      });

      document.getElementById(tabName).classList.add("active");
    }

    function berechneWiderstand() {
      let U = Number(document.getElementById("U").value);
      let R = Number(document.getElementById("R").value);

      if (R === 0) {
        document.getElementById("resultatWiderstand").innerText = "R darf nicht 0 Ω sein.";
        return;
      }

      let I = U / R;
      let P = U * I;

      document.getElementById("resultatWiderstand").innerText =
        "Strom I = " + I.toFixed(2) + " A\n" +
        "Leistung P = " + P.toFixed(2) + " W";
    }

    function berechneVolumen() {
      let d = Number(document.getElementById("d").value);
      let h = Number(document.getElementById("h").value);

      let r = d / 2;
      let volumen_mm3 = Math.PI * r * r * h;
      let volumen_liter = volumen_mm3 / 1000000;

      document.getElementById("resultatVolumen").innerText =
        "Volumen = " + volumen_mm3.toFixed(2) + " mm³\n" +
        "Volumen = " + volumen_liter.toFixed(3) + " Liter";
    }

    berechneWiderstand();
    berechneVolumen();