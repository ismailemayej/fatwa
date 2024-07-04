import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";

export default function PostCard() {
  return (
    <Card className="max-w-full mt-1.5">
      <CardHeader className="flex gap-3 bg-slate-50 bangla">
        <div className=" bg-red-500 text-white rounded-lg flex flex-col p-4 items-center text-xl bangla">
          প্রশ্ন
          <span className="text-xs">#১৩২৩৫</span>
        </div>

        <div className=" flex flex-col font-semibold text-lg lg:text-xl text-blue-700">
          <div className="flex gap-3 text-black">
            <span className=" text-xs">০৩-০৭-২০২৪</span>
            <span className=" text-xs">সময়:১২.00 pm</span>
          </div>
          সালাত আদায়কালে আঙ্গুল ফোটানো বা নখ কামড়ানোর বিধান? সালাত আদায়কালে
          আঙ্গুল ফোটানো বা নখ কামড়ানোর বিধান
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="">
        <p className="bangla">
          উত্তর : সালাত ইসলামের সবচেয়ে গুরুত্বপূর্ণ ইবাদত। বান্দা যখন সালাত
          আদায়ের জন্য দাঁড়ায়, তখন সে মহান আল্লাহর সঙ্গে একান্তে কথা বলে। রাসুলে
          কারিম সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বলেছেন, إِنَّ أَحَدَكُمْ إِذَا
          قَامَ فِي صَلاَتِهِ فَإِنَّهُ يُنَاجِي رَبَّهُ অর্থ : যখন তোমাদের কেউ
          সালাতে দাঁড়ায়, তখন সে তার রবের সাথে একান্তে কথা বলে। [সহিহ বুখারি :
          ৪০৫] এ জন্য সালাত আদায়কালে সর্বতভাবে মহান আল্লাহর দিকে মনোনিবেশ করতে
          হবে; আঙুল ফোটানো বা নখ কামড়ানোর মতো অনর্থক কাজে লিপ্ত হওয়া উচিত নয়।
          ফকিহগন সালাতের মধ্যে
        </p>
        <span className="flex w-full justify-between mt-[-20px]">
          <p className="text-xs text-white">.</p>
          <Link
            className="bg-blue-500 border-l-8 border-white  text-xs px-2 rounded-lg py-0.5  text-white"
            href="/"
          >
            বিস্তারিত
          </Link>
        </span>
      </CardBody>

      <Divider />
      <CardFooter className="bangla text-green-900">
        <p className="text-sm">
          <span className="font-semibold text-black">সূত্র :</span> মুসান্নাফে
          ইবনে আবি শাইবা, ৭২৮০; কিতাবুল আসার, ২৬৭; আল-বাহরুর রায়েক, ২/২১;
          আন-নাহরুল ফায়েক, ১/২৭৯; আল-মুগনি, ২/৯; ফাতহু বাবিল ইনায়া, ১/৩০৫
        </p>
      </CardFooter>
    </Card>
  );
}
