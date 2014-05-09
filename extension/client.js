// Generated by CoffeeScript 1.7.1
(function() {
  var div, elements, extractError, extractRatings, location, name, res, results, search, _i, _len;

  elements = $(".search-location");

  location = elements[0].innerHTML;

  extractError = function(error, business) {
    var address, biz;
    biz = encodeURI(business);
    address = "http://yelp.com/search?find_desc=" + biz;
    return $(document.createElement('a')).attr({
      href: address,
      target: '_blank'
    }).html(error);
  };

  extractRatings = function(rating, reviewCount, starsUrl, bizUrl) {
    var reviews, stars;
    reviews = $(document.createElement('a'));
    reviews.attr({
      href: bizUrl,
      target: '_blank'
    });
    reviews.html("(" + reviewCount + " reviews)");
    stars = $(document.createElement('img'));
    stars.attr({
      src: starsUrl,
      alt: rating
    });
    return {
      stars: stars,
      reviews: reviews
    };
  };

  search = function(business, location, div) {
    var req;
    req = new XMLHttpRequest;
    req.open("GET", "http://localhost:8080/?s=" + business + "&l=" + location, true);
    req.onreadystatechange = function() {
      var failure, ratings, res;
      if (req.readyState === 4) {
        res = $.parseJSON(req.responseText);
        console.log(res);
        if (res.error != null) {
          console.log("there was an error " + res.err);
          return failure = extractError(res.error, business);
        } else {
          ratings = extractRatings(res.rating, res.reviewCount, res.ratingImg, res.url);
          console.log(ratings);
          div.append(ratings.stars);
          return div.append(ratings.reviews);
        }
      }
    };
    return req.send();
  };

  results = $(".result");

  for (_i = 0, _len = results.length; _i < _len; _i++) {
    res = results[_i];
    name = $(res).find(".rest-name")[0].innerHTML;
    div = $(res).find(".ratings-col");
    console.log(location);
    console.log(name);
    console.log(div);
    search(name, location, div);
  }

}).call(this);