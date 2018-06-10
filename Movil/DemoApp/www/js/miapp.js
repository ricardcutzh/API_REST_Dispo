var $$ = Dom7;
var app = new Framework7({
    root:'#Ejemplo',
    routes: [
        {
          path: '/about/',
          url: 'about.html',
        },
    ],
});

var mainView = app.views.create('.view-main');