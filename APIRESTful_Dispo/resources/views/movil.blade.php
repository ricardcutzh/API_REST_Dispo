<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

         
        <title>Mantas</title>
        <!-- <link href='https://fonts.googleapis.com/css?family=Material+Icons' rel="stylesheet"> -->
       <!--  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"> -->
       <!--  <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet"> -->
        
        <!--  <link rel="stylesheet" type="text/css" href="{{asset('Bienvenido/css/fuentes.css')}}" /> -->
       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
       <meta name="apple-mobile-web-app-capable" content="yes">

    </head>
    <body>
        <div id="app">  
                <router-view></router-view> 
        </div>
  
        <script src="{{ asset('js/app.js') }}"></script>  
    </body>
</html>
