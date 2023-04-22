export const FETCH_DATA = "FETCH_DATA";

function fetchActionData(articles) {
  return {
    type: FETCH_DATA,
    payload: {
      data: articles,
    },
  };
}

export default fetchActionData;
