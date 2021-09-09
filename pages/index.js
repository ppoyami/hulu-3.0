import tw, { css } from 'twin.macro';
import tmdb from 'service';

import Nav from 'components/Nav';
import { getCategory } from 'utils/requests';
import Grid from 'components/Grid';

export default function Home({ results }) {
  return (
    <div>
      <Nav />
      <Grid dataset={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const response = await tmdb.get(
    `${getCategory[genre]?.url || getCategory.fetchTopRated.url}`
  );

  return {
    props: {
      results: response.data.results,
    },
  };
}
