import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [
    {
      id: 'C1',
      title: 'Course 1',
      description: 'This is course 1',
      videos: [
        {
          videoId: 'j_OwK2OzO8E',
          title: 'Video 1',
          description: 'This is video 1',
        },
        {
          videoId: 'pKmM1N0MoC4',
          title: 'Video 2',
          description: 'This is video 2',
        },
        {
          videoId: 'el6No1wNKf0',
          title: 'Video 3',
          description: 'This is video 3',
        },
      ],
    },
    {
      id: 'C2',
      title: 'Course 2',
      description: 'This is course 2',
      videos: [
        {
          videoId: 'pKmM1N0MoC4',
          title: 'Video 1',
          description: 'This is video 1',
        },
        {
          videoId: 'el6No1wNKf0',
          title: 'Video 2',
          description: 'This is video 2',
        },
      ],
    },
    {
      id: 'C3',
      title: 'Course 3',
      description: 'This is course 3',
      videos: [
        {
          videoId: 'pKmM1N0MoC4',
          title: 'Video 1',
          description: 'This is video 1',
        },
        {
          videoId: 'el6No1wNKf0',
          title: 'Video 2',
          description: 'This is video 2',
        },
      ],
    },
    {
      id: 'C4',
      title: 'Course 4',
      description: 'This is course 4',
      videos: [
        {
          videoId: 'pKmM1N0MoC4',
          title: 'Video 1',
          description: 'This is video 1',
        },
        {
          videoId: 'el6No1wNKf0',
          title: 'Video 2',
          description: 'This is video 2',
        },
      ],
    },
  ],
  manuals: [
    {
      id: 'M1',
      title: 'Manual 1',
      description: 'This is manual 1',
      url: 'https://www.newline.co/fullstack-react/assets/media/sGEMe/MNzue/30-days-of-react-ebook-fullstackio.pdf',
    },
    {
      id: 'M2',
      title: 'Manual 2',
      description: 'This is manual 2',
      url: 'https://www.theseus.fi/bitstream/handle/10024/342721/Phan_Hong_Duc.pdf',
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
