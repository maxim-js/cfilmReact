export default class Service {
    constructor() {
        this._apiBase = 'https://api.kinopoisk.cloud';
        this.token = 'token/7ad920c98339f8e7a7973d740b2740e2'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}${this.token}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getFilm = async (id) => {
        const film = await this.getResource(`/movies/${id}/`);
        return this._transformFilm(film);
    }

    getSerial = async (id) => {
        const serial = await this.getResource(`/tv-series/${id}/`);
        return this._transformSerial(serial);
    }

    getAllFilms = async () => {
        const res = await this.getResource(`/movies/`);
        return res.map(this._transformBook);
    }

    getAllSerials = async () => {
        const res = await this.getResource(`/tv-series/`);
        return res.map(this._transformSerial);
    }

    isSet(data) {
        if (data) {
            return data
        } else if (data == null) {
            return '-'
        } else {
            return '-'

        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformFilm = (film) => {
        return {
            id: this.isSet(film),
            type: this.isSet(film.type),
            title: this.isSet(film.title),
            title_alternative: this.isSet(film.title_alternative),
            tagline: this.isSet(film.tagline),
            description: this.isSet(film.description),
            year: this.isSet(film.year),
            poster: this.isSet(film.poster),
            trailer: this.isSet(film.trailer),
            actors: this.isSet(film.actors),
            countries: this.isSet(film.countries),
            genres: this.isSet(film.genres),
            directors: this.isSet(film.directors),
            screenwriters: this.isSet(film.screenwriters),
            producers: this.isSet(film.producers),
            operators: this.isSet(film.operators),
            composers: this.isSet(film.composers),
            painters: this.isSet(film.painters),
            editors: this.isSet(film.editors),
            budget: this.isSet(film.budget),
            rating_kinopoisk: this.isSet(film.rating_kinopoisk),
            rating_imdb: this.isSet(film.rating_imdb),
            fees_world: this.isSet(film.fees_world),
            fees_russia: this.isSet(film.fees_russia),
            premiere_world: this.isSet(film.premiere_world),
            premiere_russia: this.isSet(film.premiere_russia),
            frames: this.isSet(film.frames),
            duration: this.isSet(film.collapse.duration)
        };
    }

    _transformSerial = (serial) => {
        return {
            id: this.isSet(serial),
            type: this.isSet(serial.type),
            title: this.isSet(serial.title),
            title_alternative: this.isSet(serial.title_alternative),
            tagline: this.isSet(serial.tagline),
            description: this.isSet(serial.description),
            year: this.isSet(serial.year),
            poster: this.isSet(serial.poster),
            trailer: this.isSet(serial.trailer),
            actors: this.isSet(serial.actors),
            countries: this.isSet(serial.countries),
            genres: this.isSet(serial.genres),
            directors: this.isSet(serial.directors),
            screenwriters: this.isSet(serial.screenwriters),
            producers: this.isSet(serial.producers),
            operators: this.isSet(serial.operators),
            composers: this.isSet(serial.composers),
            painters: this.isSet(serial.painters),
            editors: this.isSet(serial.editors),
            budget: this.isSet(serial.budget),
            rating_kinopoisk: this.isSet(serial.rating_kinopoisk),
            rating_imdb: this.isSet(serial.rating_imdb),
            fees_world: this.isSet(serial.fees_world),
            fees_russia: this.isSet(serial.fees_russia),
            premiere_world: this.isSet(serial.premiere_world),
            premiere_russia: this.isSet(serial.premiere_russia),
            frames: this.isSet(serial.frames),
            duration: this.isSet(serial.collapse.duration),
            seasons: this.isSet(serial.seasons)
        };
    }

}
