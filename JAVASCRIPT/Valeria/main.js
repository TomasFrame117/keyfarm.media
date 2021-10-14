const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
let = state ={}

function startGame() {
    state ={}
    showStoryText(1)
}

function showStoryText(textNodeIndex) {
    const textNode = setninger.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
        //skaper knapper fra HTML til a bli dynamiske 
    textNode.options.forEach(Option => {
        if (showOption(Option)) {
            const button = document.createElement('button')
            button.innerText = Option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(Option))
            optionButtonsElement.appendChild(button)
        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showStoryText(nextTextNodeId)
}
    //Aray of setninger in the stroy 
startGame()