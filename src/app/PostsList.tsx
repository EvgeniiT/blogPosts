"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useGetPostsQuery, useGetUsersQuery } from "../services/api";

export default function PostsList() {
  const { data: posts = [], isLoading: postsLoading } = useGetPostsQuery();
  const { data: users = [], isLoading: usersLoading } = useGetUsersQuery();

  const authors = users.reduce((acc: Record<string, string>, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  if (postsLoading || usersLoading) {
    return (
      <Box>
        {[...Array(5)].map((_, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardHeader
              title={<Skeleton width="60%" />}
              subheader={<Skeleton width="40%" />}
            />
            <CardContent>
              <Skeleton variant="rectangular" height={80} />
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <Box>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardHeader
            title={post.title}
            subheader={`By: ${authors[post.userId] || "Unknown"}`}
          />
          <CardContent>
            <Typography variant="body1" gutterBottom noWrap>
              {post.body}
            </Typography>
            <Button
              component={Link}
              href={`/${post.id}`}
              variant="text"
              color="primary"
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
