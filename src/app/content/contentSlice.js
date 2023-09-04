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
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-v2-data.appspot.com/o/CORSA_2002.pdf?alt=media&token=34699020-f5a8-4fd6-aed7-94a20f650564',
    },
    {
      id: 'M2',
      title: 'Manual 2',
      description: 'This is manual 2',
      url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
  ],
  programs: [
    {
      id: 'P1',
      title: 'Program1',
      description: 'This is program 1',
      file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
      id: 'P2',
      title: 'Program2',
      description: 'This is program 2',
      file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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
