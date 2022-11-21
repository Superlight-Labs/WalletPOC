import Link from "next/link";

const LanguageSwitch = () => {
  return (
    <div className="flex-row font-thin space-x-16 text-lg hidden sm:flex">
      <Link href="/de">DE</Link>
      <Link href="/">EN</Link>
    </div>
  );
};

export default LanguageSwitch;
