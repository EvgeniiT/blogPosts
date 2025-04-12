"use client";

import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useCreatePostMutation } from "../services/api";

const CreatePost = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [createPost, { isLoading }] = useCreatePostMutation();

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string | undefined;
    const content = formData.get("content") as string | undefined;

    if (!title || !content) {
      console.error("Title and content are required.");
      return;
    }

    try {
      await createPost({ title, body: content });
      closeDrawer();
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={openDrawer}>
        Create New Post
      </Button>
      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Create New Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              name="content"
              label="Content"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Box>
      </Drawer>
    </Box>
  );
};

export default CreatePost;
