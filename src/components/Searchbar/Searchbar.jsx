import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './searchbar.module.css';

const Searchbar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if(name === 'search'){setSearch(value)}
  };


const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    reset();
  };

  function reset() {
    setSearch('')
  } 

  return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={handleChange}
            required
          />
        </form>
      </header>
  )
}
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



// class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };


// handleSubmit = e => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset() {
//     this.setState({
//       search: '',
//     });
//   }
//   render() {
//     const { search } = this.state;
//     const { handleChange, handleSubmit } = this;

//     return (
//       <header className={styles.Searchbar}>
//         <form className={styles.SearchForm} onSubmit={handleSubmit}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <span className={styles.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={styles.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="search"
//             value={search}
//             onChange={handleChange}
//             required
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
