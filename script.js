var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };
    
  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8577c5df6d4d451ca57e129a30bc90eb");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

        $('#searchResults').html(results);
        $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
    console.log(results);
}

function apiGetLucky() {
    var params = {
        "q": $("#query").val(),
        "count": "1",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8577c5df6d4d451ca57e129a30bc90eb");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            console.log(data.webPages.value.url)
            window.open(
                data.webPages.value[0].url,
                '_blank' // <- This is what makes it open in a new window.
            );
        })
        .fail(function () {
            alert("error");
        });

}




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomBackground = 0;

let headText = document.querySelector('#hText');

function backgroundChange() {
    if (randomBackground == 0) {
        randomBackground = 1;
    }
    else {
        randomBackground = 0;
    }
    if (randomBackground == 0) {
        headText.addEventListener('click', () => {
            document.body.style.backgroundImage = "url(https://preview.redd.it/j3he9mz7dc151.png?width=960&crop=smart&auto=webp&s=956096526ac90cf3a89bae197823d456ea0df33a)";
        })
    }
    else {
        headText.addEventListener('click', () => {
            document.body.style.backgroundImage = "url(https://images4.alphacoders.com/718/thumb-1920-71846.jpg)";
        })
    }
}

function timeGet() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    document.getElementById("time2").innerHTML = time;
}
