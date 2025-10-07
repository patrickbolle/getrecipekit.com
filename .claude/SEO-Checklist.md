# SEO Checklist for Recipe Kit Website

## Homepage (/)
- **Title**: Recipe Kit - Turn Recipes into Revenue for Shopify Food Brands
- **Meta Description**: Create beautiful, SEO-optimized, and shoppable recipe cards for your Shopify store. Drive engagement and sales with Recipe Kit. 14-day free trial.
- **Focus Keywords**: recipe kit, Shopify recipe app, shoppable recipes, food brand recipes

## Features Page (/pages/features)
- **Title**: Recipe Kit Features - Everything You Need to Grow with Recipes
- **Meta Description**: Explore all Recipe Kit features: drag-and-drop editor, SEO optimization, shoppable ingredients, analytics, and more. Complete recipe management for Shopify stores.
- **Focus Keywords**: recipe app features, recipe builder, SEO recipes, shoppable recipes

## Pricing Page (/pages/pricing)
- **Title**: Recipe Kit Pricing - Plans for Every Food Brand
- **Meta Description**: Simple, transparent pricing for Recipe Kit. Start with a 14-day free trial. Plans designed for food brands of all sizes on Shopify.
- **Focus Keywords**: recipe app pricing, recipe kit cost, Shopify app pricing

## SEO & Structured Data Page (/pages/seo-structured-data)
- **Title**: Recipe SEO & Schema Markup - Get Found in Google Search Results
- **Meta Description**: Automatic Schema.org structured data for all recipes. Get Google Rich Results with ratings, cook time, and calories. Boost your recipe SEO with Recipe Kit.
- **Focus Keywords**: recipe SEO, schema.org recipes, Google rich results, recipe structured data

## Shoppable Recipes Page (/pages/shoppable-recipes)
- **Title**: Shoppable Recipes - Turn Recipe Content into Revenue
- **Meta Description**: Make every recipe shoppable with inline add-to-cart buttons. Connect ingredients to products and increase average order value by 45%.
- **Focus Keywords**: shoppable recipes, recipe commerce, ingredient linking, recipe revenue

## Analytics & Tracking Page (/pages/analytics-tracking)
- **Title**: Recipe Analytics - Track Performance & Revenue
- **Meta Description**: Deep insights into recipe performance, customer behavior, and revenue attribution. Know what recipes drive the most engagement and sales.
- **Focus Keywords**: recipe analytics, recipe tracking, recipe metrics, content performance

## Customizable Design Page (/pages/customizable-design)
- **Title**: Customizable Recipe Design - Match Your Brand Perfectly
- **Meta Description**: Custom colors, fonts, and layouts for your recipe cards. Multiple design options with drag-and-drop editing. No coding required.
- **Focus Keywords**: recipe design, customizable recipes, branded recipes, recipe templates

## Use Cases

### CPG Brands (/pages/use-case-cpg-brands)
- **Title**: Recipe Kit for CPG Food Brands - Drive Product Sales with Recipes
- **Meta Description**: Help CPG brands showcase products through recipes. Link ingredients to products and drive sales through recipe content.
- **Focus Keywords**: CPG recipes, food brand marketing, product recipes

### Food Bloggers (/pages/use-case-food-bloggers)
- **Title**: Recipe Kit for Food Bloggers - Monetize Your Recipe Content
- **Meta Description**: Turn your food blog into a revenue channel. Create beautiful, SEO-optimized recipes with affiliate links and product integrations.
- **Focus Keywords**: food blogger recipes, recipe monetization, food blog tools

### Restaurants (/pages/use-case-restaurants)
- **Title**: Recipe Kit for Restaurants - Share Signature Recipes & Sell Products
- **Meta Description**: Share restaurant recipes and sell signature ingredients, sauces, and products. Build your brand and create new revenue streams.
- **Focus Keywords**: restaurant recipes, chef recipes, restaurant e-commerce

