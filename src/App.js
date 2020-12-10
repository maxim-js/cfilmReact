import React, { Component } from 'react';
import Header from './components/header/header'
import Modal from './components/modal/modal'
import Footer from './components/footer/footer'
import InfoFilm from './components/body/infoFilm'
import Service from './components/services/service'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };


    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
    this.randomChoice = this.randomChoice.bind(this);
    this.randomFirst = this.randomFirst.bind(this);
  }

  test = new Service();



  randomChoice() {
    const id = 87461;
    this.Service.getFilm(id)
    // let firstArr, secondArr;
    // firstArr = Math.floor(Math.random() * (0 - 0 + 1)) + 0;
    // secondArr = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    // console.log(firstArr);
    // console.log(secondArr);
    // return data[firstArr][secondArr]
  }

  randomFirst() {
    let first = Math.floor(Math.random() * (0 - 0 + 1)) + 0;
    console.log(first)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));


  }
  render() {
    var data = require('./db.json');
    var film = data[0][3];

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
              <button type="button" className={`btn ${this.state.isToggleOn ? 'btn-choice' : 'btn-outline-choice'}  btn-lg`} onClick={this.handleClick}>
                Фильмы
              </button>
              <button type="button" className={`btn ${this.state.isToggleOn ? 'btn-outline-choice' : 'btn-choice'}  btn-lg`} onClick={this.handleClick}>
                Сериалы
              </button>
            </div>

            <div>
              <button className="btn btn-main btn-lg" onClick={() => this.randomChoice(data)}>
                Нажми на меня
            </button>
              <button data-toggle="modal" data-target="#exampleModal" type="button"
                className="btn btn-outline-choice-filter btn-lg">Фильтр</button>
            </div>
          </div>
        </div>
        <InfoFilm film={film} />
        <Footer />
      </>
    );
  }
}