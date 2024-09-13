import Card from "@/components/card";
import avatar from "@/app/favicon.ico";

import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex w-full flex-col gap-5 lg:gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
            {/* Background and profile */}
            <div
              className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
              // style={{
              //   backgroundImage:
              //     "url(https://unsplash.com/photos/brown-dirt-road-between-green-trees-during-daytime-gx7_jFMLm3U?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)",
              // }}
            >
              <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                <Image
                  width="2"
                  height="20"
                  className="h-full w-full rounded-full"
                  src={avatar}
                  alt=""
                />
              </div>
            </div>

            {/* Name and position */}
            <div className="mt-16 flex flex-col items-center">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Vijay Deenanath Chauhan
              </h4>
              <h5 className="text-base font-normal text-gray-600">
                Product Manager
              </h5>
            </div>

            {/* Post followers */}
            <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                  17
                </h4>
                <p className="text-sm font-normal text-gray-600">Posts</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                  9.7K
                </h4>
                <p className="text-sm font-normal text-gray-600">Followers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                  434
                </h4>
                <p className="text-sm font-normal text-gray-600">Following</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
