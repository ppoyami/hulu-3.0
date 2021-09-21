import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';
import Image from 'next/image';

import { IMAGE_BASE_URL } from 'utils/requests';
import { ThumbUpIcon } from '@heroicons/react/outline';

const styles = {
  container: tw`p-2 cursor-pointer relative`,
  image: tw`transform group-hover:scale-125 transition duration-300 ease-in-out`,
  overview: css`
    max-height: calc(33.3% - 1rem);
    max-width: calc(100% - 1rem);

    ${tw`absolute bottom-20 p-3  bg-gray-900 text-sm sm:text-sm xl:text-base font-semibold opacity-0 
        transition duration-300 ease-in-out 
        transform translate-y-6 overflow-hidden overflow-ellipsis 
        group-hover:opacity-100 group-hover:translate-y-0
    `}
  `,
  info: tw`h-20 p-2`,
  info__title: tw`text-2xl truncate mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold`,
  info__others: tw`flex items-center opacity-0 group-hover:opacity-100`,
  icon: tw`ml-3 h-5`,
};

// eslint-disable-next-line react/display-name
const Thumbnail = ({ data }) => {
  const router = useRouter();
  const routingDetailPage = () => {
    router.push(`/movie/${data.id}`);
  };
  return (
    <div className="group" css={styles.container} onClick={routingDetailPage}>
      <Image
        css={styles.image}
        layout="responsive"
        src={`${IMAGE_BASE_URL}${data.backdrop_path || data.poster_path}`}
        alt="thumbnail"
        height={1080}
        width={1920}
      />
      <p css={styles.overview}>
        {data.overview.length > 150
          ? `${data.overview.slice(0, 150)}...`
          : data.overview}
      </p>
      <div css={styles.info}>
        <h2 css={styles.info__title}>{data.title || data.original_name}</h2>
        <p css={styles.info__others}>
          {data.media_type && `${data.media_type} • `}
          {data.release_date || data.first_air_date}
          <ThumbUpIcon css={styles.icon} /> {data.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
