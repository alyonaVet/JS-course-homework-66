import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success-subtle">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <NavLink to="/" className="navbar-brand text-success">Calories tracker</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;