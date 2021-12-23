var imdbApiKey = 'k_flc35q5h'
var imdbApiKey2 = 'k_5yosmfb0'
var useAll = '';
var userServiceChoice = "";
var userGenreChoice = ""

//convert to jquery
var sButton = document.getElementById('sButton');
sButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('hello')
    getTitle(userServiceChoice, genre);
})

//capture user selction on the service
$('#service1').change(function() {
    console.log($(this).val());
    userServiceChoice = $(this).val();
});

//capture user selction on the genre
//convert genre choice to code for api

$('#genre1').change(function() {
    userGenreChoice = $(this).val();
    if (userGenreChoice === 'Adventure'){
        genre = 12
    } else if(userGenreChoice === 'Biography') {
        genre = 1
    } else if(userGenreChoice === 'Drama'){
        genre = 18
    } else if(userGenreChoice === 'Horror'){
        genre = 27
    } else if(userGenreChoice === 'Action'){
        genre = 28
    } else if(userGenreChoice === 'Comedy'){
        genre = 35
    } else if(userGenreChoice === 'Thriller'){
        genre = 53
    }  else if(userGenreChoice === 'Crime'){
        genre = 80
    } else if(userGenreChoice === 'Mystery'){
        genre = 9648
    } else {
        genre = 10749
    }

})

///////// Opening Modal /////////////////
$(document).ready(function(){
    $("#modalMain").addClass("is-active");
});
$(".modal-close").click(function() {
    $("#modalMain").removeClass("is-active");
 });
 $("#closebtn").click(function() {
    $("#modalMain").removeClass("is-active");
    var serv = $('#service').val();
    var service =serv.toLowerCase()
    console.log(service)
    
    
    var genreChoice = $('#genre').val();
    userInput(service, genreChoice)
 });
///////////////////////////////////////////

function userInput(service, genreChoice) {
var genre;
 
// var serv = $('#service').val();
// var service =serv.toLowerCase()
// console.log(service)


// var genreChoice = $('#genre').val();
// userInput(service, genreChoice)

    if (genreChoice === 'Adventure'){
        genre = 12
    } else if(genreChoice === 'Biography') {
        genre = 1
    } else if(genreChoice === 'Drama'){
        genre = 18
    } else if(genreChoice === 'Horror'){
        genre = 27
    } else if(genreChoice === 'Action'){
        genre = 28
    } else if(genreChoice === 'Comedy'){
        genre = 35
    } else if(genreChoice === 'Thriller'){
        genre = 53
    }  else if(genreChoice === 'Crime'){
        genre = 80
    } else if(genreChoice === 'Mystery'){
        genre = 9648
    } else {
        genre = 10749
    }
 console.log(genre)

    getTitle(service, genre)

}

function getTitle(service, userServiceChoice, genre) {

    var randPage = Math.floor(Math.random() *14)
    var usePage = (randPage + 1);
    console.log(randPage);

        fetch(`https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${service}&type=movie&genre=${genre}&page=${usePage}&output_language=en&language=en`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "5905109ec5msh57a2f97f237f422p10f34bjsn176a53ffa732"
	}
})
.then(function(response) {
        return response.json();
})
.then(function(data){
	console.log(data);

for (let i = 0; i < 6; i++) {
     useAll += `<button class="launchModal">
     <div class="column notification is-info">
     boxes3 = <div class="tile is-child box">
      <div class="title">${data.results[i].title}</div>
      <div><img src=${data.results[i].posterURLs[185]}></div>
     </div> 
     </button>`
}
    document.getElementById('boxes').innerHTML = useAll;

    $(".launchModal").click(function() {
        $(".modal").addClass("is-active");
    });
     $(".modal-close").click(function() {
       $(".modal").removeClass("is-active");
    })
                
});
}


// function launchModal(modalButton) {
// // var launch = document.querySelector(".launchModal")
// modalButton.addEventListener("click", function(){
//     var modal = document.querySelector(".modal")
//     modal.addClass = 'is-active'
// });
// var closeModal = document.querySelector('.modal-close')
// closeModal.addEventListener('click', function(){
// modal.removeClass = 'is-active'
// });
// }


// $(".launchModal").click(function() {
//     $(".modal").addClass("is-active");
// });  
//  $(".modal-close").click(function() {
//    $(".modal").removeClass("is-active");
// });




// function getTitle(movieTitle) { ///// IMDB API CALL //////
//     var queryUrl = 'https://imdb-api.com/en/API/SearchTitle/' + imdbApiKey + '/' + movieTitle + '/';
//     fetch(queryUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var mID = data.results[0].id;
//             var mTitle = data.results[0].title;
//             console.log(mTitle);
//             console.log(mID);
//             getInfo(mID);

//         })
            
//         }








// inlineFormInputName.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("sButton").click();
//     }})





    // function getInfo(ttID) { ///// 2nd IMDB API CALL //////
    //     // var ttID = "tt1375666"
    //     // var mID = data.results[0].id;
    //     // console.log(mID)
    //     var queryUrl = 'https://imdb-api.com/en/API/Title/' + imdbApiKey2 + '/' + ttID;
    //     fetch(queryUrl)
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             console.log(data);
    //           var releaseDate = $("<p>").text(data.releaseDate);
    //            $(".movie-info").append(releaseDate);
    //           var runTime = $("<p>").text(data.runtimeStr);
    //           $(".movie-info").append(runTime);
    //           var imdbRating = $("<p>").text(data.imDbRating)
    //           $(".movie-info").append(imdbRating);
    //           var tagline = $("<p>").text(data.tagline);
    //           $(".movie-info").append(tagline);

    //           console.log(data.runtimeStr);
    //           console.log(data.releaseDate);
    //           console.log(data.imDbRating);
    //           console.log(data.tagline);

    //         })
    //     }  