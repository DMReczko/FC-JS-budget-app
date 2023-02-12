export const createBtn = (text, classList, onclickFunc) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.classList.add(classList);
    btn.addEventListener("click", onclickFunc);
    return btn;
};
