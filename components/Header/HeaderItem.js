import tw from 'twin.macro';

const styles = {
  wrapper: tw`flex flex-col items-center w-12 sm:w-20 cursor-pointer hover:text-white`,
  icon: tw`h-8 mb-1 group-hover:animate-bounce`,
  text: tw`opacity-0 group-hover:opacity-100 tracking-widest`,
};

export default function HeaderItem({ title, Icon }) {
  return (
    <div className="group" css={styles.wrapper}>
      <Icon css={styles.icon} />
      <p css={styles.text}>{title}</p>
    </div>
  );
}
