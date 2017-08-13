var food = angular.module('foodieApp', ['ngRoute']);

food.controller('logincontroller', function($scope, $location) {
    $scope.goToHome = function() {
        $location.path('home');
    }
});

food.controller('restaurantcontroller', function($scope, $routeParams, $http) {
            $scope.restaurantId = $routeParams.id;
            var diabetic_ingredients=['sweet','chocolate','brownie','rice','french fries',
                                        'pasta','cookies','chicken','nachos','pie','yogurt',
                                        'smoothie','mayonnaise','hamburger','cake','pizza'];

            var restaurant = [{
                    name: 'Farzi Cafe',
                    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                    location: 'Connaught Place',
                    category: 'Casual Dining, Bar',
                    vote: '4.2',
                    cuisines: 'Modern Indian',
                    cost: '2200',
                    hours: '12 Noon to 1 AM (Mon-Sun)',
                    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
                    best_dish: {
                        name: 'Tomato soup',
                        image: 'http://www.harvesttotable.com/wp-content/uploads/2007/09/Tomato-soup-with-basil.jpg'//https://www.elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/pizza.jpg
                    },//
                    menu: [{
                                menu_image: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps37407_THE1213734_37407_WEB.jpg',
                                menu_name: 'Cappuccino'
                            },
                            {
                                menu_image: 'http://s.eatthis-cdn.com/media/images/ext/675083154/sweet-iced-tea.jpg',
                                menu_name: 'Iced Tea'
                            },
                            {
                                menu_image: 'https://www.halfbakedharvest.com/wp-content/uploads/2014/10/Salted-Caramel-Apple-Snickers-Cake.-41.jpg',
                                menu_name: 'Apple Caramel Cake'
                            },
                            {
                                menu_image: 'http://cdn-image.foodandwine.com/sites/default/files/caribbean-rum-zing-xl-200005.jpg',
                                menu_name: 'Guava Zing'
                            },
                            {
                                menu_image: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/28/2/TM1A14F_Garlic-Bread_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494390909610.jpeg',
                                menu_name: 'Garlic Bread'
                            },
                            {
                                menu_image: 'http://alisonsmith.com/wp-content/uploads/2014/05/Sugar-Free-Vegan-Green-Tea-Ice-Cream-6.jpg',
                                menu_name: 'Vegan Green Tea Ice Cream'
                            },
                            {
                                menu_image: 'http://www.thefitindian.com/wp-content/uploads/2013/04/Moong-Sprouts-Salad.jpg',
                                menu_name: 'Sprouts'
                            }

                            ]
                },//http://img.taste.com.au/ZATA4qbZ/taste/2017/03/double-choc-easter-cheesecake-1980x1320-124941-1.jpg
                {
                    name: 'Girl In The Cafe',
                    address: 'SCO 117-119, Level 2, Sector 17, Chandigarh',
                    location: 'Sector 17',
                    category: 'Cafe, Bar',
                    vote: '3.5',
                    cuisines: 'Cafe, Italian',
                    cost: '1500',
                    hours: '10 AM to 11 PM (Mon-Sun)',
                    image: 'https://miami.eat24hours.com/files/cuisines/v4/cafe.jpg',
                    best_dish: {
                        name: 'Hamburger',
                        image: 'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
                    }
                },//http://img.taste.com.au/nGjAovK2/taste/2016/11/layered-chocolate-mousse-cakes-101268-1.jpeg
                {
                    name: 'Rustic Door',
                    address: 'SCO 12, Opposite Mount View, Sector 10, Chandigarh',
                    location: 'Sector 10',
                    category: 'Casual Dining, Café',
                    vote: '3.9',
                    cuisines: 'Italian, North Indian, Continental, Cafe',
                    cost: '1500',
                    hours: '11:30 AM to 11:30 PM (Mon-Sun)',
                    image: 'https://b.zmtcdn.com/data/pictures/8/121858/a27edf73ecd10761fda62837c87e41de_featured_v2.jpg',
                    best_dish: {
                        name: 'Cheese Nachos',
                        image: 'https://www.tostitos.ca/sites/tostitos.ca/files/recipe_hd_ultimate-four-cheese-nachos.jpg'
                    }
                },//https://lbb.in/bangalore/wp-content/uploads/sites/2/2016/07/190716_BurgerPizzaDominos2.jpg
                {
                    name: 'Boston Bites',
                    address: 'Shop 39, Sector 11 D, Sector 11, Chandigarh',
                    location: 'Sector 11 D',
                    category: 'Quick Bites',
                    vote: '3.7',
                    cuisines: 'Pizza, Burger, Healthy Food',
                    cost: '400',
                    hours: '9 AM to 11 PM (Mon-Sun)',
                    image: 'http://images.jdmagicbox.com/patiala/r5/9999px175.x175.160920123125.p8r5/catalogue/boston-bites-patiala-ffqae.jpg',

               		best_dish: {
                        name: 'Fruit Juice',
                        image: 'https://qph.ec.quoracdn.net/main-qimg-0d03a3351edd330c887998db004f7609-c'
                    }
            }];//http://img.taste.com.au/ZATA4qbZ/taste/2017/03/double-choc-easter-cheesecake-1980x1320-124941-1.jpg

            // $scope.checkedCB = function(){
            //     var cb = document.querySelector('#test');
            //     if(cb.checked)
            //     {
            //         $('.list_names').addClass('done_item');
            //     }
            // }

            $scope.restaurant = restaurant[$routeParams.id - 1];
            $scope.flag=0;
            $scope.getIngredients = function(url) {
                console.log(url);
            	$scope.flag=1-$scope.flag;
            	console.log($scope.flag);
                var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
                $http({
                    'method': 'POST',
                    'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
                    'headers': {
                        'Authorization': 'Key fe153caf2daf4bf784cdbae3d0d10cc6',
                        'Content-Type': 'application/json'
                    },
                    'data': data
                }).then(function(response) {
                    console.log(response);
                var ingredients = response.data.outputs[0].data.concepts;
                 $scope.ingredient = [];
                $scope.grocery_list=[];
                for (var i = 0; i < ingredients.length; i++) {
                    if(ingredients[i].value>0.75)
                    {
                        $scope.ingredient.push(ingredients[i].name);
                    }
                }
                for(var j=0;j<diabetic_ingredients.length;j++)
                {
                    var a = diabetic_ingredients.indexOf($scope.ingredient[j]);
                    if(a>=0)
                    {
                        $scope.msg="This Food Item is not good for Diabetic patient";
                        console.log($scope.msg);
                        break;
                    }
                }
                // for(k=0;k<$scope.ingredient.length;k++)
                // {
                //     console.log($scope.ingredient[k]);
                //     var x= $('#test').val();
                //      console.log(x);
                //    $scope.grocery_list.push($scope.ingredient[k]);
                // }
                console.log(a);
                // $('.ingredients').html(list);
            }, function(xhr) {
                console.log(xhr);
            })
            }
  });
            food.controller('maincontroller', function($scope) {
                $scope.restaurants = $scope.restaurants = [{
                        name: 'Farzi Cafe',
                        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                        location: 'Connaught Place',
                        category: 'Casual Dining, Bar',
                        vote: '4.2',
                        cuisines: 'Modern Indian',
                        cost: '2200',
                        hours: '12 Noon to 1 AM (Mon-Sun)',
                        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
                        id: '1'
                    },
                    {
                        name: 'Girl In The Cafe',
                        address: 'SCO 117-119, Level 2, Sector 17, Chandigarh',
                        location: 'Sector 17',
                        category: 'Cafe, Bar',
                        vote: '3.5',
                        cuisines: 'Cafe, Italian',
                        cost: '1500',
                        hours: '10 AM to 11 PM (Mon-Sun)',
                        image: 'https://miami.eat24hours.com/files/cuisines/v4/cafe.jpg',
                        id: '2'
                    },
                    {
                        name: 'Rustic Door',
                        address: 'SCO 12, Opposite Mount View, Sector 10, Chandigarh',
                        location: 'Sector 10',
                        category: 'Casual Dining, Café',
                        vote: '3.9',
                        cuisines: 'Italian, North Indian, Continental, Cafe',
                        cost: '1500',
                        hours: '11:30 AM to 11:30 PM (Mon-Sun)',
                        image: 'https://b.zmtcdn.com/data/pictures/8/121858/a27edf73ecd10761fda62837c87e41de_featured_v2.jpg',
                        id: '3'
                    },
                    {
                        name: 'Boston Bites',
                        address: 'Shop 39, Sector 11 D, Sector 11, Chandigarh',
                        location: 'Sector 11 D',
                        category: 'Quick Bites',
                        vote: '3.7',
                        cuisines: 'Pizza, Burger, Healthy Food',
                        cost: '400',
                        hours: '9 AM to 11 PM (Mon-Sun)',
                        image: 'http://images.jdmagicbox.com/patiala/r5/9999px175.x175.160920123125.p8r5/catalogue/boston-bites-patiala-ffqae.jpg',
                        id: '4'
                    }
                ]
                // body...
            });
            //------------------------------

            food.config(function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'pages/login.html',
                        controller: 'logincontroller'
                    })
                    .when('/home', {
                        templateUrl: 'pages/main.html',
                        controller: 'maincontroller'
                    })
                    .when('/restaurant/:id', {
                        templateUrl: 'pages/restaurant.html',
                        controller: 'restaurantcontroller'
                    })
            });

          
