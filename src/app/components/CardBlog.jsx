import Image from "next/image"

export default function BlogCard({
  imgUrl,
  category,
  date,
  title,
  description,
  userName,
  userImgUrl,
}) {
  return (
    <div className="flex flex-col p-6 bg-white border rounded-[20px] gap-6 max-w-[384px]">
      <Image
        src={imgUrl}
        width={279}
        height={200}
        alt="BlogImage"
        className="w-full"
      />
      <div className="flex flex-col gap-3">
        <h3 className="flex px-3 py-1 font-bold rounded-[4px] bg-zinc-200 w-max">
          {category}
        </h3>
        <h4 className="text-sm font-medium">{date}</h4>
        <h2 className="text-xl font-extrabold">{title}</h2>
        <p className="text-sm font-medium break-words text-zinc-400">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image src={userImgUrl} width={32} height={32} alt="UserPic" />
        <h2 className="text-sm font-extrabold">{userName}</h2>
      </div>
    </div>
  )
}
