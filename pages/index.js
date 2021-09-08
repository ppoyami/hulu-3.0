import tw, { css } from 'twin.macro';
import httpClient from 'service';

import Nav from 'components/Nav';
import { getCategory } from 'utils/requests';

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Nav />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const response = await httpClient.get(
    `${getCategory[genre]?.url || getCategory.fetchTopRated.url}`
  );

  return {
    props: {
      results: response.data.results,
    },
  };
}
