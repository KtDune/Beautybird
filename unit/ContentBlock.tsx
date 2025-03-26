"use client"

import React from "react"
import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material"
import Grid2 from '@mui/material/Grid2'
import { ContentBlockType } from "@/interfaces/interfaces"
import { formatDate } from "@/reusableFunctions"
import Link from "next/link"
import { useUserData } from "@/hooks/useUserData"

// Sample blog data
const blogPosts: ContentBlockType[] = [
  {
    id: 1,
    title: "10 SEO Tips to Rank Higher in 2025",
    excerpt: "Discover the latest SEO techniques to improve your website ranking. And this the other string to test how the overall should look like when you are conding and see how the long sentence crashes your html code.",
    url: "/images/seo-tips.jpg",
    publishedDate: new Date("2025-03-17"),
  },
  {
    id: 2,
    title: "How to Optimize Images for SEO",
    excerpt: "Learn how to properly compress and tag images to improve SEO.",
    url: "/images/image-seo.jpg",
    publishedDate: new Date("2025-03-10",)
  },
  {
    id: 3,
    title: "Top Web Design Trends for 2025",
    excerpt: "Explore the latest trends in web design that impact SEO and user experience.",
    url: "/images/web-design-trends.jpg",
    publishedDate: new Date("2025-02-25"),
  },
]

const ContentBlock = () => {
  const { title } = useUserData()

  return (
    <Box component="section" sx={{ padding: 3, maxWidth: "1200px", margin: "auto" }}>
      {/* Section Title */}
      <Typography 
        variant="h2" 
        component="h2" 
        sx={{ fontSize: "1.8rem", my: 5, display: 'flex', flexDirection: "row", justifyContent: 'center' }}
    >
        { title }
      </Typography>

      {/* Blog Grid */}
      <Grid2 container spacing={2}>
        {blogPosts.map((post) => (
        <Card sx={{ height: '100%', width: '100%' }} key={post.id}>
          <CardActionArea component={Link} href={`/posts/${post.id}`}>
            <CardContent>
              {/* Blog Title */}
              <Typography variant="h3" component="h3" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {post.title}
              </Typography>
              <Typography variant="caption" sx={{ display: "block", marginTop: 1, color: "gray" }}>
                {formatDate(post.publishedDate)}
              </Typography>
              {/* Blog Excerpt */}
              <Typography variant="body2" sx={{ color: "text.secondary", marginY: 5 }}>
                {post.excerpt}
              </Typography>
              {/* Publish Date */}
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </Grid2>
    </Box>
  );
};

export default ContentBlock
