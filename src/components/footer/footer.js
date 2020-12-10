function Footer() {
    return (
        <div className="black">
            <footer className="container">
                <div className="row">
                    <div className="col-12 col-md">
                        <img src="img/title.png" alt="" />
                    </div>
                    <div className="col-6 col-md mt-3">
                        <span className="footer-subtitle">Приложения</span>
                        <ul className="list-unstyled text-small footer-list">
                            <li><a className="text-muted" href="/cplace.html">cPlace</a></li>
                            <li><a className="text-muted" href="/cfilm.html">cFilm</a></li>
                            <li><a className="text-muted" href="/ctravel.html">cTravel</a></li>
                            <li><a className="text-muted" href="/cbook.html">cBook</a></li>
                            <li><a className="text-muted" href="/cchat.html">cChat</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md mt-3">
                        <span className="footer-subtitle">Контакты</span>
                        <ul className="list-unstyled text-small footer-list">
                            <li className="color-white">Email: <a className="text-muted"
                                href="mailto:makssp7@inbox.ru">makssp7@inbox.ru</a></li>
                            <li className="color-white">City: <a className="text-muted"
                                href="https://www.google.ru/maps/@52.2891582,104.2485421,12.85z">Russia, Irkutsk</a>
                            </li>
                            <li className="color-white">Github: <a className="text-muted"
                                href="https://github.com/maxim-js">@maxim-js</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer