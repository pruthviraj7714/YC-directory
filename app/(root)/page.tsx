import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name : "test"
      },
      _id: 1,
      description: "This is a description",
      image:
        "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=is&k=20&c=XA34TRzHagyA7LvTNnRcPuxgG8qR9SlIk3tUFfh9_dM=",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post : StartupCardTypes, index : number) => (
              <StartupCard key={post._id} post={post} />
            ) )
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
