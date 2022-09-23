ymaps.ready(function () {
    var myMap = new ymaps.Map('contacts', {
            center: [59.940675, 30.328249],
            zoom: 12.64
        }, {
            searchControlProvider: 'yandex#search'
        }),
        
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.922509, 30.300238], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        }),

        myPlacemarkWith = new ymaps.Placemark([59.941406, 30.367318], {
            hintContent: 'jhgjgок метки с контентом',
            balloonContent: 'Аjhgjghвогодняя'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [0, 0],
            iconContentLayout: MyIconContentLayout
        }),

        myPlacemarkWithContent = new ymaps.Placemark([59.976747, 30.314557], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'images/icons/map-marker.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [-5, -5],
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWith)
        .add(myPlacemarkWithContent);
});