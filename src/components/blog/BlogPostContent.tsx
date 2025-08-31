// components/blog/BlogPostContent.tsx
import Image from 'next/image';

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  slug: string;
  image?: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // Only show full content for the CRM article
  const showFullContent = post.slug === 'crm-sales-process';

  return (
    <article 
      className="flex-1"
      style={{
        width: '857px',
        maxWidth: '857px'
      }}
    >
      <div 
        className="relative mb-[51px]"
        style={{
          width: '826px',
          height: '447px',
          background: '#D9D9D9',
          borderRadius: '19px 19px 0px 0px'
        }}
      >
        <Image
          src={post.image || '/images/blog/default.jpg'}
          alt={post.title}
          fill
          className="object-cover"
          style={{ borderRadius: '19px 19px 0px 0px' }}
        />
      </div>

      <div 
        style={{
          fontFamily: 'Sequel Sans',
          fontWeight: 415,
          fontSize: '25px',
          lineHeight: '29px',
          color: '#000000'
        }}
      >
        {showFullContent ? (
          <>
            <h1 className="mb-6 font-bold text-[32px] leading-[38px]">
              Mastering Local SEO: The Key to Winning Local Customers in the Digital Age
            </h1>
            
            <div className="space-y-6">
              <p>
                Today, with so many businesses competing online, showing up in front of nearby customers at the exact right time is more important than ever. That's where local SEO (Search Engine Optimization) makes a huge difference. Whether you run a restaurant, a law office, a gym, or a home repair service, local SEO helps connect your business with people searching in your area. It's not just about being online—it's about being found by the right people near you.
              </p>

              <p>
                Local SEO isn't just a checklist of digital tasks. It's a long-term strategy to build visibility, trust, and relevance in your specific geographic area. From optimizing your Google presence to tailoring your content for local search terms, every step adds to your chances of showing up when and where it matters most.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Introduction: Why Local SEO Is Crucial for Local Businesses</h2>
              <p>
                Local SEO helps you appear in searches when potential customers look for services "near me" or by city and neighborhood. Unlike general SEO that targets broader audiences, local SEO puts your business on the digital map for those actively looking nearby.
              </p>
              <p>
                From improving map listings to earning positive reviews and ranking in the local 3-pack, this type of SEO builds trust, boosts traffic, and drives footfall or calls from people who are already looking to buy.
              </p>
              <p>
                If your competitors are ranking and you're not, you're missing out on high-converting leads that could've been yours. Local SEO ensures that your online presence reflects real-world value.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Google Business Profile: Your Digital Storefront</h2>
              <p>
                Google Business Profile (formerly Google My Business) is a must-have for any local business. It determines how you appear on Google Maps, search results, and in voice searches. Setting it up is free—but optimizing it is where the magic happens.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Ensure that your business name, address, phone number (NAP), hours, and categories are accurate.</li>
                <li>✅ Add appealing photos, services, FAQs, and updates.</li>
                <li>✅ Use posts to share news, offers, or events directly in search results.</li>
                <li>✅ Track engagement with insights on views, clicks, and direction requests.</li>
              </ul>
              <p>
                Your Google Business Profile isn't just a listing—it's a conversion tool. Done well, it can drive people straight from search to your front door.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Online Reviews: The New Word-of-Mouth</h2>
              <p>
                Positive reviews do more than just make you look good—they directly impact your local search rankings. Google considers review quantity, quality, and freshness when deciding how to rank businesses.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Ask happy customers to leave a review on your Google profile.</li>
                <li>✅ Reply to every review—positive or negative—to show active engagement.</li>
                <li>✅ Encourage reviews on platforms like Yelp, Facebook, and niche directories in your industry.</li>
              </ul>
              <p>
                Reviews boost credibility and trust. A business with glowing, recent feedback is far more likely to get chosen than one with outdated or negative reviews.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Local Keywords: Speak Your Customer's Language</h2>
              <p>
                You want your business to show up when someone searches for "best gym in [City]" or "emergency plumber near me." That means using the right local keywords.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Do keyword research focused on geographic modifiers (e.g., city, neighborhood).</li>
                <li>✅ Add these keywords to your titles, meta descriptions, headers, and website content.</li>
                <li>✅ Include local landmarks, directions, and service areas naturally in your text.</li>
              </ul>
              <p>
                Keyword optimization is not about stuffing words—it's about understanding how people actually search for local businesses like yours.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Content for the Community: Make It Local</h2>
              <p>
                Publishing content that's locally relevant gives Google more context about your location and helps your site rank higher in local results.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Write blog posts about local events, news, or collaborations.</li>
                <li>✅ Create location pages if you serve multiple areas.</li>
                <li>✅ Highlight customer stories, case studies, or testimonials from local clients.</li>
              </ul>
              <p>
                This approach connects you more closely to your community and reinforces your authority in your niche.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Mobile Optimization: Because Local = Mobile</h2>
              <p>
                Over 60% of local searches happen on smartphones. If your website doesn't load fast or look good on mobile, you'll lose potential customers on the spot.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Use a responsive web design that adapts to all screen sizes.</li>
                <li>✅ Compress images and use lightweight scripts for faster loading.</li>
                <li>✅ Keep contact buttons (like Call Now or Get Directions) easily clickable.</li>
              </ul>
              <p>
                Mobile-friendly websites improve user experience, reduce bounce rate, and increase your chances of showing up in local results.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">NAP Consistency and Local Citations</h2>
              <p>
                Google wants to see the same business name, address, and phone number (NAP) across the web. Inconsistent listings can confuse search engines and lower your credibility.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ List your business in online directories like Yelp, Justdial, YellowPages, and Bing Places.</li>
                <li>✅ Ensure NAP consistency in every listing, right down to abbreviations and punctuation.</li>
                <li>✅ Use tools like Moz Local or BrightLocal to audit and fix citation errors.</li>
              </ul>
              <p>
                Each citation reinforces your legitimacy in a specific location, helping boost your overall local SEO score.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Structured Data and On-Page Signals</h2>
              <p>
                Schema markup (structured data) helps search engines better understand your business details. Think of it as an "extra label" for your content.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Add LocalBusiness schema to your homepage and contact page.</li>
                <li>✅ Include business hours, menu items, prices, and service areas using JSON-LD format.</li>
                <li>✅ Optimize your title tags and meta descriptions with local keywords and calls to action.</li>
              </ul>
              <p>
                These behind-the-scenes enhancements tell search engines exactly what you offer—and where.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Backlinks from Local Sources</h2>
              <p>
                Local backlinks act as endorsements. When reputable local websites link to your site, it sends trust signals to Google.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Join local chambers of commerce or business associations and request a link.</li>
                <li>✅ Sponsor or collaborate with local events, schools, or charities.</li>
                <li>✅ Reach out to local bloggers or news sites with press releases or guest post pitches.</li>
              </ul>
              <p>
                Building local links doesn't just help SEO—it strengthens community presence too.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Social Media and Local Engagement</h2>
              <p>
                Your social media channels also influence your local presence.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Tag your location in posts and stories.</li>
                <li>✅ Share locally relevant updates, promotions, and customer interactions.</li>
                <li>✅ Encourage users to tag your business when they visit or review.</li>
              </ul>
              <p>
                Search engines recognize active, locally engaged businesses as more relevant for local searchers.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Performance, Speed, and SEO Tech Setup</h2>
              <p>
                A technically sound website is the foundation of any SEO strategy—including local.
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>✅ Use SEO-friendly URL structures and page titles.</li>
                <li>✅ Minimize broken links and optimize internal linking.</li>
                <li>✅ Set up local landing pages for each location or service area.</li>
                <li>✅ Enable SSL (https), optimize site speed, and use image alt tags.</li>
              </ul>
              <p>
                A fast, accessible, well-structured website builds a strong SEO base and creates a better user experience.
              </p>

              <h2 className="font-bold mt-8 mb-4 text-[28px]">Conclusion: Think Local, Win Global (One Neighborhood at a Time)</h2>
              <p>
                Local SEO is more than a marketing tactic—it's a growth engine for local businesses. From showing up on Google Maps to getting picked over your competitor, it's about being the business people find and trust when they need help nearby.
              </p>
              <p>
                By claiming your Google Business Profile, collecting real reviews, writing local content, and optimizing your technical SEO, you're investing in visibility that compounds over time.
              </p>
              <p>
                As mobile and voice search become more dominant, local SEO will only grow in importance. The businesses that act now will be the ones leading tomorrow.
              </p>
              <p>
                Whether you're opening your doors or expanding to new areas, mastering local SEO gives your brand a powerful edge—right in your own backyard.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-6 font-bold text-[32px] leading-[38px]">
              {post.title}
            </h2>
            <div className="space-y-6">
              <p>{post.excerpt}</p>
              <p className="text-gray-600">
                Full content coming soon...
              </p>
            </div>
          </>
        )}
      </div>
    </article>
  );
}