var $$ = Dom7;
var app = new Framework7({
    root:'#Ejemplo',
    routes: [
        {
          path: '/Menu/',
          url: 'Menu.html',
        },
        {
            path: '/LogIn/',
            url: 'index.html',
        },
    ],
});

var mainView = app.views.create('.view-main');