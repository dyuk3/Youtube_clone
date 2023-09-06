import Button from "./Button";

const ButtonList = () => {

  const trending_topics = [
    'All',
    'Cricket',
    'Gaming',
    'Music',
    'Live',
    'Dota 2',
    'Valorant',
    'Computer Programming',
    'Newsletter',
    'News',
    'Bollywood Music',
    'Media',
    'Watched',
    'New',

  ];

  return (
    <div className="w-full flex  ">
      {trending_topics.map((topic, index) => (
        <Button key={index} name={topic} />
      ))}

    </div>
  );
};

export default ButtonList;