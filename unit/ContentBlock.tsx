/* eslint-disable react/react-in-jsx-scope */
"use client"

import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import Grid2 from '@mui/material/Grid2'
import { ContentBlockType } from "@/interfaces/interfaces"

// Sample blog data
const blogPosts: ContentBlockType[] = [
  {
    id: 1,
    title: "10 SEO Tips to Rank Higher in 2025",
    excerpt: "Discover the latest SEO techniques to improve your website ranking. And this the other string to test how the overall should look like when you are conding and see how the long sentence crashes your html code.",
    image: "/images/seo-tips.jpg",
    url: "/blog/seo-tips",
    publishedDate: new Date("2025-03-17"),
  },
  {
    id: 2,
    title: "How to Optimize Images for SEO",
    excerpt: "Learn how to properly compress and tag images to improve SEO.",
    image: "/images/image-seo.jpg",
    url: "/blog/image-seo",
    publishedDate: new Date("2025-03-10",)
  },
  {
    id: 3,
    title: "Top Web Design Trends for 2025",
    excerpt: "Explore the latest trends in web design that impact SEO and user experience.",
    image: "/images/web-design-trends.jpg",
    url: "/blog/web-design-trends",
    publishedDate: new Date("2025-02-25"),
  },
]

const ContentBlock = () => {
  return (
    <Box component="section" sx={{ padding: 3, maxWidth: "1200px", margin: "auto" }}>
      {/* Section Title */}
      <Typography 
        variant="h2" 
        component="h2" 
        sx={{ fontSize: "1.8rem", my: 5, display: 'flex', flexDirection: "row", justifyContent: 'center' }}
    >
        Welcome back, Khai
      </Typography>

      {/* Blog Grid */}
      <Grid2 container spacing={2}>
        {blogPosts.map((post) => (
        <Card sx={{ height: '100%', width: '100%' }} key={post.id}>
          <CardActionArea component="a" href={post.url}>
            {/* Optimized Image with Lazy Loading */}
            <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
                loading="lazy"
            />
            <CardContent>
              {/* Blog Title */}
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {post.title}
              </Typography>
              {/* Blog Excerpt */}
              <Typography variant="body2" sx={{ color: "text.secondary", marginTop: 5 }}>
                {post.excerpt}
              </Typography>
              {/* Publish Date */}
              <Typography variant="caption" sx={{ display: "block", marginTop: 1, color: "gray" }}>
                {post.publishedDate.toString()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </Grid2>
    </Box>
  );
};

export default ContentBlock
