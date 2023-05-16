import { Input } from "./SearchMovies.styled";
import { Button,Form } from "./SearchMovies.styled";

const SearchMovies = ({ onSubmit }) => {
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
<Form onSubmit={handleSubmit}>
          <Input type="text" name="query" placeholder="Search movies" />
          <Button type="submit"> search
          </Button>
    </Form>
  );
};

export default SearchMovies;
