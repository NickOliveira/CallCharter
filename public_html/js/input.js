let input = {
    init: function() {        
        document.getElementById("close_result").addEventListener('click', input.closeResultPopUp); 
        document.getElementById("complete_input_button").addEventListener('click', input.openResultPopUp);
    },
    //close result pop up window
    closeResultPopUp: function (e) {  
        e.preventDefault()      
        document.getElementById("result_pop_up").style.display = "none";
    },
    //open result pop up window
    openResultPopUp: function(e) {
        e.preventDefault()
        document.getElementById("result_pop_up").style.display = "block";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    input.init();     
})