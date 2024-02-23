const hint = (text) => {
    const hintElement = document.getElementById('hint');

    hintElement.innerHTML = text;
    hintElement.classList.add('show');

    setTimeout(() => {
        hintElement.classList.remove('show');
    }, 2000)
}

export default hint