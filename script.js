const buttons = document.querySelectorAll("[data-mark]");

buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    checkMark(index, event);
  });
});

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
}
