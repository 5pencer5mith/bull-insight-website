import PageWrapper from "../components/PageWrapper";
import Sidekick from "../components/hero/sidekick/Sidekick";
import Link from "next/link";
import Image from "next/image";
import { Rss } from "lucide-react";

import { getAllPosts } from "../../lib/wordpress";

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Blog() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <PageWrapper>
      <Sidekick
        pageTitle="InSight Blog"
        subTitle="Stay up to date with the latest insights!"
      />

      <div className="mx-auto w-full max-w-7xl space-y-16 px-4 pb-12 pt-10 md:space-y-20 md:pb-16 md:pt-12">
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <Rss className="h-40 w-40 text-tan-light md:h-52 md:w-52" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h2 className="font-display text-2xl leading-snug md:text-3xl">
              Research, field notes, and{" "}
              <span className="font-bold text-brand-primary">insights</span> from
              our team
            </h2>
            <p className="m-0 text-lg font-body leading-snug text-text-muted">
              Browse articles on bull fertility, semen analysis, and herd health.
            </p>
          </div>
        </div>

        {sorted.length === 0 ? (
          <div className="rounded-lg border-2 border-border-primary bg-white px-6 py-12 text-center md:px-10">
            <p className="m-0 text-lg font-body text-text-muted">
              No posts are available right now. Please check back soon.
            </p>
          </div>
        ) : (
          <section aria-labelledby="blog-posts-heading">
            <h2 id="blog-posts-heading" className="sr-only">
              Blog posts
            </h2>
            <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {sorted.map((post) => {
                const img = post.featuredImage?.node;
                const excerpt = stripHtml(post.excerpt);
                const categories =
                  post.categories?.nodes
                    ?.map((c) => c.name)
                    .filter(Boolean)
                    .join(" · ") ?? "";
                const title = stripHtml(post.title) || "Untitled";

                return (
                  <li key={post.id} className="m-0">
                    <Link href={`/Blog/${post.slug}`}>
                      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-border-primary bg-white transition-transform duration-300 ease-out hover:z-10 hover:scale-105 hover:bg-brand-primary-tint">
                        <div className="relative aspect-video w-full shrink-0 bg-brand-primary-tint">
                          {img?.sourceUrl ? (
                            <Image
                              src={img.sourceUrl}
                              alt={img.altText || title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="flex h-full min-h-[140px] items-center justify-center">
                              <Rss
                                className="h-16 w-16 text-tan-light md:h-20 md:w-20"
                                aria-hidden
                              />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                          <time
                            dateTime={post.date}
                            className="text-sm font-body text-text-muted"
                          >
                            {formatDate(post.date)}
                          </time>
                          <h3 className="m-0 font-display text-xl leading-snug transition-colors group-hover:text-brand-primary md:text-2xl">
                            {title}
                          </h3>
                          {categories ? (
                            <p className="m-0 text-sm font-body text-brand-primary">
                              {categories}
                            </p>
                          ) : null}
                          {excerpt ? (
                            <p className="m-0 line-clamp-3 text-base font-body leading-snug text-text-muted">
                              {excerpt}
                            </p>
                          ) : null}
                        </div>
                      </article>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </PageWrapper>
  );
}
