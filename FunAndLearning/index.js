var element = document.getElementById('movies-div');


window.onload = function(){
    var request = new XMLHttpRequest();
    request.open('GET','https://yts.am/api/v2/list_movies.json',false);
    request.send();
    if(request.readyState === 4&&request.status === 200){
        let output = JSON.parse(request.responseText);
        let movies = output.data.movies;
        
        for(var i =0;i<movies.length;i++){
            console.log(output.data.movies[i].title);
            var node = document.createElement('div');
            node.className="container col-md-4";
            var img = document.createElement('img');
            img.className="img-thumbnail";
            img.width="304";
            img.height="236";
            img.src=output.data.movies[i].medium_cover_image;
            node.appendChild(img);
            element.appendChild(node);
        }
    }
    else console.log("There was a real Problem...");
}
