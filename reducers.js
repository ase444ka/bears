export const ACCEPT = 'ACCEPT';
export const DENY = 'DENY';

export default {
  acceptApplication: (payload) => {
    return {
      type: ACCEPT,
      payload,
    };
  },

  denyApplication: (payload) => {
    return {
      type: DENY,
      payload,
    };
  },
};
