import { Box, Stack, Typography } from "@mui/material";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";

export default async function HomePage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={2}
      >
        <Typography variant="h1" gutterBottom>
          Blog Posts
        </Typography>
        <CreatePost />
      </Stack>
      <PostsList />
    </Box>
  );
}
