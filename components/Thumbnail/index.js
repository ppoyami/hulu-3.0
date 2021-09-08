import tw from 'twin.macro';
import Image from 'next/image';

import { IMAGE_BASE_URL } from 'utils/requests';
import { ThumbUpIcon } from '@heroicons/react/outline';

const styles = {
  container: tw`p-2 cursor-pointer`,
  image: tw`transform group-hover:scale-125 transition duration-300 ease-in-out`,
  info: tw`p-2`,
  info__overview: tw`truncate max-w-md`,
  info__title: tw`text-2xl mt-1 text-white transition-all duration-100 ease-in-out group-hover:font-bold`,
  info__others: tw`flex items-center opacity-0 group-hover:opacity-100`,
  icon: tw`ml-3 h-5`,
};

// eslint-disable-next-line react/display-name
const Thumbnail = ({ data }) => {
  return (
    <div className="group" css={styles.container}>
      <Image
        css={styles.image}
        layout="responsive"
        src={`${IMAGE_BASE_URL}${data.backdrop_path || data.poster_path}`}
        alt="thumbnail"
        height={1080}
        width={1920}
      />
      <div css={styles.info}>
        <p css={styles.info__overview}>{data.overview}</p>
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
