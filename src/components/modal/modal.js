function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Настройки</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-item">
                            <div className="modal-item-title">
                                Страны:
                        </div>
                            <div className="modal-item-select">
                                <select name="country" id="">
                                    <option value="none">Не выбрано</option>
                                    <option value="Россия">Россия</option>
                                    <option value="США">США</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-item">
                            <div className="modal-item-title">
                                Жанры:
                        </div>
                            <div className="modal-item-select">
                                <select name="country" id="">
                                    <option value="none">Все жанры</option>
                                    <option value="Аниме">Аниме</option>
                                    <option value="Биография">Биография</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-item">
                            <div className="modal-item-title">
                                Годы:
                        </div>
                            <div className="modal-item-select">
                                <select name="country" id="">
                                    <option value="none">Все года</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-item">
                            <div className="modal-item-title">
                                Рейтинг Кинопоиска:
                        </div>
                            <div className="modal-item-select">
                                <select name="country" id="">
                                    <option value="none">Любой рейтинг</option>
                                    <option value="9">Выше 9</option>
                                    <option value="8">Выше 8</option>
                                    <option value="7">Выше 7</option>
                                    <option value="6">Выше 6</option>
                                    <option value="5">Выше 5</option>
                                    <option value="4">Выше 4</option>
                                    <option value="3">Выше 3</option>
                                    <option value="2">Выше 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal