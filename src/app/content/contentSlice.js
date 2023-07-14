import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [
    {
      id: 'C1',
      title: 'Course 1',
      description: 'This is course 1',
      videos: [
        {
          videoId: 1,
          title: 'Video 1',
          description: 'This is video 1',
          url: 'https://www.youtube.com/watch?v=1',
        },
      ],
    },
    {
      id: 'C2',
      title: 'Course 2',
      description: 'This is course 2',
      videos: [
        {
          videoId: 1,
          title: 'Video 1',
          description: 'This is video 1',
          url: 'https://www.youtube.com/watch?v=1',
        },
      ],
    },
    {
      id: 'C3',
      title: 'Course 3',
      description: 'This is course 3',
      videos: [
        {
          videoId: 1,
          title: 'Video 1',
          description: 'This is video 1',
          url: 'https://www.youtube.com/watch?v=1',
        },
      ],
    },
    {
      id: 'C4',
      title: 'Course 3',
      description: 'This is course 3',
      videos: [
        {
          videoId: 1,
          title: 'Video 1',
          description: 'This is video 1',
          url: 'https://www.youtube.com/watch?v=1',
        },
      ],
    },
  ],
  manuals: [
    {
      id: 'M1',
      title: 'Manual 1',
      description: 'This is manual 1',
      url: 'https://example.pdf',
    },
    {
      id: 'M2',
      title: 'Manual 2',
      description: 'This is manual 2',
      url: 'https://example.pdf',
    },
  ],
  programs: [
    {
      id: 'P1',
      title: 'Program 1',
      description: 'This is program 1',
      file: 'example.rar',
    },
    {
      id: 'P2',
      title: 'Program 2',
      description: 'This is program 2',
      file: 'example.rar',
    },
  ],
  isLoading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
