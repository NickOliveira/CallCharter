let input = {
    init: function() {        
        document.getElementById("close_result").addEventListener('click', input.closeResultPopUp); 
        document.getElementById("complete_input_button").addEventListener('click', input.openResultPopUp);
        document.getElementById("submit_play_button").addEventListener('click', input.submitPlay);
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
    },
    //submit play to server
    submitPlay: async function(e) {        
        e.preventDefault()
        let data = {};
        let inputs = document.forms["inputPlayForm"].getElementsByTagName("input");
        for ( input in inputs ) {            
            data[inputs[input].name] = inputs[input].value
        }
       fetch('input/inputPlayCall', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(data)
        }).then(function(response) {
            inputs = document.forms["inputPlayForm"].getElementsByTagName("input");
            for ( input in inputs ) { 
                inputs[input].value = '';
            }
            document.getElementById("result_pop_up").style.display = "none";
        }).catch(function(error) {
            console.log(error);
        });

    }
}

window.addEventListener("DOMContentLoaded", () => {
    input.init();     
})