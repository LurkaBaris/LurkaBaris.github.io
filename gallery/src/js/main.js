$(document).ready(() => {
    /*отмена ошибки*/
    let errorCancel = () => {
        $(".gallery__label-input")
            .html("URL")
            .removeClass("gallery__label-input_error");
    };
    /*отмена ошибки*/
    /*сортировка изображений*/
    let filterGallery = () => {
        $(".gallery__container img").sort((a, b) => a.dataset.id < b.dataset.id ? 1 : -1)
            .appendTo(".gallery__container");
    };
    /*сортировка изображений*/

    /*изменение размеров*/
    let resizeImage = (item) => {
        let originalWidth = $(item)[0].width;
        if (originalWidth < 640) {
            $(item).addClass("gallery__img_small");
            $(item).attr({
                "data-id": 1
            });
        } else if (originalWidth >= 640 && originalWidth <= 1200) {
            $(item).addClass("gallery__img_medium");
            $(item).attr({
                "data-id": 2
            });
        } else {
            $(item).addClass("gallery__img_big");
            $(item).attr({
                "data-id": 3
            });
        }
    };
    /*изменение размеров*/

    /*загрузка изображения*/
    let loadImage = (event) => {
        event.preventDefault();
        $(".gallery__container img").hide();
        $(".gallery__loader").addClass("gallery__loader_active");
        let inputValue = $('.gallery__input').val();
        let load = (url) => {
            $('.gallery__input').val("");
                let newImage = $('<img>')
                    .attr({
                        src: url,
                        alt: "gallery__img"
                    })
                    .addClass("gallery__img");

                $(newImage).load(() => {
                    $(".gallery__loader").removeClass("gallery__loader_active");
                    $(".gallery__container img").show();
                    resizeImage($(newImage));
                    $(".gallery__container").append($(newImage));
                    filterGallery();
                });
                $(newImage).error(() => {
                    $(".gallery__loader").removeClass("gallery__loader_active");
                    $(".gallery__container img").show();
                    $(".gallery__label-input")
                        .html("Ошибка загрзуки! Проверьте URL.")
                        .addClass("gallery__label-input_error");
                });
        };
        fetch(inputValue)
            .then(response =>  response.json())
            .then(result => {
                for (let key in result) {
                    result[key].forEach(item => {
                        load(item.url);
                    });
                }
            })
            .catch(() => {
                load(inputValue);
            });
    };
    /*загрузка изображения*/

    $(".gallery__btn").on("click", () => loadImage(event));
    $(".gallery__input")
        .focus(errorCancel)
        .on("input", errorCancel);
});