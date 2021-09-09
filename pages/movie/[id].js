import Image from 'next/image';
import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';

import useAsync from 'hooks/useAsync';
import tmdb from 'service';
import { IMAGE_BASE_URL } from 'utils/requests';
import { StarIcon } from '@heroicons/react/solid';

const styles = {
  container: tw`p-8`,
  wrapper: tw`relative w-full h-96 m-auto border-8 border-gray-800 rounded-sm`,
  info: tw`flex justify-between items-center my-5`,
  info__title: tw`text-2xl font-bold`,
  info__vote: tw`flex items-center text-xl`,
};

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  const [{ loading, data, error }] = useAsync(() => tmdb.getMovieDetail(id));

  if (loading) return <span>loading..</span>;
  if (error) return <span>error..</span>;
  console.log(data);

  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <Image
          layout="fill"
          src={`${IMAGE_BASE_URL}${data.backdrop_path || data.poster_path}`}
          alt="backdrop"
          objectFit="cover"
        />
      </div>
      <div css={styles.info}>
        <div>
          <h2 css={styles.info__title}>{data.title}</h2>
        </div>
        <span css={styles.info__vote}>
          <StarIcon css={tw`h-7 mr-2`} />
          {data.vote_average}
        </span>
      </div>
      <p css={tw`font-bold`}>Company</p>
      <div css={css([tw`flex flex-wrap mb-3 border-b-2 border-gray-700 pb-4`])}>
        {data.production_companies.map((company, idx) => (
          <p
            css={css([idx < data.production_companies.length - 1 && tw`mr-4`])}
            key={company.name || idx}
          >
            {company?.name}
          </p>
        ))}
      </div>
      <div>
        <h3 css={tw`font-medium text-2xl mb-2`}>Synopsis</h3>
        <p css={tw`text-gray-300 text-opacity-50`}>{data.overview}</p>
      </div>
      <button
        css={tw`text-xl block uppercase p-3 w-full m-auto my-4 bg-green-700 hover:bg-green-600 rounded-md`}
      >
        tmdb
      </button>
    </div>
  );
}
