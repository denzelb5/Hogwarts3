import utilties from '../../helpers/utilities';
import './navbar.scss';

const loadNavbar = () => {
  const domString = `
  <nav>
    <h1 id="brand">Hogwarts</h1>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
    </ul>
  </nav>
  `;
  utilties.printToDom(domString, 'nav-container');
};

export default { loadNavbar };
