import React from "react";
import { FiStar } from "react-icons/fi";
import Icon from "./Icon";

export interface FeedbackCard {
  title: string;
  description: string;

  avatar: string;
  username: string;
  userbio: string;
}

export const Example: FeedbackCard = {
  title: "🌟 Great Feedback",
  description:
    "👍 This is a fantastic component! It's easy to use and very customizable. I highly recommend it.",

  avatar: "/avatar.png",
  username: "🙋‍♂️ John Doe",
  userbio: "👨‍💻 Full Stack Developer",
};

interface FeedbackCardProps {
  data: FeedbackCard;
}

const FeedbackCardComp: React.FC<FeedbackCardProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <div className="flex items-center">
        <img
          src={data.avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {data.username}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{data.userbio}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {data.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
      </div>
      <button className="flex items-center mt-4 text-gray-500 dark:text-gray-400">
        {/* <Icon name="Star" className="w-4 h-4 mr-1" /> */}
        <FiStar className="w-4 h-4 mr-1" />
        Add to Favorites
      </button>
    </div>
  );
};

export default FeedbackCardComp;
