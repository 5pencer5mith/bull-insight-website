import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import PageWrapper from "../../components/PageWrapper";
import Sidekick from "../../components/hero/sidekick/Sidekick";
import { getPostBySlug } from "../../../lib/wordpress";

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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const img = post.featuredImage?.node;
  const author = post.author?.node?.name;
  const title = stripHtml(post.title) || "Untitled";

  return (
    <PageWrapper>
      <Sidekick
        pageTitle="Insight Blog"
        subTitle="Stay up to date with the latest insights!"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-10 md:pb-16 md:pt-12">
        <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border-2 border-border-primary bg-white px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <Link
            href="/Blog"
            className="inline-block text-sm font-body text-text-primary no-underline underline-offset-4 hover:!text-brand-primary hover:!underline"
          >
            ← Back to blog
          </Link>

          <header className="mt-6 border-b border-border-primary pb-8">
            <h1 className="m-0 font-display text-3xl leading-tight md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 mb-0 text-sm font-body text-text-muted md:text-base">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {author ? (
                <>
                  {" "}
                  · <span className="text-text-primary">{author}</span>
                </>
              ) : null}
            </p>
          </header>

          <div className="pt-8">
            {img?.sourceUrl ? (
              <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg border border-border-primary">
                <Image
                  src={img.sourceUrl}
                  alt={img.altText || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            ) : null}

            <div
              className="blog-post-body max-w-none font-body text-lg leading-relaxed text-text-primary [&_a]:text-brand-primary [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-border-primary [&_blockquote]:pl-4 [&_blockquote]:text-text-muted [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-snug [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_img]:my-6 [&_img]:max-h-[480px] [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-lg [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </div>
        </article>
      </div>
    </PageWrapper>
  );
}
