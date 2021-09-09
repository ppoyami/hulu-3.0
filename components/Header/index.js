import Image from 'next/image';
import { Router, useRouter } from 'next/router';

import tw, { css } from 'twin.macro';

import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

import HeaderItem from './HeaderItem';

const styles = {
  header: tw`flex flex-col pt-5 sm:flex-row justify-between items-center h-auto placeholder-opacity-100`,
  items: tw`flex flex-grow justify-evenly max-w-2xl `,
  logo: tw`object-contain`,
};

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header css={styles.header}>
      <div css={styles.items}>
        <HeaderItem
          title="HOME"
          Icon={HomeIcon}
          onClick={() => router.push('/')}
        />
        <HeaderItem title="TRANDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {pathname === '/' && (
        <Image
          css={styles.logo}
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
          alt="logo"
        />
      )}
    </header>
  );
}
