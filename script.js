const buttons = document.querySelectorAll("[data-mark]");

buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    checkMark(index, event);
  });
});

let filtro;

function checkMark(index, { target }) {
  target.innerText = "x";
  target.value = index;
  target.classList.add("x");
  target.disabled = true;

  function pcPlay() {
    const arrayButtons = Array.from(buttons);

    const buttonsDisabled = arrayButtons.map((item) => {
      if (!item.disabled) {
        return item;
      }
    });

    const filterDisabled = buttonsDisabled.filter((filter) => {
      return filter;
    });

    filtro = filterDisabled;

    const indexItem = Math.floor(
      Math.random() * (filterDisabled.length - 1) + 1
    );

    const removeMark = filterDisabled.splice(indexItem, 1);
    const removeMarkInArray = removeMark[0];
    const checkMarkInArray = arrayButtons.indexOf(removeMarkInArray);

    if (removeMarkInArray) {
      removeMarkInArray.disabled = true;

      filterDisabled.forEach((item) => {
        if (!item.disabled) {
          setTimeout(() => (removeMarkInArray.innerText = "o"), 100);
          removeMarkInArray.value = checkMarkInArray;
          removeMarkInArray.classList.add("O");
        }
      });
    }
  }

  pcPlay();
  verifyPlay();
}

function verifyPlay() {
  const result = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ];

  const checkForWin = (currentPlayer) => {
    return result.some((combination) => {
      return combination.every((index) => {
        return buttons[index].classList.contains(currentPlayer);
      });
    });
  };

  const xWin = checkForWin("x");
  const oWin = checkForWin("O");
}
