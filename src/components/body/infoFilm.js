import React, { Component } from 'react';
// import Frames from './frames'

export default class InfoFilm extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };


    }

    render() {

        // const InfoFilm = (props) => {

        // let data = props.film;
        // let year, rating_kinopoisk, rating_imdb, description, trailer, actors, directors, screenwriters, producers, operators, composers, painters, editors, budget, fees_world, fees_russia, premiere_world, premiere_russia = '';

        // // Вывод элементов, ищеющие массивы
        // let arr_genres;
        // if (data.genres == null) {
        //     arr_genres = null
        // }
        // else {
        //     arr_genres = data.genres.map(function (genre) {
        //         switch (genre) {
        //             case data.genres[data.genres.length - 1]:
        //                 return genre
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return genre + ', ';
        //         }
        //     });
        // }

        // let arr_countries;
        // if (data.countries === null) {
        //     arr_countries = null
        // }
        // else {
        //     arr_countries = data.countries.map(function (country) {
        //         switch (country) {
        //             case data.countries[data.countries.length - 1]:
        //                 return country
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return country + ', ';
        //         }
        //     });
        // }

        // let arr_actors;
        // if (data.actors === null) {
        //     arr_actors = null
        // }
        // else {
        //     arr_actors = data.actors.map(function (actor) {
        //         switch (actor) {
        //             case data.actors[data.actors.length - 1]:
        //                 return actor
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return actor + ', ';
        //         }
        //     });
        // }

        // let arr_directors;
        // if (data.directors === null) {
        //     arr_directors = null
        // }
        // else {
        //     arr_directors = data.directors.map(function (director) {
        //         switch (director) {
        //             case data.directors[data.directors.length - 1]:
        //                 return director
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return director + ', ';
        //         }
        //     });
        // }

        // let arr_screenwriters;
        // if (data.screenwriters === null) {
        //     arr_screenwriters = null
        // }
        // else {
        //     arr_screenwriters = data.screenwriters.map(function (screenwriter) {
        //         switch (screenwriter) {
        //             case data.screenwriters[data.screenwriters.length - 1]:
        //                 return screenwriter
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return screenwriter + ', ';
        //         }
        //     });
        // }

        // let arr_producers;
        // if (data.producers === null) {
        //     arr_producers = null
        // }
        // else {
        //     arr_producers = data.producers.map(function (producer) {
        //         switch (producer) {
        //             case data.producers[data.producers.length - 1]:
        //                 return producer
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return producer + ', ';
        //         }
        //     });
        // }

        // let arr_operators;
        // if (data.operators === null) {
        //     arr_operators = null
        // }
        // else {
        //     arr_operators = data.operators.map(function (operator) {
        //         switch (operator) {
        //             case data.operators[data.operators.length - 1]:
        //                 return operator
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return operator + ', ';
        //         }
        //     });
        // }

        // let arr_composers;
        // if (data.composers === null) {
        //     arr_composers = null
        // }
        // else {
        //     arr_composers = data.composers.map(function (composer) {
        //         switch (composer) {
        //             case data.composers[data.composers.length - 1]:
        //                 return composer
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return composer + ', ';
        //         }
        //     });
        // }

        // let arr_painters;
        // if (data.painters === null) {
        //     arr_painters = null
        // }
        // else {
        //     arr_painters = data.painters.map(function (painter) {
        //         switch (painter) {
        //             case data.painters[data.painters.length - 1]:
        //                 return painter
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return painter + ', ';
        //         }
        //     });
        // }

        // let arr_editors;
        // if (data.editors === null) {
        //     arr_editors = null
        // }
        // else {
        //     arr_editors = data.editors.map(function (editor) {
        //         switch (editor) {
        //             case data.editors[data.editors.length - 1]:
        //                 return editor
        //             case null:
        //                 return 'нет данных'
        //             default:
        //                 return editor + ', ';
        //         }
        //     });
        // }




        // // Обработка отображения при отсутствии данных
        // if (data.year === null) {
        //     year = 'disable';
        // };

        // if (data.rating_kinopoisk === null) {
        //     rating_kinopoisk = 'disable';
        // };

        // if (data.rating_imdb === null) {
        //     rating_imdb = 'disable';
        // };

        // if (data.description === null) {
        //     description = 'disable';
        // };

        // if (data.trailer === null) {
        //     trailer = 'disable';
        // };

        // if (data.actors === null) {
        //     actors = 'disable';
        // };

        // if (data.directors === null) {
        //     directors = 'disable';
        // };

        // if (data.screenwriters === null) {
        //     screenwriters = 'disable';
        // };

        // if (data.producers === null) {
        //     producers = 'disable';
        // };

        // if (data.operators === null) {
        //     operators = 'disable';
        // };

        // if (data.composers === null) {
        //     composers = 'disable';
        // };

        // if (data.painters === null) {
        //     painters = 'disable';
        // };

        // if (data.editors === null) {
        //     editors = 'disable';
        // };

        // if (data.budget === null) {
        //     budget = 'disable';
        // };

        // if (data.fees_world === null) {
        //     fees_world = 'disable';
        // };

        // if (data.fees_russia === null) {
        //     fees_russia = 'disable';
        // };

        // if (data.premiere_world === null) {
        //     premiere_world = 'disable';
        // };

        // if (data.premiere_russia === null) {
        //     premiere_russia = 'disable';
        // };

        return (
            <>

            </>
        )
    }
}
// export default InfoFilm