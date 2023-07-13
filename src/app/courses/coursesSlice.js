import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
  isLoading: false,
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