### Grocery & Retail (/pages/use-case-grocery-retail)
- **Title**: Recipe Kit for Grocery & Retail - Inspire Customers & Drive Basket Size
- **Meta Description**: Inspire customers with recipes featuring your products. Increase basket size and customer engagement with shoppable recipe content.
- **Focus Keywords**: grocery recipes, retail recipes, meal inspiration

## Blog Posts

### General Guidelines for All Blog Posts
- **Title Format**: [Main Topic] - Recipe Kit Blog
- **Meta Description**: 155-160 characters summarizing the post with primary keyword
- **Image Alt Text**: Descriptive text including relevant keywords
- **Internal Links**: Link to relevant pages (features, pricing, use cases)
- **CTA**: Include call-to-action to free trial or relevant feature page

## Technical SEO Checklist

### ✅ Already Implemented
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Responsive meta viewport
- [x] Structured data (Organization, WebSite, BreadcrumbList, SoftwareApplication)
- [x] HTTPS enabled
- [x] Mobile-responsive design

### 🔧 To Configure in Shopify Admin

#### For Each Page
1. Go to **Online Store > Pages**
2. Edit each page
3. Click **Search engine listing preview** at the bottom
4. Add:
   - **Page title** (55-60 characters)
   - **Meta description** (155-160 characters)
   - **URL handle** (use hyphens, lowercase)

#### For Blog Posts
1. Go to **Online Store > Blog posts**
2. For each post:
   - Add **title** (55-60 characters)
   - Add **meta description** (155-160 characters)
   - Add **featured image** with descriptive alt text
   - Use **tags** for categorization
   - Add **excerpt** (appears in blog listings)

#### Homepage
1. Go to **Online Store > Preferences**
2. Set:
   - **Homepage title** (55-60 characters)
   - **Homepage meta description** (155-160 characters)

### 📊 Recommended Tools

1. **Google Search Console** - Monitor search performance
2. **Google Analytics 4** - Track user behavior
3. **Schema Markup Validator** - Test structured data
4. **Lighthouse** - Test page speed and SEO
5. **Screaming Frog** - Crawl site for issues

### 🎯 Keyword Strategy

**Primary Keywords:**
- Recipe Kit
- Shopify recipe app
- Shoppable recipes
- Recipe builder for Shopify

**Secondary Keywords:**
- Recipe SEO
- Food brand recipes
- Recipe structured data
- Recipe analytics
- Ingredient linking

**Long-tail Keywords:**
- How to add recipes to Shopify store
- Best recipe app for food brands
- Shoppable recipe cards Shopify
- Recipe schema markup for SEO

### 📈 Ongoing SEO Tasks

**Monthly:**
- Review Google Search Console for errors
- Update underperforming page meta descriptions
- Add new blog content (2-4 posts/month)
- Check for broken links

**Quarterly:**
- Keyword research and update strategy
- Content audit and refresh old posts
- Competitor analysis
- Update structured data as needed

## Image Optimization

**For All Images:**
- Use descriptive filenames (e.g., `recipe-kit-seo-google-results.png`)
- Add alt text describing the image
- Compress images (use WebP when possible)
- Include relevant keywords naturally in alt text
- Size images appropriately (no larger than needed)

## Internal Linking Strategy

**Homepage should link to:**
- Features page
- Pricing page
- All 4 main use cases
- Blog

**Features page should link to:**
- Specific feature pages (SEO, Shoppable, Analytics, Design)
- Pricing page
- Relevant use cases

**Use case pages should link to:**
- Features page
- Pricing page
- Related blog posts
- Other use cases (when relevant)

**Blog posts should link to:**
- Related blog posts
- Relevant feature pages
- Relevant use case pages
- Pricing page (in CTA)

## Notes

- All meta tags are managed through the `snippets/meta-tags.liquid` file
- Structured data is managed through `snippets/structured-data.liquid`
- Page-specific metadata is set in Shopify Admin (not in template files)
- The theme automatically generates proper Open Graph and Twitter Card tags
