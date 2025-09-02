import type { FC } from "react";
import {
  FaHeart,
  FaComment,
  FaInstagram,
  FaTwitter,
  FaRegComment,
  FaFacebook,
} from "react-icons/fa";

/**
 * Props for InstagramCard
 */
interface InstagramCardProps {
  img: string;
  content: string;
  likes: string;
  comments: string;
}

/**
 * Instagram-style card component
 */
const InstagramCard: FC<InstagramCardProps> = ({
  img,
  content,
  likes,
  comments,
}) => {
  return (
    <div className="transform bg-white shadow-lg w-[380px] overflow-hidden p-2 h-[370px] border-gray-200 border-dashed border-2 flex-shrink-0 rounded-3xl">
      <img
        src={img}
        alt="Post"
        className="w-full h-[200px] object-cover rounded-3xl"
      />
      <div className="p-1 h-[2.5cm]">
        <p className="text-black text-sm leading-relaxed line-clamp-3">
          {content}
        </p>
      </div>
      <div className="flex justify-around py-3 text-gray-600">
        <FaHeart className="cursor-pointer text-red-500" /> {likes}
        <FaComment className="cursor-pointer text-blue-500" /> {comments}
        <FaInstagram size={30} className="cursor-pointer text-pink-500" />
      </div>
    </div>
  );
};

/**
 * Props for TweetCard
 */
interface TweetCardProps {
  img: string;
  content: string;
  name: string;
  handle: string;
  likes: string;
  comments: string;
  date: string;
}

/**
 * Twitter-style card component
 */
const TweetCard: FC<TweetCardProps> = ({
  img,
  content,
  name,
  handle,
  likes,
  comments,
  date,
}) => {
  return (
    <div className="bg-white shadow-md p-2 w-[380px] h-[370px] border-gray-200 border-dashed border-2 flex-shrink-0 rounded-3xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-black">{name}</p>
            <p className="text-gray-500 text-sm">{handle}</p>
          </div>
        </div>
        <FaTwitter size={30} className="text-sky-500 text-lg" />
      </div>
      <p className="text-black leading-relaxed h-[2cm] line-clamp-3">
        {content}
      </p>
      <div>
        <img
          src={img}
          alt="Post"
          className="w-full h-[180px] object-cover rounded-3xl"
        />
      </div>
      <div className="flex items-center gap-6 mt-3 text-gray-500 text-sm flex-wrap">
        <div className="flex items-center gap-1">
          <FaHeart className="text-red-500" /> <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegComment /> <span>{comments}</span>
        </div>
        <span>{date}</span>
      </div>
    </div>
  );
};

/**
 * Props for FacebookAdCard
 */
interface FacebookAdCardProps {
  img: string;
  content: string;
}

/**
 * Facebook-style advertisement card component
 */
const FacebookAdCard: FC<FacebookAdCardProps> = ({ img, content }) => {
  return (
    <div className="bg-white w-[350px] shadow-lg overflow-hidden h-[370px] border-gray-200 border-dashed border-2 flex-shrink-0 rounded-3xl">
      <div className="p-2 flex items-center justify-between">
        <p className="font-semibold text-black uppercase">New Take Up</p>
        <div className="text-blue-600">
          <FaFacebook size={30} />
        </div>
      </div>
      <div className="p-1 h-[2cm]">
        <p className="text-black text-sm leading-relaxed line-clamp-3">
          {content}
        </p>
      </div>
      <div>
        <img
          src={img}
          alt="Ad"
          className="w-full h-[200px] object-cover rounded-3xl"
        />
      </div>
      <div className="px-4 py-3 border-t flex items-center gap-4 text-gray-500 text-sm">
        <span className="cursor-pointer hover:text-blue-500">Like</span>
        <span className="cursor-pointer hover:text-blue-500">Comment</span>
        <span className="cursor-pointer hover:text-blue-500">Share</span>
      </div>
    </div>
  );
};

/**
 * Story type definition
 */
interface Story {
  title: string;
  img: string;
  content: string;
  likes: string;
  comments: string;
  date: string;
}

// 🔹 Updated Stories for NEET, JEE, State Board, and Diploma Polytechnic
const stories: Story[] = [
  {
    title: "NEET AIR 523 – From Average to Top Ranker",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202506/17-year-old-avika-aggarwal-cracks-neet-with-rank-5--avoided-social-media-entirely-164258857-16x9_0.jpg?VersionId=uVFhUFexR5.pQrPMM0.FLaMyJpdf3Faj",
    content:
      "With dedicated NEET coaching, mock tests, and 1-on-1 mentorship, this student transformed their score and secured AIR 523.",
    likes: "4.2k",
    comments: "520",
    date: "05:26 PM · 10 Apr 2023",
  },
  {
    title: "JEE Main 72%ile to JEE Advanced AIR 2194",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LDrpUaO0fK16jNjPhPxbBJ-rcec06a9Blg&s",
    content:
      "Through targeted concept revisions and weekly practice papers, this JEE aspirant achieved an incredible leap in rank.",
    likes: "3.1k",
    comments: "410",
    date: "06:10 PM · 05 Jun 2023",
  },
  {
    title: "State Board Topper with 98.4%",
    img: "https://images.moneycontrol.com/static-mcnews/2024/04/MixCollage-22-Apr-2024-03-10-PM-4937.jpg",
    content:
      "State Board-focused classes, chapter-wise notes, and regular tests helped this student secure top marks.",
    likes: "2.9k",
    comments: "360",
    date: "09:00 AM · 20 Mar 2023",
  },
  {
    title: "Diploma Polytechnic Gold Medalist",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjf9U1kagdtkwBdtoHqX8YM3H1NdDSOMfafw&s",
    content:
      "Industry-oriented teaching, hands-on workshops, and project guidance ensured this diploma student graduated with honors.",
    likes: "2.2k",
    comments: "280",
    date: "03:45 PM · 12 Dec 2023",
  },
];

/**
 * Success stories section with marquee effect
 */
const SuccessStoriesSection: FC = () => {
  const cardOrder = [InstagramCard, FacebookAdCard, TweetCard];
  const loopStories = [...stories, ...stories]; // Duplicate for smooth looping

  return (
    <section className="flex flex-col justify-center items-center">
      <style>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .marquee-inner {
          display: flex;
          flex-wrap: nowrap;
          gap: 1rem;
          animation: marquee 25s linear infinite;
        }
        .marquee-inner > * {
          flex-shrink: 0;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <h2 className="text-8xl rounded-2xl pl-3 pt-5 text-center">
        <h1 style={{ fontFamily: "InstrumentSerif" }}>Success Stories</h1>
        <h2 className="text-lg text-gray-500 mt-2 max-w-xl text-center italic">
          Inspiring journeys from NEET, JEE, State Board, and Diploma Polytechnic
          students who achieved their dreams through New Take Up’s coaching.
        </h2>
      </h2>

      <div className="marquee mt-10 mb-10">
        <div className="marquee-inner">
          {loopStories.map((story, idx) => {
            const Card = cardOrder[idx % cardOrder.length];
            return (
              <Card
                key={idx}
                img={story.img}
                content={story.content}
                likes={story.likes}
                comments={story.comments}
                name="Student Name"
                handle="@student"
                date={story.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
