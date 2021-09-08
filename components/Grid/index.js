import Thumbnail from 'components/Thumbnail';
import tw, { css } from 'twin.macro';

const styles = {
  container: tw`px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center`,
};

export default function Grid({ dataset }) {
  return (
    <div css={styles.container}>
      {dataset.map(data => (
        <Thumbnail key={data.id} data={data} />
      ))}
    </div>
  );
}
