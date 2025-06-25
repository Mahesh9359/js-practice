const diceImg = document.getElementById("dice-img");
        let currentSet = "set1";

        function rollDice() {
            diceImg.classList.remove("animation");
            void diceImg.offsetWidth;
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            diceImg.src = `./icons/${currentSet}/dice (${randomNumber}).png`;
            diceImg.classList.add("animation");
        }

        function selectDiceSet(setName, selectedElement) {
            currentSet = setName;
            diceImg.src = `./icons/${setName}/dice (1).png`;

            const allOptions = document.querySelectorAll(".dice-option");
            allOptions.forEach(opt => opt.classList.remove("selected"));
            selectedElement.classList.add("selected");
        }