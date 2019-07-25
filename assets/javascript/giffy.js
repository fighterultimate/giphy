var pokemonTeam = ["Charzard", "Mewtwo", "Mankey", "Squirtle", "Gyrados", "Ghastly", "Geodude", "Lugia", "Pikachu", "Moltres"];

function loop(){

    $("#buttons").html("");
for (var i = 0; i < pokemonTeam.length; i++) {

    var button=$("<button>"+pokemonTeam[i]+"</button>");
    button.attr("class","button");
    button.attr("data-pokemon",pokemonTeam[i]);

$("#buttons").prepend(button)}};


loop();

function button(){
   
    var choice= $("#pokemon").val();
    console.log(choice);
    console.log(pokemonTeam);
 pokemonTeam.push(choice);
 console.log(pokemonTeam);
 loop();
 };

 
$("#submit").on("click", function(){

  button();
  


});



$(document).on("click",".button", function () {
    var pokemon = $(this).attr("data-pokemon");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        pokemon + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);




        var results = response.data;

        
        for (var i = 0; i < 11; i++) {

            var pokemonDiv = $("<div style='display: inline-block'>");
            var p = $("<p>").text("Results: " + results[i].rating);
            var pokemonImage = $("<img>");
            pokemonImage.attr("src", results[i].images.fixed_height.url);
            pokemonImage.attr("data-still", results[i].images.fixed_height_still.url);
            pokemonImage.attr("data-animate", results[i].images.fixed_height.url);
            pokemonImage.attr("data-state", "animate");
            pokemonImage.attr("class", "gif");
            pokemonDiv.prepend(pokemonImage);
            pokemonDiv.prepend(p);
            $("#gifs-appear-here").prepend(pokemonDiv);



        }})});

        $(document).on("click",".gif", function () {
            console.log("test");
            var state = $(this).attr("data-state");

            console.log(state);

            if (state === "still") {
                
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
               
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }});
    
