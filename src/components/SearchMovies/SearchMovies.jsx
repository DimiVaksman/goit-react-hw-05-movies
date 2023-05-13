export const SearchMovies = ({onSubmit}) => {

    const handleSubmit = e => {
        e.preventDefault();
    
        const query = e.target.elements.query.value;
    
        if (!query) {
          alert('Please enter something');
          return;
        }
    
        onSubmit(query);
        e.target.reset();
      };

    return (
      
        <form onSubmit={handleSubmit}>
        <input type="text" name='query' placeholder="Search movies"/>
        <button type="submit">Search</button>
      </form>

    )
}