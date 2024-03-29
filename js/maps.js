"use strict";

(function (root) {

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map-simple", {
            center: [53.342178, 83.723335],
            zoom: 15
        });

        var myMap2 = new ymaps.Map("map", {
            center: [53.342178, 83.723335],
            zoom: 3,
            controls: []
        });

        myMap.geoObjects.add(new ymaps.Placemark([53.342178, 83.723335], {
            balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
    }
})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHMuanMiXSwibmFtZXMiOlsicm9vdCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwibXlNYXAiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwibXlNYXAyIiwiY29udHJvbHMiLCJnZW9PYmplY3RzIiwiYWRkIiwiUGxhY2VtYXJrIiwiYmFsbG9vbkNvbnRlbnQiLCJwcmVzZXQiLCJpY29uQ29sb3IiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxJQUFULEVBQWU7O0FBRWRDLFVBQU1DLEtBQU4sQ0FBWUMsSUFBWjs7QUFFQSxhQUFTQSxJQUFULEdBQWU7QUFDWCxZQUFJQyxRQUFRLElBQUlILE1BQU1JLEdBQVYsQ0FBYyxZQUFkLEVBQTRCO0FBQ3BDQyxvQkFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBRDRCO0FBRXBDQyxrQkFBTTtBQUY4QixTQUE1QixDQUFaOztBQUtBLFlBQUlDLFNBQVMsSUFBSVAsTUFBTUksR0FBVixDQUFjLEtBQWQsRUFBcUI7QUFDOUJDLG9CQUFRLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FEc0I7QUFFOUJDLGtCQUFNLENBRndCO0FBRzlCRSxzQkFBVTtBQUhvQixTQUFyQixDQUFiOztBQU1BTCxjQUFNTSxVQUFOLENBQ0dDLEdBREgsQ0FDTyxJQUFJVixNQUFNVyxTQUFWLENBQW9CLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBcEIsRUFBNEM7QUFDN0NDLDRCQUFnQjtBQUQ2QixTQUE1QyxFQUVGO0FBQ0NDLG9CQUFRLGNBRFQ7QUFFQ0MsdUJBQVc7QUFGWixTQUZFLENBRFA7QUFPSDtBQUVGLENBekJELEVBeUJHQyxNQXpCSCIsImZpbGUiOiJtYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblxuICB5bWFwcy5yZWFkeShpbml0KTtcblxuICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwLXNpbXBsZVwiLCB7XG4gICAgICAgICAgY2VudGVyOiBbNTMuMzQyMTc4LCA4My43MjMzMzVdLFxuICAgICAgICAgIHpvb206IDE1XG4gICAgICB9KTtcblxuICAgICAgdmFyIG15TWFwMiA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgICAgICAgIGNlbnRlcjogWzUzLjM0MjE3OCwgODMuNzIzMzM1XSxcbiAgICAgICAgICB6b29tOiAzLFxuICAgICAgICAgIGNvbnRyb2xzOiBbXVxuICAgICAgfSk7XG5cbiAgICAgIG15TWFwLmdlb09iamVjdHNcbiAgICAgICAgLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My4zNDIxNzgsIDgzLjcyMzMzNV0sIHtcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0YbQstC10YIgPHN0cm9uZz7QstC+0LTRiyDQv9C70Y/QttCwINCx0L7QvdC00Lg8L3N0cm9uZz4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHByZXNldDogJ2lzbGFuZHMjaWNvbicsXG4gICAgICAgICAgICBpY29uQ29sb3I6ICcjMDA5NWI2J1xuICAgICAgICB9KSk7XG4gIH1cblxufSkod2luZG93KTtcbiJdfQ==
