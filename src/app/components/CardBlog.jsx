import Image from "next/image"
import Link from "next/link"

export default function BlogCard({
  imgUrl,
  category,
  date,
  title,
  description,
  userName,
  userImgUrl,
}) {
  // example: <BlogCard imgUrl={"/blogimage.jpg"} category={"Component"} date={"Published 16 Jan 2024"} title={"HTML&CSS foundations"} description={ "These languages are the backbone of every website, defining structure, content, and presentation." } userName={"Gabriel Morandi"} userImgUrl={"/userpic.png"}/>
  return (
    <Link
      href={"/"}
      className="flex flex-col p-6 bg-white border border-zinc-900 shadow-[8px_8px_0_#18181b] rounded-[20px] gap-6 max-w-[384px] [&>div>.title]:hover:text-zinc-400 [&>div>.title]:focus:text-zinc-400 dark:shadow-[8px_8px_0_#18181b] dark:border-zinc-900 dark:bg-zinc-950"
    >
      <Image
        src={imgUrl}
        width={279}
        height={200}
        alt="BlogImage"
        className="w-full rounded-xl"
      />
      <div className="flex flex-col gap-3">
        <h3 className="flex px-3 py-1 font-bold rounded-[4px] bg-zinc-200 w-max dark:bg-zinc-900">
          {category}
        </h3>
        <h4 className="text-sm font-medium">{date}</h4>
        <h2 className="text-xl font-extrabold transition-colors title">
          {title}
        </h2>
        <p className="text-sm font-medium break-words text-zinc-400 dark:text-zinc-500">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image src={userImgUrl} width={32} height={32} alt="UserPic" />
        <h2 className="text-sm font-extrabold">{userName}</h2>
      </div>
    </Link>
  )
}
