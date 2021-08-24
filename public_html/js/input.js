let cc_input = {
    init: function() {        
        document.getElementById("close_result").addEventListener('click', cc_input.closeResultPopUp); 
        document.getElementById("complete_input_button").addEventListener('click', cc_input.openResultPopUp);
        document.getElementById("submit_play_button").addEventListener('click', cc_input.submitPlay);
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
    updateInputsAfterPost: function(down, dist) {                
        //clear inputs/update
        inputs = document.forms["inputPlayForm"].getElementsByTagName("input");
        
        let newYardline = inputs['new_yard_line'].value;

        for ( input in inputs ) { 
            console.log(inputs[input].name)
            if( inputs[input].name == 'down' ) {
                inputs[input].value = down;
            } else if( inputs[input].name == 'distance' ) {
                inputs[input].value = dist;
            } else if ( inputs[input].name == 'yardLine' ) {
                inputs[input].value = newYardline;
            }
            else {
                inputs[input].value = '';
            }
        }
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
            response.json().then(data => {
                console.log(data);
                cc_input.updateInputsAfterPost(data.data.down, data.data.dist);
                document.getElementById("result_pop_up").style.display = "none";
            });            
        }).catch(function(error) {
            console.log(error);
        });

    }
}

window.addEventListener("DOMContentLoaded", () => {
    cc_input.init();     
})