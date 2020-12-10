export default class Service {
    constructor() {
        this._apiBase = 'https://api.kinopoisk.cloud';
        this.token = 'token/edfc2b9f26a6b951be95a152a2ed9b7e'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}${this.token}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllFilms = async () => {
        const res = await this.getResource(`/movies/`);
        return res.map(this._transformBook);
    }

    getFilm = async (id) => {
        const film = await this.getResource(`/movies/${id}/`);
        return this._transformFilm(film);
    }

    getAllSerials = async () => {
        const res = await this.getResource(`/tv-series/`);
        return res.map(this._transformBook);
    }

    getSerial = async (id) => {
        const serial = await this.getResource(`/tv-series/${id}/`);
        return this._transformSerial(serial);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'Нет данных :('
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
            // premiere_world: this.isSet(premiere_world),
            premiere_russia: this.isSet(film.premiere_russia),
            fees_world: this.isSet(film.fees_world),
            frames: this.isSet(film.frames),
            duration: this.isSet(film.collapse.duration),
            fees_world: this.isSet(film.fees_world),
        };
    }

    _transformSerial = (serial) => {
        return {
            id: this.isSet(serial),
            name: this.isSet(serial.name),
            region: this.isSet(serial.region),
            words: this.isSet(serial.words),
            titles: this.isSet(serial.titles),
            ancestralWeapons: this.isSet(serial.ancestralWeapons)
        };
    }

}
const test = new Service();

test.getFilm(87461)
    .then(res => console.log(res));