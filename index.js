$(document).ready(function() {

    var quizData = [];

    function renderQuizQuestion(data) {
        // <section>
        //     <h3>What is XYZ?</h3>
        //     <label class="option-wrapper">
        //         <input type="radio" name="q1" value="1" />
        //         <span>Option One</span>
        //     </label>
        //     <label class="option-wrapper">
        //         <input type="radio" name="q1" value="2" />
        //         <span>Option Two</span>
        //     </label>
        //     <label class="option-wrapper">
        //         <input type="radio" name="q1" value="3" />
        //         <span>Option Three</span>
        //     </label>
        //     <label class="option-wrapper">
        //         <input type="radio" name="q1" value="4" />
        //         <span>Option Four</span>
        //     </label>
        // </section>

        var section = $("<section>");
        var question = $("<h3>").html(data.question);
        section.append(question);

        for(var i=0; i<data.options.length; i++) {
            var optionWrapper = $("<label>").addClass("option-wrapper")
            var input = $("<input>").attr("type", "radio").attr("name", "q" + data.id).attr("value", (i+1)).attr("required", "true").attr("id", "q" + data.id + "-" + (i+1))
            var label = $("<span>").html(data.options[i])

            optionWrapper.append(input, label);
            section.append(optionWrapper);
        }

        $("#quiz-form").append(section);
    }

    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response) {
        quizData = response;
        console.log(response);

        for(var i=0; i<response.length; i++) {
            renderQuizQuestion(response[i])
        }

        $("#quiz-form").append($("<input>").attr("type", "submit"))
    });

    
    $("#quiz-form").submit(function(e) {
        e.preventDefault();

        // Generate Selected Options for each question START
        var result = {}; //{q1: 1, q2:4, ...}
        var radioButtons = $(".option-wrapper input");
        for(var i=0; i<radioButtons.length; i++) {
            if(radioButtons[i].checked) {
                console.log(radioButtons[i]);
                result[radioButtons[i].name] = radioButtons[i].value
            }
        }
        console.log("result => ", result);
        // Generate Selected Options for each question END
        
        // Check if selected options are correct START
        var score = 0;
        for(var j=0; j<quizData.length; j++) {
            var key = "q" + quizData[j].id;
            var selector = "#"+(key+"-"+result[key]) + "+ span" //#q1-1 + span
            if(result[key] == quizData[j].answer) { //Correct option was selected
                score++;       
                console.log(selector);
                $(selector).html($(selector).html() + " [CORRECT]") 
            } else { //Incorrect option was selected
                var correctOptionSelector = "#"+(key+"-"+quizData[j].answer) + "+ span";
                $(correctOptionSelector).html($(correctOptionSelector).html() + " [CORRECT]")
                $(selector).html($(selector).html() + " [INCORRECT]")
            }
        }
        
        console.log("SCORE => " + score);
        $("#score").html(score);
        // Check if selected options are correct END
    })
});