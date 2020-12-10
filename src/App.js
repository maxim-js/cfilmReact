import React, { Component } from 'react';
import Header from './components/header/header'
import Modal from './components/modal/modal'
import Footer from './components/footer/footer'
import Service from './components/services/service'
import Frames from './components/body/frames'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.randomChoice();
    this.choiceSerials();
    this.state = { isToggleOn: true };


    // Эта привязка обязательна для работы `this` в колбэке.
    this.typeClick = this.typeClick.bind(this);
  }
  newFilm = new Service();
  state = {
    id: null,
    type: null,
    title: null,
    title_alternative: null,
    tagline: null,
    description: null,
    year: null,
    poster: null,
    trailer: null,
    actors: null,
    countries: null,
    genres: null,
    directors: null,
    screenwriters: null,
    producers: null,
    operators: null,
    composers: null,
    painters: null,
    editors: null,
    budget: null,
    rating_kinopoisk: null,
    rating_imdb: null,
    fees_world: null,
    fees_russia: null,
    premiere_world: null,
    premiere_russia: null,
    frames: null,
    duration: null
  }

  randomChoice() {
    const id = Math.floor(Math.random() * 298 + 500);
    this.newFilm.getFilm(id)
      .then((film) => {
        this.setState({
          id: film.id,
          type: film.type,
          title: film.title,
          title_alternative: film.title_alternative,
          tagline: film.tagline,
          description: film.description,
          year: film.year,
          poster: film.poster,
          trailer: film.trailer,
          actors: film.actors.map(function (item) {
            switch (item) {
              case film.actors[film.actors.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          countries: film.countries.map(function (country) {
            switch (country) {
              case film.countries[film.countries.length - 1]:
                return country
              case null:
                return 'нет данных'
              default:
                return country + ', ';
            }
          }),
          genres: film.genres.map(function (item) {
            switch (item) {
              case film.genres[film.genres.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          directors: film.directors.map(function (item) {
            switch (item) {
              case film.directors[film.directors.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          screenwriters: film.screenwriters.map(function (item) {
            switch (item) {
              case film.screenwriters[film.screenwriters.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          producers: film.producers.map(function (item) {
            switch (item) {
              case film.producers[film.producers.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          operators: film.operators.map(function (item) {
            switch (item) {
              case film.operators[film.operators.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          composers: film.composers.map(function (item) {
            switch (item) {
              case film.composers[film.composers.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          painters: film.painters.map(function (item) {
            switch (item) {
              case film.painters[film.painters.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          editors: film.editors.map(function (item) {
            switch (item) {
              case film.editors[film.editors.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          budget: film.budget,
          rating_kinopoisk: film.rating_kinopoisk,
          rating_imdb: film.rating_imdb,
          fees_world: film.fees_world,
          fees_russia: film.fees_russia,
          premiere_world: film.premiere_world,
          premiere_russia: film.premiere_russia,
          frames: film.frames,
          duration: film.duration,
        })
      })
  }
  newSerial = new Service();
  choiceSerials() {
    console.log('Выбираю сериалы');

    const id = Math.floor(Math.random() * 2 + 696785);
    this.newSerial.getSerial(id)
      .then((serial) => {
        this.setState({
          id: serial.id,
          type: serial.type,
          title: serial.title,
          title_alternative: serial.title_alternative,
          tagline: serial.tagline,
          description: serial.description,
          year: serial.year,
          poster: serial.poster,
          trailer: serial.trailer,
          actors: serial.actors.map(function (item) {
            switch (item) {
              case serial.actors[serial.actors.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          countries: serial.countries.map(function (item) {
            switch (item) {
              case serial.countries[serial.countries.length - 1]:
                return item
              case null:
                return 'нет данных'
              default:
                return item + ', ';
            }
          }),
          genres: serial.genres.map(function (item) {
            switch (item) {
              case serial.genres[serial.genres.length - 1]:
                return item
              case null:
                return '-'
              default:
                return item + ', ';
            }
          }),
          editors: serial.editors,
          budget: serial.budget,
          rating_kinopoisk: serial.rating_kinopoisk,
          rating_imdb: serial.rating_imdb,
          fees_world: serial.fees_world,
          fees_russia: serial.fees_russia,
          premiere_world: serial.premiere_world,
          premiere_russia: serial.premiere_russia,
          frames: serial.frames,
          duration: serial.duration,
          seasons: serial.seasons
        })
      })

  }

  typeClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));


  }
  render() {
    const { title, title_alternative, tagline, description, year, poster, trailer, actors, countries, genres, directors, screenwriters, producers, operators, composers, painters, editors, budget, rating_kinopoisk, rating_imdb, fees_world, fees_russia, premiere_world, premiere_russia, frames, duration } = this.state;

    return (
      <>
        <Header />
        <Modal />
        <div className="container">
          <div className="choice">
            <div className="choice-text">
              Я выберу
            </div>

            <div className=" btns-choice">
              <button type="button" className={`btn ${this.state.isToggleOn ? 'btn-choice' : 'btn-outline-choice'}  btn-lg`} onClick={this.typeClick}>
                Фильмы
              </button>
              <button type="button" className={`btn ${this.state.isToggleOn ? 'btn-outline-choice' : 'btn-choice'}  btn-lg`} onClick={this.typeClick}>
                Сериалы
              </button>
            </div>

            <div>
              <button className="btn btn-main btn-lg" onClick={() => { this.state.isToggleOn ? this.randomChoice() : this.choiceSerials() }}>
                Нажми на меня
            </button>
              <button data-toggle="modal" data-target="#exampleModal" type="button"
                className="btn btn-outline-choice-filter btn-lg">Фильтр</button>
            </div>
          </div>
        </div>






        {/* --------------------------------------------------------------
infoFilm
--------------------------------------------------------------- */}
        <div className="container">
          <div className="info-main">
            <div className="info-block-poster">
              <div className="poster-img" style={{ backgroundImage: `url(${poster})` }}></div>
            </div>
            <div className="info-main-list info-block">
              <ul className="info-list">
                <li className="info-main-title">
                  {title}
                </li>
                <li className="info-main-eng">
                  {title_alternative}
                </li>
                <li className="info-main-sub">{year} г.</li>
                <li className="info-main-sub">
                  {countries}
                </li>
                <li className="info-main-sub">
                  {genres}
                </li>
                <li className="info-main-sub info-main-sub-mod">
                  {duration}
                </li>
                <li className='info-main-sub '
                >Kinopoisk: {rating_kinopoisk}
                </li>
                <li className='info-main-sub'
                >
                  Imdb: {rating_imdb}
                </li>
              </ul>
            </div>
          </div>
        </div>





        <div className="container">
          <div className="description">
            <div className='more-title'>
              Обзор:
            </div>
            {description}
          </div>
        </div>


        <div className="container">
          <div className='trailer'>
            <iframe title="trailer" src={trailer}

              frameBorder="0" allowFullScreen />
            <div className="trailer-tagline">
              {tagline}

            </div>
          </div>
        </div>


        <Frames frames={frames} />



        <div className="container">
          <div className="row">
            <div className="col-md">
              <div>
                <ul className="info-list">
                  <li className="more-block">Творческий состав</li>
                  <li className='more-title'
                  >Актеры:</li>
                  <li className="more-sub">
                    {actors}
                  </li>

                  <li className='more-title'
                  >Режиссер:</li>
                  <li className="more-sub">
                    {directors}
                  </li>

                  <li className='more-title'
                  >Сценарий:</li>
                  <li className="more-sub">
                    {screenwriters}
                  </li>

                  <li className='more-title'
                  >Продюссеры:</li>
                  <li className="more-sub">
                    {producers}
                  </li>

                  <li className='more-title'
                  >Операторы:</li>
                  <li className="more-sub">
                    {operators}
                  </li>

                  <li className='more-title'
                  >Композитор:</li>
                  <li className="more-sub">
                    {composers}
                  </li>

                  <li className='more-title'
                  >Художники:</li>
                  <li className="more-sub">
                    {painters}
                  </li>

                  <li className='more-title'
                  >Монтаж:</li>
                  <li className="more-sub">
                    {editors}
                  </li>

                </ul>
              </div>
            </div>


            <div className="col-md">
              <div>
                <ul className="info-list">
                  <li className="more-block">Фильм в цифрах</li>

                  <li className='more-title'

                  >Бюджет:</li>
                  <li className="more-sub">
                    {budget}
                  </li>

                  <li className='more-title'
                  >Сборы в мире:</li>
                  <li className="more-sub" >
                    {fees_world}
                  </li>


                  <li className='more-title'
                  >Сборы в России:</li>
                  <li className="more-sub">
                    {fees_russia}
                  </li>

                  <li className='more-title'
                  >Премьера в мире:</li>
                  <li className="more-sub">
                    {premiere_world}
                  </li>

                  <li className='more-title'
                  >Премьера в России:</li>
                  <li className="more-sub">
                    {premiere_russia}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}