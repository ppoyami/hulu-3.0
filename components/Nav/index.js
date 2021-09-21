import { useRouter } from 'next/router';
import tw from 'twin.macro';

import { getCategory } from 'utils/requests';

const fadeVariants = {
  right: tw`right-0 bg-gradient-to-l`,
  left: tw`left-0 bg-gradient-to-r`,
};

const styles = {
  nav: tw`relative`,
  list: tw`flex overflow-x-scroll scrollbar-hide text-2xl whitespace-nowrap px-10 
    sm:px-20 space-x-10 sm:space-x-20`,
  list__item: tw`last:pr-24 cursor-pointer transition duration-100 
  transform hover:scale-125 hover:text-white active:text-red-500`,
  fade: (variant = 'right') => [
    tw`absolute top-0  from-primary h-full w-1/12`,
    fadeVariants[variant],
  ],
};

export default function Nav() {
  const router = useRouter();
  const { query } = router;

  return (
    <nav css={styles.nav}>
      <div css={styles.list}>
        {Object.entries(getCategory).map(([key, { title }]) => (
          <Item
            isCurrent={key === (query?.genre || Object.keys(getCategory)[0])}
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </Item>
        ))}
      </div>
      <div css={styles.fade('right')}></div>
      <div css={styles.fade('left')}></div>
    </nav>
  );
}

const Item = ({ isCurrent, children, ...rest }) => (
  <h2
    {...rest}
    css={[
      styles.list__item,
      isCurrent && tw`transform scale-125 text-blue-800`,
    ]}
  >
    {children}
  </h2>
);
