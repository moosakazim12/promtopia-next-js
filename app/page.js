import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
      </h1>
      <span className=" head_text text-center orange_gradient text-center">
        AI-Powered Prompts
      </span>
      <p className="desc tect-center">
        Promptopia is an open sourced AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      {/* Feed Component */}
      <Feed />
    </section>
  );
};

export default Home;
