//========================================
// Loading Logic
//========================================
const loadingDict = {
    0:"A",
    1:"B",
    2:"C",
    3:"D"
}

function animateLoading() {
    const loadingElements = document.getElementsByClassName("loading");

    if(loadingElements.length > 0) {
        for(i = 0; i < loadingElements.length; i++){
            if(!loadingElements[i].hidden) {
                if(loadingElements[i].innerText.split('').length <= 0){
                    loadingElements[i].innerText = loadingDict[0];
                }
                for(obj in loadingDict) {
                    if(loadingDict[obj] == loadingElements[i].innerText){
                        loadingElements[i].innerText = loadingDict[(Number(obj) + 1) % Object.keys(loadingDict).length];
                        break;
                    }
                }
            }
        }
    }
}
        

setInterval(animateLoading, 250);