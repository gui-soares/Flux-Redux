const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description:
            'A declarative, efficent, and flexible Javascript library for bulding user interfaces',
          url: 'http:/github.com/faceboo/react',
        },
      ];
    default:
      return state;
  }
}
