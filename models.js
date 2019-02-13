export const repaintSection = {
  state: 0,
  reducers: {
    repaint(_, activeSlide) {
      return activeSlide;
    }
  }
};

export const hideScrollDown = {
  state: false,
  reducers: {
    shouldHide(_, activeSlide) {
      // Only show on the first section
      return activeSlide === 4;
    }
  }
};
