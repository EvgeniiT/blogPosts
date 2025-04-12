"use client";
import { Container, Skeleton, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useFetchPostQuery, useFetchUserByIdQuery } from "../../services/api";

export default function Post() {
  const { id } = useParams();
  const postId = Array.isArray(id) ? id[0] : id;

  const { data: post, isLoading: isPostLoading } = useFetchPostQuery(
    postId || undefined
  );
  const { data: user, isLoading: isUserLoading } = useFetchUserByIdQuery(
    post?.userId
  );

  if (!postId) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          Invalid post ID.
        </Typography>
      </Container>
    );
  }

  if (isUserLoading || isPostLoading) {
    return (
      <Container>
        <Skeleton variant="text" width="60%" height={40} />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          style={{ marginTop: 16 }}
        />
        <Skeleton
          variant="text"
          width="40%"
          height={30}
          style={{ marginTop: 16 }}
        />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          Post not found.
        </Typography>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          User not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Author: {user.name}
      </Typography>
    </Container>
  );
}
