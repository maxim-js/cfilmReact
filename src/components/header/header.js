function Header() {
    return (
        <div className="navbar navbar-dark bg-nav fixed-top navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src="img/title.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li>
                            <a href="/" className="nav-link">Список фильмов</a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">Список сериалов</a>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header