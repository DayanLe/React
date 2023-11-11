import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <strong>PERRO MALO</strong>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="iNdex.js">

                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="index.js">
                        Inicio
                    </a>

                    <a className="navbar-item" href="index.js">
                        Nosotros
                    </a>
                    <a className="navbar-item" href="index.js">
                        Precios
                    </a>
                    <a className="navbar-item" href="index.js">
                        Colecciones
                    </a>
                    <a className="navbar-item" href="index.js">
                        Contacto
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <CartWidget/>

                            <a className="button is-primary" href="index.js">
                                <strong>Empecemos</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        console.log('Target:', target);
        const $target = document.getElementById(target);
        console.log('Target Element:', $target);

  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

export default NavBar;