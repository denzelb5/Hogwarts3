const printToDom = (toPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = toPrint;
};

export default { printToDom };
