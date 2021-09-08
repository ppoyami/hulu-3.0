import Thumbnail from 'components/Thumbnail';
import tw, { css } from 'twin.macro';

const styles = {
  container: tw``,
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
