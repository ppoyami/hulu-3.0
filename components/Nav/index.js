import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';

import { getCategory } from 'utils/requests';

const styles = {
  nav: tw`relative`,
  list: tw`flex overflow-x-scroll scrollbar-hide text-2xl whitespace-nowrap px-10 
    sm:px-20 space-x-10 sm:space-x-20`,
  list__item: isCurrent =>
    css`
      ${tw`last:pr-24 cursor-pointer transition duration-100 
  transform hover:scale-125 hover:text-white active:text-red-500`}
      ${isCurrent && tw`transform scale-125 text-blue-800`}
    `,
  fade: tw`absolute top-0 right-0 bg-gradient-to-l from-primary h-full w-1/12`,
};

export default function Nav() {
  const router = useRouter();
  const { query } = router;

  return (
    <nav css={styles.nav}>
      <div css={styles.list}>
        {Object.entries(getCategory).map(([key, { title }]) => (
          <h2
            css={styles.list__item(
              key === (query?.genre || Object.keys(getCategory)[0])
            )}
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div css={styles.fade}></div>
      <div css={[styles.fade, tw`left-0 bg-gradient-to-r`]}></div>
    </nav>
  );
}
